import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { 
    PRESET_THEMES, 
    DEFAULT_THEME_ID, 
    THEME_STORAGE_KEY, 
    ADMIN_PREVIEW_KEY,
    generateThemeTokens, 
    isValidHex 
} from './themeConfig';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    // Initial theme loader from localStorage or default
    const getInitialTheme = () => {
        try {
            const stored = localStorage.getItem(THEME_STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                if (parsed && parsed.colors && parsed.presetId) {
                    return parsed;
                }
            }
        } catch (e) {
            console.warn('Failed to parse saved theme from localStorage:', e);
        }
        const defaultPreset = PRESET_THEMES.find(p => p.id === DEFAULT_THEME_ID) || PRESET_THEMES[0];
        return {
            presetId: defaultPreset.id,
            colors: { ...defaultPreset.colors }
        };
    };

    const [savedTheme, setSavedTheme] = useState(getInitialTheme);
    const [activePreset, setActivePreset] = useState(savedTheme.presetId);
    const [workingColors, setWorkingColors] = useState({ ...savedTheme.colors });
    const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    
    // Check if admin mode was previously enabled in this browser
    const [isAdminMode, setIsAdminMode] = useState(() => {
        try {
            return localStorage.getItem(ADMIN_PREVIEW_KEY) === 'true';
        } catch {
            return false;
        }
    });

    // Apply tokens to CSS variables on root document
    const applyTokensToDOM = useCallback((colors, themeId) => {
        if (typeof document === 'undefined') return;
        const tokens = generateThemeTokens(colors);
        const root = document.documentElement;

        Object.entries(tokens).forEach(([token, value]) => {
            root.style.setProperty(token, value);
        });

        root.setAttribute('data-theme', themeId);
    }, []);

    // Initial mount application
    useEffect(() => {
        applyTokensToDOM(workingColors, activePreset);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // Live update DOM whenever workingColors or activePreset changes
    useEffect(() => {
        applyTokensToDOM(workingColors, activePreset);
    }, [workingColors, activePreset, applyTokensToDOM]);

    // Track unsaved changes
    useEffect(() => {
        const isPresetChanged = activePreset !== savedTheme.presetId;
        const areColorsChanged = Object.keys(workingColors).some(
            key => workingColors[key] !== savedTheme.colors[key]
        );
        setHasUnsavedChanges(isPresetChanged || areColorsChanged);
    }, [workingColors, activePreset, savedTheme]);

    // Select a preset theme
    const selectPreset = useCallback((presetId) => {
        const found = PRESET_THEMES.find(p => p.id === presetId);
        if (found) {
            setActivePreset(found.id);
            setWorkingColors({ ...found.colors });
        } else if (presetId === 'custom') {
            setActivePreset('custom');
        }
    }, []);

    // Update single custom color
    const updateCustomColor = useCallback((key, hexValue) => {
        setActivePreset('custom');
        setWorkingColors(prev => ({
            ...prev,
            [key]: hexValue
        }));
    }, []);

    // Apply current working theme immediately
    const applyTheme = useCallback(() => {
        applyTokensToDOM(workingColors, activePreset);
    }, [workingColors, activePreset, applyTokensToDOM]);

    // Save current theme persistently
    const saveTheme = useCallback(() => {
        try {
            const dataToSave = {
                presetId: activePreset,
                colors: workingColors,
                savedAt: new Date().toISOString()
            };
            localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(dataToSave));
            setSavedTheme(dataToSave);
            setHasUnsavedChanges(false);
            return { success: true };
        } catch (e) {
            console.error('Error saving theme to localStorage:', e);
            return { success: false, error: e.message };
        }
    }, [activePreset, workingColors]);

    // Reset back to Davick Blue default theme
    const resetToDefault = useCallback(() => {
        const defaultPreset = PRESET_THEMES.find(p => p.id === DEFAULT_THEME_ID) || PRESET_THEMES[0];
        const defaultData = {
            presetId: defaultPreset.id,
            colors: { ...defaultPreset.colors }
        };
        setActivePreset(defaultData.presetId);
        setWorkingColors(defaultData.colors);
        setSavedTheme(defaultData);
        try {
            localStorage.removeItem(THEME_STORAGE_KEY);
        } catch (e) {
            console.warn(e);
        }
        applyTokensToDOM(defaultData.colors, defaultData.presetId);
        setHasUnsavedChanges(false);
    }, [applyTokensToDOM]);

    // Cancel working changes and revert to last saved state
    const cancelChanges = useCallback(() => {
        setActivePreset(savedTheme.presetId);
        setWorkingColors({ ...savedTheme.colors });
        applyTokensToDOM(savedTheme.colors, savedTheme.presetId);
        setHasUnsavedChanges(false);
    }, [savedTheme, applyTokensToDOM]);

    // Toggle customizer panel
    const toggleCustomizer = useCallback(() => {
        setIsCustomizerOpen(prev => !prev);
    }, []);

    // Toggle Admin / Preview mode
    const toggleAdminMode = useCallback(() => {
        setIsAdminMode(prev => {
            const next = !prev;
            try {
                localStorage.setItem(ADMIN_PREVIEW_KEY, String(next));
            } catch (e) {
                console.warn(e);
            }
            return next;
        });
    }, []);

    const contextValue = useMemo(() => ({
        activePreset,
        workingColors,
        savedTheme,
        hasUnsavedChanges,
        isCustomizerOpen,
        isAdminMode,
        selectPreset,
        updateCustomColor,
        applyTheme,
        saveTheme,
        resetToDefault,
        cancelChanges,
        toggleCustomizer,
        setIsCustomizerOpen,
        toggleAdminMode
    }), [
        activePreset,
        workingColors,
        savedTheme,
        hasUnsavedChanges,
        isCustomizerOpen,
        isAdminMode,
        selectPreset,
        updateCustomColor,
        applyTheme,
        saveTheme,
        resetToDefault,
        cancelChanges,
        toggleCustomizer,
        toggleAdminMode
    ]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}

import { useState, useEffect, useRef } from 'react';
import { 
    FaPalette, 
    FaTimes, 
    FaCheck, 
    FaUndo, 
    FaSave, 
    FaSlidersH, 
    FaSun, 
    FaMoon,
    FaShieldAlt, 
    FaInfoCircle, 
    FaCheckCircle, 
    FaExclamationTriangle,
    FaArrowRight
} from 'react-icons/fa';
import { useTheme } from '../../theme/ThemeContext';
import { PRESET_THEMES, isValidHex, getContrastRatio } from '../../theme/themeConfig';
import './ThemeCustomizer.css';

const COLOR_FIELDS = [
    { key: 'primary', label: 'Primary Brand Color', desc: 'Main CTA buttons, highlights, brand accents' },
    { key: 'secondary', label: 'Secondary Brand Color', desc: 'Secondary buttons, hover gradients' },
    { key: 'accent', label: 'Accent Color', desc: 'Badges, icons, decorative borders' },
    { key: 'bg', label: 'Page Background', desc: 'Main website canvas' },
    { key: 'textMain', label: 'Main Text Color', desc: 'Headings, body copy, and labels' },
];

export default function ThemeCustomizer() {
    const {
        activePreset,
        workingColors,
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
    } = useTheme();

    const [hexInputs, setHexInputs] = useState({});
    const [hexErrors, setHexErrors] = useState({});
    const [notification, setNotification] = useState(null);
    const panelRef = useRef(null);

    // Sync hex input text with workingColors
    useEffect(() => {
        const nextHex = {};
        COLOR_FIELDS.forEach(({ key }) => {
            nextHex[key] = workingColors[key] || '#000000';
        });
        setHexInputs(nextHex);
        setHexErrors({});
    }, [workingColors]);

    // Handle ESC key to close panel
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isCustomizerOpen) {
                setIsCustomizerOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isCustomizerOpen, setIsCustomizerOpen]);

    // Notification helper
    const showToast = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 3500);
    };

    // Handle manual hex typing
    const handleHexInputChange = (key, rawValue) => {
        let value = rawValue.trim();
        if (value && !value.startsWith('#')) {
            value = '#' + value;
        }
        setHexInputs(prev => ({ ...prev, [key]: value }));

        if (isValidHex(value)) {
            setHexErrors(prev => ({ ...prev, [key]: null }));
            updateCustomColor(key, value);
        } else {
            setHexErrors(prev => ({ ...prev, [key]: 'Invalid hex (e.g. #079FE8)' }));
        }
    };

    // Handle visual color picker change
    const handleColorPickerChange = (key, value) => {
        setHexInputs(prev => ({ ...prev, [key]: value }));
        setHexErrors(prev => ({ ...prev, [key]: null }));
        updateCustomColor(key, value);
    };

    // Save action
    const handleSave = () => {
        const result = saveTheme();
        if (result.success) {
            showToast('Theme saved successfully! Settings will persist after refresh.');
        } else {
            showToast('Failed to save theme: ' + result.error, 'error');
        }
    };

    // Reset action
    const handleReset = () => {
        resetToDefault();
        showToast('Theme reset to official Davick Blue default.');
    };

    // Cancel action
    const handleCancel = () => {
        cancelChanges();
        showToast('Changes discarded. Reverted to last saved theme.');
    };

    // Calculate live accessibility contrast ratios
    const textOnBgContrast = getContrastRatio(workingColors.textMain || '#252B33', workingColors.bg || '#F4F7FA');
    const isTextAccessible = textOnBgContrast >= 4.5;

    return (
        <>
            {/* FLOATING TRIGGER BUTTON */}
            <button
                type="button"
                className={`theme-trigger-btn ${isCustomizerOpen ? 'active' : ''}`}
                onClick={toggleCustomizer}
                aria-label="Customize Theme"
                title="Customize Theme"
                id="theme-customizer-trigger"
            >
                <FaPalette className="trigger-icon" />
                <span className="trigger-text">Customize Theme</span>
                {hasUnsavedChanges && <span className="trigger-badge" title="Unsaved changes">•</span>}
            </button>

            {/* BACKDROP OVERLAY FOR MOBILE/MODAL */}
            {isCustomizerOpen && (
                <div 
                    className="theme-backdrop" 
                    onClick={() => setIsCustomizerOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* CUSTOMIZER DRAWER / PANEL */}
            <aside
                ref={panelRef}
                className={`theme-customizer-panel ${isCustomizerOpen ? 'open' : ''}`}
                aria-label="Theme Customization Panel"
                role="dialog"
                aria-modal="true"
            >
                {/* PANEL HEADER */}
                <header className="customizer-header">
                    <div className="header-title-box">
                        <div className="header-icon-wrap">
                            <FaPalette />
                        </div>
                        <div>
                            <h2 className="customizer-title">Theme Customizer</h2>
                            <p className="customizer-subtitle">Davick Refrigeration Design System</p>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="customizer-close-btn"
                        onClick={() => setIsCustomizerOpen(false)}
                        aria-label="Close Theme Customizer"
                    >
                        <FaTimes />
                    </button>
                </header>

                {/* TOAST NOTIFICATION */}
                {notification && (
                    <div className={`customizer-toast ${notification.type}`} role="alert">
                        {notification.type === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
                        <span>{notification.message}</span>
                    </div>
                )}

                {/* ACCESS & ADMIN STATUS BAR */}
                <div className="admin-status-bar">
                    <div className="status-info">
                        <FaShieldAlt className={isAdminMode ? 'icon-admin' : 'icon-preview'} />
                        <div>
                            <span className="status-badge">{isAdminMode ? 'Admin Config Mode' : 'Visitor Preview Mode'}</span>
                            <span className="status-desc">
                                {isAdminMode 
                                    ? 'Saves permanent branding for this browser.' 
                                    : 'Live preview enabled; save when ready.'}
                            </span>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="mode-toggle-btn"
                        onClick={toggleAdminMode}
                        title="Toggle Admin / Preview mode"
                    >
                        {isAdminMode ? 'Switch to Preview' : 'Admin Mode'}
                    </button>
                </div>

                {/* PANEL SCROLLABLE CONTENT */}
                <div className="customizer-body">
                    {/* SECTION 1: PRESET THEMES */}
                    <section className="customizer-section">
                        <div className="section-header">
                            <h3 className="section-heading">Preset Themes</h3>
                            <span className="preset-count">{PRESET_THEMES.length} Presets</span>
                        </div>
                        <p className="section-description">
                            Select a professionally curated color palette tailored for cooling and HVAC solutions:
                        </p>

                        <div className="presets-grid">
                            {PRESET_THEMES.map((preset) => {
                                const isSelected = activePreset === preset.id;
                                return (
                                    <button
                                        key={preset.id}
                                        type="button"
                                        className={`preset-card ${isSelected ? 'selected' : ''}`}
                                        onClick={() => selectPreset(preset.id)}
                                        aria-pressed={isSelected}
                                    >
                                        <div className="preset-swatches">
                                            <span 
                                                className="swatch" 
                                                style={{ backgroundColor: preset.colors.primary }} 
                                                title="Primary Color"
                                            />
                                            <span 
                                                className="swatch" 
                                                style={{ backgroundColor: preset.colors.secondary }} 
                                                title="Secondary Color"
                                            />
                                            <span 
                                                className="swatch" 
                                                style={{ backgroundColor: preset.colors.bg }} 
                                                title="Background"
                                            />
                                            <span 
                                                className="swatch" 
                                                style={{ backgroundColor: preset.colors.textMain }} 
                                                title="Text Main"
                                            />
                                        </div>
                                        <div className="preset-info">
                                            <div className="preset-name-row">
                                                <span className="preset-name">{preset.name}</span>
                                                {preset.isDefault && <span className="default-pill">Default</span>}
                                                {isSelected && <FaCheck className="selected-check" />}
                                            </div>
                                            <span className="preset-sub">{preset.subtitle}</span>
                                        </div>
                                    </button>
                                );
                            })}

                            {/* CUSTOM THEME OPTION */}
                            <button
                                type="button"
                                className={`preset-card ${activePreset === 'custom' ? 'selected' : ''}`}
                                onClick={() => selectPreset('custom')}
                                aria-pressed={activePreset === 'custom'}
                            >
                                <div className="preset-swatches custom-swatches">
                                    <FaSlidersH />
                                </div>
                                <div className="preset-info">
                                    <div className="preset-name-row">
                                        <span className="preset-name">Custom Theme</span>
                                        {activePreset === 'custom' && <FaCheck className="selected-check" />}
                                    </div>
                                    <span className="preset-sub">User-defined colors</span>
                                </div>
                            </button>
                        </div>
                    </section>

                    {/* SECTION 2: LIVE PREVIEW CARD */}
                    <section className="customizer-section">
                        <div className="section-header">
                            <h3 className="section-heading">Live Preview</h3>
                            <span className="live-indicator">
                                <span className="pulse-dot"></span> Live on Page
                            </span>
                        </div>

                        <div 
                            className="preview-card"
                            style={{
                                backgroundColor: workingColors.bgSecondary || '#FFFFFF',
                                borderColor: workingColors.border || '#DCE4EC',
                                color: workingColors.textMain || '#252B33'
                            }}
                        >
                            <div className="preview-nav-mock">
                                <span 
                                    className="preview-logo"
                                    style={{ color: workingColors.primary || '#079FE8' }}
                                >
                                    Davick Refrigeration
                                </span>
                                <span 
                                    className="preview-tag"
                                    style={{
                                        backgroundColor: `${workingColors.primary || '#079FE8'}18`,
                                        color: workingColors.primary || '#079FE8',
                                        borderColor: workingColors.primary || '#079FE8'
                                    }}
                                >
                                    Active Preset: {activePreset === 'custom' ? 'Custom' : PRESET_THEMES.find(p => p.id === activePreset)?.name || 'Default'}
                                </span>
                            </div>

                            <div className="preview-body">
                                <h4 
                                    className="preview-headline"
                                    style={{ color: workingColors.heading || workingColors.textMain || '#252B33' }}
                                >
                                    Precision Cooling & HVAC Systems
                                </h4>
                                <p 
                                    className="preview-paragraph"
                                    style={{ color: workingColors.textMuted || '#64748B' }}
                                >
                                    Expert 24/7 refrigeration maintenance, installation, and spare parts.
                                </p>

                                <div className="preview-actions">
                                    <button
                                        type="button"
                                        className="preview-btn-primary"
                                        style={{
                                            background: `linear-gradient(135deg, ${workingColors.primary || '#079FE8'} 0%, ${workingColors.secondary || '#087EBD'} 100%)`,
                                            color: '#FFFFFF'
                                        }}
                                    >
                                        Book Repair <FaArrowRight style={{ marginLeft: 6 }} />
                                    </button>
                                    <button
                                        type="button"
                                        className="preview-btn-outline"
                                        style={{
                                            borderColor: workingColors.border || '#DCE4EC',
                                            color: workingColors.textMain || '#252B33'
                                        }}
                                    >
                                        Contact Us
                                    </button>
                                </div>
                            </div>

                            {/* CONTRAST CHECKER */}
                            <div className="preview-contrast-bar">
                                <span className="contrast-label">Contrast Ratio:</span>
                                <span className={`contrast-value ${isTextAccessible ? 'pass' : 'warn'}`}>
                                    {textOnBgContrast}:1 {isTextAccessible ? '(WCAG AA Pass)' : '(Low Contrast)'}
                                </span>
                            </div>
                        </div>
                    </section>

                    {/* SECTION 3: CUSTOM COLOR CONTROLS */}
                    <section className="customizer-section">
                        <div className="section-header">
                            <h3 className="section-heading">Custom Color Controls</h3>
                            <span className="section-badge">Hex & Visual</span>
                        </div>
                        <p className="section-description">
                            Fine-tune individual design tokens. Changes apply immediately across the website:
                        </p>

                        <div className="color-controls-list">
                            {COLOR_FIELDS.map(({ key, label, desc }) => {
                                const currentColor = workingColors[key] || '#000000';
                                const currentInput = hexInputs[key] ?? currentColor;
                                const error = hexErrors[key];

                                return (
                                    <div key={key} className="color-field-row">
                                        <div className="field-meta">
                                            <label htmlFor={`color-picker-${key}`} className="field-label">
                                                {label}
                                            </label>
                                            <span className="field-desc">{desc}</span>
                                        </div>

                                        <div className="field-inputs">
                                            <div className="picker-wrapper">
                                                <input
                                                    type="color"
                                                    id={`color-picker-${key}`}
                                                    value={isValidHex(currentColor) ? currentColor : '#079FE8'}
                                                    onChange={(e) => handleColorPickerChange(key, e.target.value)}
                                                    className="visual-color-input"
                                                    aria-label={`${label} visual picker`}
                                                />
                                            </div>

                                            <div className="hex-input-wrap">
                                                <input
                                                    type="text"
                                                    id={`hex-input-${key}`}
                                                    value={currentInput}
                                                    onChange={(e) => handleHexInputChange(key, e.target.value)}
                                                    maxLength={7}
                                                    placeholder="#079FE8"
                                                    className={`hex-text-input ${error ? 'input-error' : ''}`}
                                                    aria-label={`${label} hex code input`}
                                                    spellCheck="false"
                                                />
                                            </div>
                                        </div>
                                        {error && <span className="field-error-text">{error}</span>}
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                </div>

                {/* PANEL CONTROLS FOOTER */}
                <footer className="customizer-footer">
                    <div className="footer-button-grid">
                        <button
                            type="button"
                            className="btn-control btn-apply"
                            onClick={applyTheme}
                            title="Apply Theme to current view"
                        >
                            <FaCheck /> Apply Theme
                        </button>

                        <button
                            type="button"
                            className="btn-control btn-save"
                            onClick={handleSave}
                            title="Save theme settings persistently"
                        >
                            <FaSave /> Save Theme
                        </button>

                        <button
                            type="button"
                            className="btn-control btn-reset"
                            onClick={handleReset}
                            title="Reset all settings to default Davick Blue"
                        >
                            <FaUndo /> Reset to Default
                        </button>

                        <button
                            type="button"
                            className="btn-control btn-cancel"
                            onClick={handleCancel}
                            disabled={!hasUnsavedChanges}
                            title="Discard unsaved changes"
                        >
                            <FaTimes /> Cancel Changes
                        </button>
                    </div>
                </footer>
            </aside>
        </>
    );
}

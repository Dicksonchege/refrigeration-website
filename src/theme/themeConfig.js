/**
 * Davick Refrigeration - Global Theme System Configuration
 * Presets, design token definitions, hex validation, and accessibility contrast helpers.
 */

export const THEME_STORAGE_KEY = 'davick_refrigeration_theme_v1';
export const ADMIN_PREVIEW_KEY = 'davick_theme_admin_mode';

// Helper to calculate relative luminance for WCAG contrast
export function getLuminance(hexColor) {
    if (!hexColor || typeof hexColor !== 'string') return 0;
    const cleanHex = hexColor.replace('#', '').trim();
    if (cleanHex.length !== 6 && cleanHex.length !== 3) return 0;
    const expandedHex = cleanHex.length === 3 
        ? cleanHex.split('').map(c => c + c).join('') 
        : cleanHex;
    
    const r = parseInt(expandedHex.substring(0, 2), 16) / 255;
    const g = parseInt(expandedHex.substring(2, 4), 16) / 255;
    const b = parseInt(expandedHex.substring(4, 6), 16) / 255;

    const toLinear = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
    return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

// Calculate WCAG contrast ratio between two hex colors
export function getContrastRatio(hex1, hex2) {
    const l1 = getLuminance(hex1);
    const l2 = getLuminance(hex2);
    const brightest = Math.max(l1, l2);
    const darkest = Math.min(l1, l2);
    return ((brightest + 0.05) / (darkest + 0.05)).toFixed(2);
}

// Validate 3 or 6 digit hex colors
export function isValidHex(hex) {
    if (!hex || typeof hex !== 'string') return false;
    return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(hex.trim());
}

// Generate complete CSS design tokens based on core color palette
export function generateThemeTokens(colors) {
    const primary = colors.primary || '#079FE8';
    const secondary = colors.secondary || '#087EBD';
    const accent = colors.accent || colors.secondary || '#087EBD';
    const bg = colors.bg || '#F4F7FA';
    const bgSecondary = colors.bgSecondary || '#FFFFFF';
    const textMain = colors.textMain || '#252B33';
    const textMuted = colors.textMuted || '#64748B';
    const heading = colors.heading || textMain;
    const border = colors.border || '#DCE4EC';
    const footerBg = colors.footerBg || '#252B33';
    const footerText = colors.footerText || '#FFFFFF';

    // Contrast text for primary buttons (white vs dark text based on luminance)
    const primaryLum = getLuminance(primary);
    const btnPrimaryText = primaryLum > 0.45 ? '#0F172A' : '#FFFFFF';

    return {
        '--primary-color': primary,
        '--secondary-color': secondary,
        '--accent-color': accent,
        '--bg-color': bg,
        '--bg-secondary': bgSecondary,
        '--text-main': textMain,
        '--text-muted': textMuted,
        '--heading-color': heading,
        '--border-color': border,
        '--btn-primary-bg': primary,
        '--btn-primary-text': btnPrimaryText,
        '--btn-primary-hover': secondary,
        '--link-color': primary,
        '--link-hover': secondary,
        '--header-bg': 'transparent',
        '--header-scrolled-bg': bgSecondary === '#FFFFFF' ? 'rgba(255, 255, 255, 0.96)' : 'rgba(244, 247, 250, 0.96)',
        '--footer-bg': footerBg,
        '--footer-text': footerText,
        '--footer-text-muted': '#94A3B8',
        '--footer-border': 'rgba(255, 255, 255, 0.1)',
        '--focus-ring': `${primary}66`,
        '--primary-gradient': `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
        '--primary-dark': secondary,
        '--primary-text': secondary,
        '--shadow-glow': `0 10px 40px ${primary}26`,
        '--glass-border': `${primary}33`,
        // Backwards compatibility aliases
        '--white': '#FFFFFF',
        '--background-light': bg,
        '--text-color': textMain,
        '--light-text': textMuted,
    };
}

// Preset Themes as defined in requirements
export const PRESET_THEMES = [
    {
        id: 'davick-blue',
        name: 'Davick Blue',
        subtitle: 'Official Brand (Default)',
        description: 'Cyan blue calls to action, dark charcoal headings, crisp white cards, and light grey background.',
        isDefault: true,
        colors: {
            primary: '#079FE8',
            secondary: '#087EBD',
            accent: '#079FE8',
            bg: '#F4F7FA',
            bgSecondary: '#FFFFFF',
            textMain: '#252B33',
            textMuted: '#64748B',
            heading: '#252B33',
            border: '#DCE4EC',
            footerBg: '#252B33',
            footerText: '#FFFFFF',
        }
    },
    {
        id: 'arctic-ice',
        name: 'Arctic Ice',
        subtitle: 'Cool High-Tech Cooling',
        description: 'Vibrant icy sky blue, deep arctic navy, and crystal clear surfaces for refrigeration solutions.',
        colors: {
            primary: '#0EA5E9',
            secondary: '#0284C7',
            accent: '#38BDF8',
            bg: '#F0F9FF',
            bgSecondary: '#FFFFFF',
            textMain: '#0F172A',
            textMuted: '#64748B',
            heading: '#0F172A',
            border: '#BAE6FD',
            footerBg: '#0F172A',
            footerText: '#FFFFFF',
        }
    },
    {
        id: 'professional-navy',
        name: 'Professional Navy',
        subtitle: 'Corporate & Engineering',
        description: 'Deep navy, steel blue, and structured grey tones representing industrial HVAC engineering.',
        colors: {
            primary: '#1E3A8A',
            secondary: '#3B82F6',
            accent: '#60A5FA',
            bg: '#F8FAFC',
            bgSecondary: '#FFFFFF',
            textMain: '#0F172A',
            textMuted: '#475569',
            heading: '#1E3A8A',
            border: '#CBD5E1',
            footerBg: '#0B192C',
            footerText: '#FFFFFF',
        }
    },
    {
        id: 'graphite',
        name: 'Graphite',
        subtitle: 'Modern Minimalist',
        description: 'Sleek dark charcoal, cool neutral steel grey, and graphite borders for an understated look.',
        colors: {
            primary: '#334155',
            secondary: '#475569',
            accent: '#0284C7',
            bg: '#F1F5F9',
            bgSecondary: '#FFFFFF',
            textMain: '#1E293B',
            textMuted: '#64748B',
            heading: '#0F172A',
            border: '#E2E8F0',
            footerBg: '#1E293B',
            footerText: '#FFFFFF',
        }
    },
    {
        id: 'fresh-green',
        name: 'Fresh Green',
        subtitle: 'Eco-Friendly & Energy-Saving',
        description: 'Cool emerald green and charcoal reflecting energy efficiency, clean cooling, and sustainability.',
        colors: {
            primary: '#10B981',
            secondary: '#059669',
            accent: '#34D399',
            bg: '#F0FDF4',
            bgSecondary: '#FFFFFF',
            textMain: '#1F2937',
            textMuted: '#4B5563',
            heading: '#111827',
            border: '#A7F3D0',
            footerBg: '#064E3B',
            footerText: '#FFFFFF',
        }
    }
];

export const DEFAULT_THEME_ID = 'davick-blue';

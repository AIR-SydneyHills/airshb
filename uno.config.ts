// uno.config.ts
import { defineConfig, presetAttributify, presetIcons, presetTypography, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
        // ...
      }
    }),
    presetAttributify(), // required when using attributify mode
    presetWind3(), // required
    presetTypography()
  ],
  theme: {
    colors: {
      brand: {
        50: '#fff7ed',
        100: '#ffedd5',
        200: '#fed7aa',
        300: '#fdba74',
        400: '#fb923c',
        500: '#f97316',
        600: '#ea580c',
        700: '#c2410c',
        800: '#9a3412',
        900: '#7c2d12',
        950: '#431407'
      },
      primary: {
        DEFAULT: 'var(--color-primary, #ea580c)',
        hover: 'var(--color-primary-hover, #c2410c)',
        active: 'var(--color-primary-active, #9a3412)',
        muted: 'var(--color-primary-muted, #ffedd5)'
      }
    }
  },
  shortcuts: {
    'focus-ring':
      'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900',
    'nav-link':
      'rounded-md px-2 py-2 text-lg font-medium text-brand-600 transition-colors duration-150 hover:bg-brand-100 hover:text-brand-800 dark:text-brand-500 dark:hover:bg-brand-600 dark:hover:text-gray-200',
    'nav-link-active': 'bg-brand-100 text-gray-800 dark:bg-brand-600 dark:text-gray-200',
    'section-heading': 'text-2xl font-extrabold text-brand-800 md:text-4xl dark:text-brand-200'
  },
  safelist: [
    'i-heroicons-sparkles',
    'i-heroicons-puzzle-piece',
    'i-heroicons-presentation-chart-bar',
    'i-heroicons-clock',
    'i-bi-envelope',
    'i-bi-facebook',
    'i-bi-github',
    'i-bi-instagram',
    'i-bi-linkedin',
    'i-bi-telephone',
    'i-bi-twitter'
  ]
})

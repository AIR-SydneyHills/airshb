// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetAttributify,
  presetTypography,
  presetUno
} from 'unocss'

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
    presetUno(), // required
    presetTypography()
  ],
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

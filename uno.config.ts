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

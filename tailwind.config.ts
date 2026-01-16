import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fomo-pink': '#FF477E', // Soft pink from logo background
        'fomo-red': '#E63946', // Vibrant red from logo text
        'fomo-charcoal': '#0F1115', // Deep charcoal/black background
        'fomo-pink-light': '#FF6B9D', // Lighter pink variant
        'fomo-pink-dark': '#E6395C', // Darker pink variant
        'fomo-red-light': '#FF5A6B', // Lighter red variant
        'fomo-red-dark': '#C92A3A', // Darker red variant
      },
      backgroundImage: {
        'mesh-gradient': 'linear-gradient(135deg, #FF477E 0%, #E63946 25%, #0F1115 50%, #E63946 75%, #FF477E 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config


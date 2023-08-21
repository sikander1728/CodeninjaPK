import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': '𝖭𝖾𝗎𝖾 𝖬𝗈𝗇𝗍𝗋𝖾𝖺𝗅'

      }
    },
    colors: {
      'primary': '#cb2027',
      'stone-light': '#323232',
      'stone-dark': '#1D1D1D',
      'black': '#000000',
      'white': '#FFFFFF',
      'light-gray': '#D9D9D9',
      'grey-light': '#F9F9F9',
      'neutral6': '#BFBFBF'
    },
  },
  plugins: [],
}
export default config

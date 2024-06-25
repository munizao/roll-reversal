import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  if (command === 'serve') {
    return {
      plugins: [svgr(), react()],
      base: '/'
    }
  }
  else {
    return {
      plugins: [svgr(), react()],
      base: 'https://puzzlezapper.com/roll-reversal/'
    }
  }
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlPlugin from 'vite-plugin-html-config';
import openGraphConfig from './openGraphConfig.js';

// https://vitejs.dev/config/

const htmlPluginOpt = {
    metas: Object.keys(openGraphConfig).map((key) => {
        return ({
            name: key,
            content: openGraphConfig[key]
        })
    })
}


export default defineConfig({
  plugins: [
      react(),
      htmlPlugin(htmlPluginOpt)
  ],
})

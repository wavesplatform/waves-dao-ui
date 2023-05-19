import { defineConfig } from 'vite';
import dns from 'dns';
import react from '@vitejs/plugin-react';
import htmlPlugin from 'vite-plugin-html-config';
import openGraphConfig from './openGraphConfig.js';


dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/

const htmlPluginOpt = {
    metas: Object.keys(openGraphConfig).map((key) => {
        return ({
            name: key,
            content: openGraphConfig[key]
        });
    })
};


export default defineConfig({
    plugins: [
        react(),
        htmlPlugin(htmlPluginOpt)
    ],
    server: {
        port: 3002,
    },
});

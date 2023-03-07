import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import stylelintPlugin from 'vite-plugin-stylelint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@images': path.resolve(__dirname, './public/images'),
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        vue(),
        eslintPlugin({
            fix: true,
            cache: false,
            failOnError: false,
        }),
        stylelintPlugin({
            fix: true,
            cache: false,
        }),
    ],
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                additionalData: `
                @import '@/styles/scss/mixins/mixins.scss';
              `,
            },
        },
    },
})

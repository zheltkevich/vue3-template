import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import stylelintPlugin from 'vite-plugin-stylelint'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@css': path.resolve(__dirname, './src/styles/css'),
            '@scss': path.resolve(__dirname, './src/styles/scss'),
            '@assets': path.resolve(__dirname, './public/assets'),
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
                @import '@scss/mixins/mixins.scss';
              `,
            },
        },
    },
})

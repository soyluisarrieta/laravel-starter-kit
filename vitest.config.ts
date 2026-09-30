import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [
        react(),
    ],
    test: {
        environment: 'happy-dom',
        globals: true,
        setupFiles: ['./tests/js/setup.ts'],
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
        },
    },
});

import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig, loadEnv } from 'vite';

const env = loadEnv('', process.cwd());
const appDomain = env.VITE_APP_DOMAIN || 'localhost';
const LAN_CONFIG = appDomain === 'localhost' ? undefined : {
    server: {
        host: '0.0.0.0',
        hmr: { host: appDomain },
    },
}

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            refresh: true,
        }),
        inertia(),
        react(),
        babel({
            presets: [reactCompilerPreset()],
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    ...LAN_CONFIG,
});

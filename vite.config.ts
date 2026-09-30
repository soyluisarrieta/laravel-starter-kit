import inertia from '@inertiajs/vite';
import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import babel from '@rolldown/plugin-babel';
import tailwindcss from '@tailwindcss/vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig, loadEnv } from 'vite-plus';

const env = loadEnv('', process.cwd());
const appDomain = env.VITE_APP_DOMAIN || 'localhost';
const LAN_CONFIG =
    appDomain === 'localhost'
        ? undefined
        : {
              server: {
                  host: '0.0.0.0',
                  hmr: { host: appDomain },
              },
          };

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
    test: {
        environment: 'happy-dom',
        globals: true,
        setupFiles: ['./tests/js/setup.ts'],
    },
    lint: {
        plugins: ['oxc', 'typescript', 'unicorn', 'react', 'import'],
        categories: {
            correctness: 'warn',
        },
        env: {
            builtin: true,
            browser: true,
        },
        ignorePatterns: [
            'vendor/**',
            'node_modules/**',
            'public/**',
            'bootstrap/ssr/**',
            'resources/js/actions/**',
            'resources/js/components/ui/*',
            'resources/js/routes/**',
            'resources/js/wayfinder/**',
        ],
        rules: {
            'no-array-constructor': 'error',
            'no-case-declarations': 'error',
            'no-empty': 'error',
            'no-fallthrough': 'error',
            'no-prototype-builtins': 'error',
            'no-unused-expressions': 'error',
            'no-unused-vars': 'error',
            'no-useless-escape': 'error',
            'import/consistent-type-specifier-style': [
                'error',
                'prefer-top-level',
            ],
            'react/rules-of-hooks': 'error',
            'react/static-components': 'error',
            'react/use-memo': 'error',
            'react/void-use-memo': 'error',
            'react/preserve-manual-memoization': 'error',
            'react/immutability': 'error',
            'react/globals': 'error',
            'react/refs': 'error',
            'react/set-state-in-effect': 'error',
            'react/error-boundaries': 'error',
            'react/purity': 'error',
            'react/set-state-in-render': 'error',
            'react/unsupported-syntax': 'warn',
            'typescript/ban-ts-comment': 'error',
            'typescript/no-empty-object-type': 'error',
            'typescript/no-explicit-any': 'error',
            'typescript/no-namespace': 'error',
            'typescript/no-require-imports': 'error',
            'typescript/no-unsafe-function-type': 'error',
            'typescript/no-wrapper-object-types': 'error',
            'typescript/prefer-as-const': 'error',
            'typescript/consistent-type-imports': [
                'error',
                {
                    prefer: 'type-imports',
                    fixStyle: 'separate-type-imports',
                },
            ],
            'vite-plus/prefer-vite-plus-imports': 'error',
            'no-var': 'error',
            'prefer-const': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
        },
        jsPlugins: [
            {
                name: 'vite-plus',
                specifier: 'vite-plus/oxlint-plugin',
            },
        ],
    },
    fmt: {
        semi: true,
        singleQuote: true,
        singleAttributePerLine: false,
        htmlWhitespaceSensitivity: 'css',
        printWidth: 80,
        tabWidth: 4,
        sortPackageJson: false,
        sortImports: {
            groups: [
                'builtin',
                'external',
                ['internal', 'subpath'],
                ['parent', 'sibling', 'index'],
                'unknown',
            ],
            newlinesBetween: false,
            ignoreCase: true,
        },
        sortTailwindcss: {
            stylesheet: 'resources/css/app.css',
            functions: ['clsx', 'cn', 'cva'],
        },
        ignorePatterns: [
            'resources/js/components/ui/*',
            'resources/views/mail/*',
        ],
        overrides: [
            {
                files: ['**/*.yml'],
                options: { tabWidth: 2 },
            },
        ],
    },
});

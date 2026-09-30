import { createInertiaApp, router } from '@inertiajs/react';
import type { ResolvedComponent } from '@inertiajs/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import { ErrorBoundary } from '@/components/error-boundary';
import { initializeTheme } from '@/hooks/use-appearance';
import { queryClient } from '@/lib/query-client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: async (name) => {
        const mod = await resolvePageComponent<{ default: ResolvedComponent }>(
            `./pages/${name}.tsx`,
            import.meta.glob<{ default: ResolvedComponent }>(
                './pages/**/*.tsx',
            ),
        );
        return mod.default;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        // Clear data-table cache after mutations so stale pages don't flash old data
        router.on('finish', (event) => {
            if (event.detail.visit.method !== 'get') {
                queryClient.removeQueries({
                    queryKey: ['data-table'],
                });
            }
        });

        root.render(
            <StrictMode>
                <QueryClientProvider client={queryClient}>
                    <ErrorBoundary>
                        <App {...props} />
                    </ErrorBoundary>
                </QueryClientProvider>
            </StrictMode>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();

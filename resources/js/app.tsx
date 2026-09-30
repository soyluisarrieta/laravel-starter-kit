import { createInertiaApp, router } from '@inertiajs/react';
import { QueryClientProvider } from '@tanstack/react-query';
import '../css/app.css';
import { ErrorBoundary } from '@/components/error-boundary';
import { initializeTheme } from '@/hooks/use-appearance';
import { queryClient } from '@/lib/query-client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Clear data-table cache after mutations so stale pages don't flash old data
router.on('finish', (event) => {
    if (event.detail.visit.method !== 'get') {
        queryClient.removeQueries({
            queryKey: ['data-table'],
        });
    }
});

void createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    strictMode: true,
    withApp(app) {
        return (
            <QueryClientProvider client={queryClient}>
                <ErrorBoundary>{app}</ErrorBoundary>
            </QueryClientProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();

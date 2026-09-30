import type { Auth } from '@/types/auth';
import type { BreadcrumbItem } from '@/types/navigation';

declare module '@inertiajs/core' {
    export interface InertiaConfig {
        // What each page hands to its persistent layout through setLayoutProps.
        // Plain values only: live JSX here would be rebuilt on every render
        // and re-render the layout without end.
        layoutProps: {
            breadcrumbs?: BreadcrumbItem[];
            title?: string;
            description?: string;
        };
        sharedPageProps: {
            name: string;
            auth: Auth;
            sidebarOpen: boolean;
            [key: string]: unknown;
        };
    }
}

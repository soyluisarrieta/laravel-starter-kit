import AppLayoutTemplate from '@/layouts/app/app-sidebar-layout';
import type { AppLayoutProps } from '@/types';

// A function declaration, not an arrow: Inertia reads a one-argument arrow
// as a layout resolver instead of a component.
export default function AppLayout({
    children,
    breadcrumbs,
    ...props
}: AppLayoutProps) {
    return (
        <AppLayoutTemplate breadcrumbs={breadcrumbs} {...props}>
            {children}
        </AppLayoutTemplate>
    );
}

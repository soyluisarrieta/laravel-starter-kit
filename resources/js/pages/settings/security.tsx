import { Head, setLayoutProps } from '@inertiajs/react';
import ManagePasskeys from '@/components/features/security/manage-passkeys';
import SettingsLayout from '@/layouts/settings/layout';
import type { BreadcrumbItem, Passkey } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Seguridad',
        href: '/ajustes/seguridad',
    },
];

export default function Security({
    canManagePasskeys,
    passkeys,
}: {
    canManagePasskeys: boolean;
    passkeys: Passkey[];
}) {
    setLayoutProps({ breadcrumbs });

    return (
        <>
            <Head title="Seguridad" />

            <SettingsLayout>
                {canManagePasskeys && <ManagePasskeys passkeys={passkeys} />}
            </SettingsLayout>
        </>
    );
}

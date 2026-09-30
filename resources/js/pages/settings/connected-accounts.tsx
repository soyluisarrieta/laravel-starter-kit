import { Head, Link, router, setLayoutProps } from '@inertiajs/react';
import Heading from '@/components/layout/heading';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import SettingsLayout from '@/layouts/settings/layout';
import {
    destroy as destroyConnection,
    edit as editConnectedAccounts,
    link as linkConnection,
} from '@/routes/connected-accounts';
import type { BreadcrumbItem } from '@/types';

interface ConnectedAccountsProps {
    connectedProvider: string | null;
    canDisconnect: boolean;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Cuentas vinculadas',
        href: editConnectedAccounts().url,
    },
];

export default function ConnectedAccounts({
    connectedProvider,
    canDisconnect,
}: ConnectedAccountsProps) {
    const isLinked = connectedProvider !== null;

    const handleUnlink = () => {
        if (!confirm('¿Seguro que quieres desvincular tu cuenta de Google?')) {
            return;
        }
        router.delete(destroyConnection().url, { preserveScroll: true });
    };

    setLayoutProps({
        breadcrumbs: breadcrumbs,
    });

    return (
        <>
            <Head title="Cuentas vinculadas" />

            <h1 className="sr-only">Cuentas vinculadas</h1>

            <SettingsLayout>
                <div className="space-y-6">
                    <Heading
                        variant="small"
                        title="Cuentas vinculadas"
                        description="Vincula tus cuentas de inicio de sesión externas para acceder más rápido."
                    />

                    <div className="rounded-lg border p-4">
                        <div className="flex items-center justify-between gap-4">
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <p className="font-medium">Google</p>
                                    {isLinked && (
                                        <Badge variant="secondary">
                                            Vinculado
                                        </Badge>
                                    )}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    {isLinked
                                        ? 'Puedes iniciar sesión con tu cuenta de Google.'
                                        : 'Vincula tu cuenta de Google para iniciar sesión sin contraseña.'}
                                </p>
                            </div>

                            {isLinked ? (
                                <Button
                                    variant="outline"
                                    onClick={handleUnlink}
                                    disabled={!canDisconnect}
                                    title={
                                        !canDisconnect
                                            ? 'Configura una contraseña antes de desvincular.'
                                            : undefined
                                    }
                                    data-test="unlink-google-button"
                                >
                                    Desvincular
                                </Button>
                            ) : (
                                <Button asChild>
                                    <Link
                                        href={
                                            linkConnection({
                                                provider: 'google',
                                            }).url
                                        }
                                        data-test="link-google-button"
                                    >
                                        Vincular Google
                                    </Link>
                                </Button>
                            )}
                        </div>
                    </div>
                </div>
            </SettingsLayout>
        </>
    );
}

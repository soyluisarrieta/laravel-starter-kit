import { Link } from '@inertiajs/react';
import type { PropsWithChildren } from 'react';
import Heading from '@/components/layout/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { OTHERS_PERMISSIONS } from '@/constants/permissions';
import { useCan } from '@/hooks/use-can';
import { useCurrentUrl } from '@/hooks/use-current-url';
import { cn, toUrl } from '@/lib/utils';
import { edit as editAppearance } from '@/routes/appearance';
import { edit as editConnectedAccounts } from '@/routes/connected-accounts';
import { index as errorsIndex } from '@/routes/errors';
import { edit as editProfile } from '@/routes/profile';
import { edit as editRoles } from '@/routes/roles';
import { edit as editPassword } from '@/routes/user-password';
import type { NavItem } from '@/types';

const baseNavItems: NavItem[] = [
    {
        title: 'Perfil',
        href: editProfile(),
        icon: null,
    },
    {
        title: 'Contraseña',
        href: editPassword(),
        icon: null,
    },
    {
        title: 'Seguridad',
        href: '/ajustes/seguridad',
        icon: null,
    },
    {
        title: 'Cuentas vinculadas',
        href: editConnectedAccounts(),
        icon: null,
    },
    {
        title: 'Apariencia',
        href: editAppearance(),
        icon: null,
    },
];

export default function SettingsLayout({
    className,
    children,
}: PropsWithChildren & { className?: string }) {
    const { isCurrentOrParentUrl } = useCurrentUrl();
    const { canManage: canReadRoles } = useCan([
        OTHERS_PERMISSIONS.MANAGE_ROLES,
    ]);
    const { canManage: canManageErrors } = useCan([
        OTHERS_PERMISSIONS.MANAGE_ERRORS,
    ]);

    const sidebarNavItems: NavItem[] = [
        ...baseNavItems,
        ...(canReadRoles
            ? [
                  {
                      title: 'Roles',
                      href: editRoles(),
                      icon: null,
                  } satisfies NavItem,
              ]
            : []),
        ...(canManageErrors
            ? [
                  {
                      title: 'Errores',
                      href: errorsIndex(),
                      icon: null,
                  } satisfies NavItem,
              ]
            : []),
    ];

    // When server-side rendering, we only render the layout on the client...
    if (typeof window === 'undefined') {
        return null;
    }

    return (
        <div className="px-4 py-6">
            <Heading
                title="Configuración"
                description="Administra tu perfil y configuración de cuenta"
            />

            <div className="flex flex-col lg:flex-row lg:space-x-12">
                <aside className="w-full max-w-xl lg:w-48">
                    <nav
                        className="flex flex-col space-y-1 space-x-0"
                        aria-label="Configuración"
                    >
                        {sidebarNavItems.map((item, index) => (
                            <Button
                                key={`${toUrl(item.href)}-${index}`}
                                size="sm"
                                variant="ghost"
                                asChild
                                className={cn('w-full justify-start', {
                                    'bg-muted': isCurrentOrParentUrl(item.href),
                                })}
                            >
                                <Link href={item.href}>
                                    {item.icon && (
                                        <item.icon className="h-4 w-4" />
                                    )}
                                    {item.title}
                                </Link>
                            </Button>
                        ))}
                    </nav>
                </aside>

                <Separator className="my-6 lg:hidden" />

                <section
                    className={cn('max-w-md flex-1 space-y-12', className)}
                >
                    {children}
                </section>
            </div>
        </div>
    );
}

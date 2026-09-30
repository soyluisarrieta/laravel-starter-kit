import type { PageProps } from '@inertiajs/core';
import { Head, setLayoutProps } from '@inertiajs/react';
import { ConfirmDialog } from '@/components/commons/confirm-dialog';
import { useDataTable } from '@/components/commons/data-table';
import type {
    Paginated,
    DataTableQuery,
} from '@/components/commons/data-table';
import UserTable from '@/components/features/user/user-data-table';
import UserForm from '@/components/features/user/user-form';
import UserViewSheet from '@/components/features/user/user-view-sheet';
import { PlusIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { USER_PERMISSIONS } from '@/constants/permissions';
import { useCan } from '@/hooks/use-can';
import { useDialog } from '@/hooks/use-dialog';
import { users as usersRoute } from '@/routes';
import { destroy, destroyMultiple } from '@/routes/users';
import type { BreadcrumbItem, Role, UserWithRoles } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Usuarios',
        href: usersRoute().url,
    },
];

interface UsersProps extends PageProps {
    users: Paginated<UserWithRoles>;
    readonly roles: Role[];
    queryParams: DataTableQuery;
}

export default function Users({ users, roles, queryParams }: UsersProps) {
    const { canCreate, canDelete } = useCan([
        USER_PERMISSIONS.CREATE,
        USER_PERMISSIONS.DELETE,
    ]);

    const table = useDataTable<UserWithRoles>({
        route: usersRoute(),
        queryParams,
        initialData: users,
    });

    const { target: targetUser } = table;

    const userDialogForm = useDialog('user-dialog-form');
    const deleteDialog = useDialog('delete-dialog');
    const deleteMultipleDialog = useDialog('delete-multiple-dialog');

    setLayoutProps({
        breadcrumbs: breadcrumbs,
    });

    return (
        <>
            <Head title="Usuarios" />

            <main className="main-container px-4 py-10">
                <div className="mb-8 flex items-center justify-between">
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Gestión de Usuarios
                        </h1>
                        <p className="mt-2 text-muted-foreground">
                            Administra los usuarios del sistema con búsqueda,
                            filtros y exportación.
                        </p>
                    </div>

                    {canCreate && (
                        <Button
                            className="fixed right-4 bottom-4 z-10 size-12 rounded-full p-4 lg:static lg:h-9 lg:w-auto lg:rounded-md"
                            onClick={() => {
                                table.setTarget(null);
                                userDialogForm.onOpenChange(true);
                            }}
                        >
                            <PlusIcon className="size-5 lg:size-4" />
                            <span className="hidden lg:inline">
                                Crear usuario
                            </span>
                        </Button>
                    )}
                </div>

                <UserTable roles={roles} table={table} />
            </main>

            {/* View user */}
            <UserViewSheet roles={roles} user={targetUser} />

            {/* Create or edit user */}
            <Dialog {...userDialogForm}>
                <DialogContent>
                    <DialogHeader className="mb-2">
                        <DialogTitle>
                            {targetUser ? 'Editar' : 'Crear'} usuario
                        </DialogTitle>
                        <DialogDescription>
                            {targetUser
                                ? 'Actualiza la información del usuario.'
                                : 'Completa la información para crear el usuario.'}
                        </DialogDescription>
                    </DialogHeader>
                    <UserForm user={targetUser} />
                </DialogContent>
            </Dialog>

            {/* Delete an user */}
            {canDelete && (
                <ConfirmDialog
                    title={`¿Eliminar usuario "${targetUser?.name}"?`}
                    description="Una vez eliminado el usuario, todos sus datos serán eliminados permanentemente."
                    passwordRequired
                    method="delete"
                    url={targetUser ? destroy(targetUser.id).url : null}
                    {...deleteDialog}
                />
            )}

            {/* Delete multiple users */}
            {canDelete && (
                <ConfirmDialog
                    title="¿Eliminar usuarios seleccionados?"
                    description="Una vez eliminados los usuarios, todos sus datos serán eliminados permanentemente."
                    passwordRequired
                    method="post"
                    url={destroyMultiple().url}
                    data={{ ids: Array.from(table.selected.keys()) }}
                    onSuccess={() => table.clearSelected()}
                    {...deleteMultipleDialog}
                />
            )}
        </>
    );
}

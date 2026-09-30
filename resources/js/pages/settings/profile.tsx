import { Transition } from '@headlessui/react';
import {
    Form,
    Head,
    Link,
    router,
    usePage,
    setLayoutProps,
} from '@inertiajs/react';
import { useRef } from 'react';
import ProfileController from '@/actions/App/Http/Controllers/Settings/ProfileController';
import DeleteUser from '@/components/features/settings/delete-user';
import { UploadIcon } from '@/components/icons';
import Heading from '@/components/layout/heading';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import InputError from '@/components/ui/input-error';
import { Label } from '@/components/ui/label';
import { useInitials } from '@/hooks/use-initials';
import SettingsLayout from '@/layouts/settings/layout';
import { edit, update } from '@/routes/profile';
import { send } from '@/routes/verification';
import type { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Configuración de perfil',
        href: edit().url,
    },
];

export default function Profile({
    mustVerifyEmail,
    status,
}: {
    mustVerifyEmail: boolean;
    status?: string;
}) {
    const { auth } = usePage().props;
    const getInitials = useInitials();

    const inputRef = useRef<HTMLInputElement | null>(null);
    const uploadAvatar = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    // Update and preview avatar
    const updateAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        router.post(
            update().url,
            {
                _method: 'patch',
                ...auth.user,
                avatar: file,
            },
            {
                preserveScroll: true,
                forceFormData: true,
            },
        );
    };

    // Remove avatar
    const removeAvatar = () => {
        router.patch(
            update().url,
            {
                _method: 'patch',
                ...auth.user,
                avatar: null,
            },
            {
                preserveScroll: true,
            },
        );
    };

    setLayoutProps({
        breadcrumbs: breadcrumbs,
    });

    return (
        <>
            <Head title="Configuración de perfil" />

            <h1 className="sr-only">Configuración de perfil</h1>

            <SettingsLayout>
                <div className="space-y-6">
                    <Heading
                        variant="small"
                        title="Información de perfil"
                        description="Actualiza tu nombre y correo electrónico"
                    />

                    <div className="relative flex items-center gap-3">
                        <Avatar
                            className="size-20 cursor-crosshair overflow-hidden rounded-full"
                            onClick={uploadAvatar}
                        >
                            <AvatarImage
                                className="object-cover"
                                src={
                                    auth.user.avatar
                                        ? `/storage/avatars/${auth.user.avatar}`
                                        : undefined
                                }
                                alt={auth.user.name}
                            />
                            <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                                {getInitials(auth.user.name)}
                            </AvatarFallback>
                        </Avatar>

                        <input
                            className="hidden"
                            type="file"
                            accept="image/png, image/jpeg, image/webp"
                            ref={inputRef}
                            onChange={updateAvatar}
                        />

                        <div className="flex flex-col gap-1 pt-2 [&>button]:self-start">
                            <Button variant="outline" onClick={uploadAvatar}>
                                <UploadIcon />
                                Actualizar foto
                            </Button>

                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        className="hover:bg-destructive!"
                                        variant="ghost"
                                        size="sm"
                                        disabled={!auth.user.avatar}
                                    >
                                        Eliminar
                                    </Button>
                                </DialogTrigger>
                                <DialogContent>
                                    <DialogTitle>
                                        ¿Estás seguro de que deseas eliminar tu
                                        foto?
                                    </DialogTitle>
                                    <DialogDescription>
                                        Una vez que se elimine su foto no podrá
                                        ser recuperada, y se eliminarán de forma
                                        permanente.
                                    </DialogDescription>

                                    <DialogFooter className="gap-2">
                                        <DialogClose asChild>
                                            <Button variant="secondary">
                                                Cancelar
                                            </Button>
                                        </DialogClose>
                                        <DialogClose asChild>
                                            <Button
                                                variant="destructive"
                                                onClick={removeAvatar}
                                            >
                                                Eliminar foto
                                            </Button>
                                        </DialogClose>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>

                    <Form
                        {...ProfileController.update.form()}
                        options={{
                            preserveScroll: true,
                        }}
                        className="space-y-6"
                    >
                        {({ processing, recentlySuccessful, errors }) => (
                            <>
                                <div className="grid grid-cols-2 items-start gap-2">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Nombre</Label>

                                        <Input
                                            id="name"
                                            className="mt-1 block w-full"
                                            defaultValue={auth.user.name}
                                            name="name"
                                            required
                                            autoComplete="name"
                                            placeholder="Nombre"
                                        />

                                        <InputError message={errors.name} />
                                    </div>

                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Apellido</Label>

                                        <Input
                                            id="last_name"
                                            className="mt-1 block w-full"
                                            defaultValue={auth.user.last_name}
                                            name="last_name"
                                            required
                                            autoComplete="last_name"
                                            placeholder="Apellido"
                                        />

                                        <InputError
                                            message={errors.last_name}
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="email">
                                        Correo electrónico
                                    </Label>

                                    <Input
                                        id="email"
                                        type="email"
                                        className="mt-1 block w-full"
                                        defaultValue={auth.user.email}
                                        name="email"
                                        required
                                        autoComplete="username"
                                        placeholder="Correo electrónico"
                                    />

                                    <InputError message={errors.email} />
                                </div>

                                {mustVerifyEmail &&
                                    auth.user.email_verified_at === null && (
                                        <div>
                                            <p className="-mt-4 text-sm text-muted-foreground">
                                                Tu correo no está verificado.{' '}
                                                <Link
                                                    href={send()}
                                                    as="button"
                                                    className="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
                                                >
                                                    Haz clic aquí para reenviar
                                                    el correo de verificación.
                                                </Link>
                                            </p>

                                            {status ===
                                                'verification-link-sent' && (
                                                <div className="mt-2 text-sm font-medium text-green-600">
                                                    Se ha enviado un nuevo
                                                    enlace de verificación a tu
                                                    correo.
                                                </div>
                                            )}
                                        </div>
                                    )}

                                <div className="flex items-center gap-4">
                                    <Button
                                        disabled={processing}
                                        data-test="update-profile-button"
                                    >
                                        Guardar
                                    </Button>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-neutral-600">
                                            Guardado
                                        </p>
                                    </Transition>
                                </div>
                            </>
                        )}
                    </Form>
                </div>

                <DeleteUser />
            </SettingsLayout>
        </>
    );
}

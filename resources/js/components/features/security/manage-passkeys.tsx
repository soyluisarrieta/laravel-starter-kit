import { router } from '@inertiajs/react';
import { useState } from 'react';
import PasskeyRegister from '@/components/features/security/passkey-register';
import { KeyIcon, TrashIcon } from '@/components/icons';
import Heading from '@/components/layout/heading';
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
import type { Passkey } from '@/types';

function PasskeyItem({ passkey }: { passkey: Passkey }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const remove = () => {
        setIsDeleting(true);
        router.delete(`/user/passkeys/${passkey.id}`, {
            preserveScroll: true,
            onError: () => setIsDeleting(false),
        });
    };

    return (
        <div className="flex items-center justify-between border-b p-4 last:border-b-0">
            <div className="flex items-center gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-muted">
                    <KeyIcon className="size-5 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                        <p className="font-medium tracking-tight">
                            {passkey.name}
                        </p>
                        {passkey.authenticator && (
                            <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground uppercase ring-1 ring-border ring-inset">
                                {passkey.authenticator}
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Agregada {passkey.created_at_diff}
                        {passkey.last_used_at_diff &&
                            ` · Último uso ${passkey.last_used_at_diff}`}
                    </p>
                </div>
            </div>

            <Dialog>
                <DialogTrigger asChild>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                    >
                        <TrashIcon className="size-4" />
                        <span className="sr-only">Eliminar</span>
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogTitle>Eliminar llave de acceso</DialogTitle>
                    <DialogDescription>
                        Ya no podrás entrar con «{passkey.name}». Tu contraseña
                        sigue funcionando.
                    </DialogDescription>
                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button variant="secondary">Cancelar</Button>
                        </DialogClose>
                        <Button
                            variant="destructive"
                            onClick={remove}
                            disabled={isDeleting}
                        >
                            {isDeleting ? 'Eliminando…' : 'Eliminar'}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default function ManagePasskeys({ passkeys }: { passkeys: Passkey[] }) {
    return (
        <div className="space-y-6">
            <Heading
                variant="small"
                title="Llaves de acceso"
                description="Entra con la huella, el rostro o el PIN de tu dispositivo, sin escribir la contraseña."
            />

            <div className="overflow-hidden rounded-lg border border-border">
                {passkeys.length > 0 ? (
                    passkeys.map((passkey) => (
                        <PasskeyItem key={passkey.id} passkey={passkey} />
                    ))
                ) : (
                    <div className="p-8 text-center">
                        <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-muted">
                            <KeyIcon className="size-7 text-muted-foreground" />
                        </div>
                        <p className="font-medium">Aún no tienes llaves</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Agrega una para entrar sin contraseña.
                        </p>
                    </div>
                )}
            </div>

            <PasskeyRegister onSuccess={() => router.reload()} />
        </div>
    );
}

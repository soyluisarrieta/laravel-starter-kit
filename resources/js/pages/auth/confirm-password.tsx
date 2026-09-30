import { Form, Head, setLayoutProps } from '@inertiajs/react';
import PasskeyVerify from '@/components/features/security/passkey-verify';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import InputError from '@/components/ui/input-error';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { store } from '@/routes/password/confirm';

export default function ConfirmPassword() {
    setLayoutProps({
        title: 'Confirma tu contraseña',
        description:
            'Esta es un área segura. Por favor confirma tu contraseña para continuar.',
    });

    return (
        <>
            <Head title="Confirmar contraseña" />

            <PasskeyVerify
                routes={{
                    options: '/passkeys/confirm/options',
                    submit: '/passkeys/confirm',
                }}
                label="Confirmar con llave de acceso"
                loadingLabel="Confirmando…"
            />

            <div className="flex w-full items-center gap-2">
                <div className="h-px w-full bg-muted" />
                <span className="text-xs text-muted-foreground">O</span>
                <div className="h-px w-full bg-muted" />
            </div>

            <Form {...store.form()} resetOnSuccess={['password']}>
                {({ processing, errors }) => (
                    <div className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="password">Contraseña</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="••••••••••"
                                autoComplete="current-password"
                                autoFocus
                            />

                            <InputError message={errors.password} />
                        </div>

                        <div className="flex items-center">
                            <Button
                                className="w-full"
                                disabled={processing}
                                data-test="confirm-password-button"
                            >
                                {processing && <Spinner />}
                                Confirmar contraseña
                            </Button>
                        </div>
                    </div>
                )}
            </Form>
        </>
    );
}

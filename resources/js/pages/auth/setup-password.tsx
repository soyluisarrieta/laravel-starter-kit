import { Form, Head, setLayoutProps } from '@inertiajs/react';
import SetupPasswordController from '@/actions/App/Http/Controllers/Auth/SetupPasswordController';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import InputError from '@/components/ui/input-error';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';

export default function SetupPassword() {
    setLayoutProps({
        title: 'Configura tu contraseña',
        description:
            'Completa tu cuenta creando una contraseña. La necesitarás si quieres iniciar sesión sin Google.',
    });

    return (
        <>
            <Head title="Configurar contraseña" />

            <Form
                {...SetupPasswordController.store.form()}
                resetOnError={['password', 'password_confirmation']}
            >
                {({ processing, errors }) => (
                    <div className="space-y-6">
                        <div className="grid gap-2">
                            <Label htmlFor="password">Nueva contraseña</Label>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="••••••••••"
                                autoComplete="new-password"
                                autoFocus
                            />

                            <InputError message={errors.password} />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password_confirmation">
                                Confirmar contraseña
                            </Label>
                            <Input
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                placeholder="••••••••••"
                                autoComplete="new-password"
                            />

                            <InputError
                                message={errors.password_confirmation}
                            />
                        </div>

                        <Button
                            className="w-full"
                            disabled={processing}
                            data-test="setup-password-button"
                        >
                            {processing && <Spinner />}
                            Guardar contraseña
                        </Button>
                    </div>
                )}
            </Form>
        </>
    );
}

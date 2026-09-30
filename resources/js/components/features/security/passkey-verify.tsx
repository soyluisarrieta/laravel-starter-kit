import { router } from '@inertiajs/react';
import { usePasskeyVerify } from '@laravel/passkeys/react';
import { KeyIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import InputError from '@/components/ui/input-error';
import { Spinner } from '@/components/ui/spinner';

export default function PasskeyVerify({
    routes,
    label = 'Entrar con llave de acceso',
    loadingLabel = 'Esperando al dispositivo…',
}: {
    routes?: { options: string; submit: string };
    label?: string;
    loadingLabel?: string;
}) {
    const { verify, isLoading, error, isSupported } = usePasskeyVerify({
        ...(routes && { routes }),
        onSuccess: (response) => {
            router.visit(response.redirect ?? '/');
        },
    });

    if (!isSupported) {
        return null;
    }

    return (
        <div className="grid gap-2">
            <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={() => void verify()}
                disabled={isLoading}
            >
                {isLoading ? <Spinner /> : <KeyIcon className="size-4" />}
                {isLoading ? loadingLabel : label}
            </Button>
            {error && <InputError message={error} className="text-center" />}
        </div>
    );
}

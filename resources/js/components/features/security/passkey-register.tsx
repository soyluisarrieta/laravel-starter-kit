import { usePasskeyRegister } from '@laravel/passkeys/react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import InputError from '@/components/ui/input-error';
import { Label } from '@/components/ui/label';

function deviceName(): string {
    const ua = navigator.userAgent;

    const browser = [
        { pattern: /Edg|Edge/, name: 'Edge' },
        { pattern: /OPR|Opera|OPiOS/, name: 'Opera' },
        { pattern: /Firefox|FxiOS/, name: 'Firefox' },
        { pattern: /Chrome|CriOS/, name: 'Chrome' },
        { pattern: /Safari/, name: 'Safari' },
    ].find(({ pattern }) => pattern.test(ua))?.name;

    const os = [
        { pattern: /iPhone/, name: 'iPhone' },
        { pattern: /iPad|Macintosh(?=.*Mobile)/, name: 'iPad' },
        { pattern: /Android/, name: 'Android' },
        { pattern: /Mac/, name: 'Mac' },
        { pattern: /Windows/, name: 'Windows' },
    ].find(({ pattern }) => pattern.test(ua))?.name;

    return [browser, os].filter(Boolean).join(' en ');
}

export default function PasskeyRegister({
    onSuccess,
}: {
    onSuccess: () => void;
}) {
    const [name, setName] = useState(deviceName);
    const [showForm, setShowForm] = useState(false);
    const { register, isLoading, error, isSupported } = usePasskeyRegister({
        onSuccess: () => {
            setShowForm(false);
            onSuccess();
        },
    });

    if (!isSupported) {
        return (
            <p className="text-sm text-muted-foreground">
                Este navegador no admite llaves de acceso.
            </p>
        );
    }

    if (!showForm) {
        return (
            <Button variant="outline" onClick={() => setShowForm(true)}>
                Agregar llave de acceso
            </Button>
        );
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (name.trim()) void register(name.trim());
            }}
            className="space-y-4 rounded-lg border border-border bg-muted/50 p-4"
        >
            <div className="grid gap-2">
                <Label htmlFor="passkey-name">Nombre de la llave</Label>
                <Input
                    id="passkey-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. Celular de la tienda"
                    autoFocus
                    required
                />
                <p className="text-xs text-muted-foreground">
                    Te ayuda a reconocer en qué dispositivo la guardaste.
                </p>
                <InputError message={error ?? undefined} />
            </div>
            <div className="flex gap-2">
                <Button type="submit" disabled={isLoading || !name.trim()}>
                    {isLoading ? 'Esperando al dispositivo…' : 'Continuar'}
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setShowForm(false)}
                    disabled={isLoading}
                >
                    Cancelar
                </Button>
            </div>
        </form>
    );
}

<?php

namespace Database\Seeders;

use App\Enums\Roles;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

/**
 * The super admin's account, with a password nobody knows: the first way in is
 * Google, or asking for a new password by email.
 */
class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        $email = config('auth.super_admin_email');

        if (! $email) {
            $this->command?->warn('AUTH_SUPER_ADMIN_EMAIL está vacío: no se creó el super admin.');

            return;
        }

        $user = User::firstOrCreate(
            ['email' => $email],
            [
                'name' => 'Luis',
                'last_name' => 'Arrieta',
                'password' => bcrypt(Str::random(40)),
                'email_verified_at' => now(),
            ],
        );

        $user->assignRole(Roles::SUPER_ADMIN->value);

        if ($user->wasRecentlyCreated) {
            $this->command?->info("Super admin creado: {$user->email}");
            $this->command?->warn('Contraseña aleatoria asignada. Entra con Google o pide una nueva por correo.');
        }
    }
}

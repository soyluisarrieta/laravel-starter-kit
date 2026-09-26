<?php

namespace Database\Seeders;

use App\Enums\Roles;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds. Safe to run again: each deploy does.
     */
    public function run(): void
    {
        foreach (Roles::cases() as $roleEnum) {
            $role = Role::updateOrCreate(
                ['name' => $roleEnum->value, 'guard_name' => 'web'],
                ['label' => $roleEnum->label(), 'hex_color' => $roleEnum->hexColor()],
            );

            $role->syncPermissions($roleEnum->permissions());
        }
    }
}

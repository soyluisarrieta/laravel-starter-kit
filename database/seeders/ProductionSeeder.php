<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

/**
 * What production needs to run, and no demo data: it runs on
 * every deploy, so each seeder in it must be safe to run again.
 */
class ProductionSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([
            PermissionSeeder::class,
            RoleSeeder::class,
            AdminUserSeeder::class,
        ]);
    }
}

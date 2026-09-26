<?php

use App\Enums\Roles;
use App\Models\User;
use App\Support\DeployRunner;
use Database\Seeders\ProductionSeeder;
use Spatie\Permission\Models\Role;

test('the scheduler command starts the deploy', function () {
    $this->mock(DeployRunner::class)
        ->shouldReceive('run')
        ->once();

    $this->artisan('deploy:pull')->assertExitCode(0);
});

describe('the production seeder', function () {
    beforeEach(fn () => config(['auth.super_admin_email' => 'admin@example.com']));

    it('can run on every deploy', function () {
        $this->seed(ProductionSeeder::class);
        $this->seed(ProductionSeeder::class);

        expect(Role::count())->toBe(count(Roles::cases()))
            ->and(User::count())->toBe(1);
    });

    it('creates the super admin with no password of their own yet', function () {
        $this->seed(ProductionSeeder::class);

        $admin = User::firstWhere('email', 'admin@example.com');

        expect($admin->hasRole(Roles::SUPER_ADMIN->value))->toBeTrue()
            ->and($admin->password_set_at)->toBeNull()
            ->and($admin->email_verified_at)->not->toBeNull();
    });

    it('creates no account without a super admin email', function () {
        config(['auth.super_admin_email' => null]);

        $this->seed(ProductionSeeder::class);

        expect(User::count())->toBe(0);
    });
});

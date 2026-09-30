<?php

use App\Enums\Permissions;
use App\Http\Controllers\Settings\ClientErrorController;
use App\Http\Controllers\Settings\ConnectedAccountController;
use App\Http\Controllers\Settings\PasswordController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\Settings\RoleController;
use App\Http\Controllers\Settings\SecurityController;
use Illuminate\Auth\Middleware\RequirePassword;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth'])->group(function () {
    Route::redirect('settings', '/settings/profile');

    Route::get('ajustes/perfil', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('settings/profile', [ProfileController::class, 'update'])->name('profile.update');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::delete('settings/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('ajustes/constrasena', [PasswordController::class, 'edit'])->name('user-password.edit');

    Route::get('ajustes/seguridad', [SecurityController::class, 'edit'])
        ->middleware(RequirePassword::class)
        ->name('security.edit');

    Route::put('settings/password', [PasswordController::class, 'update'])
        ->middleware('throttle:6,1')
        ->name('user-password.update');

    Route::get('ajustes/apariencia', function () {
        return Inertia::render('settings/appearance');
    })->name('appearance.edit');

    Route::get('ajustes/cuentas-vinculadas', [ConnectedAccountController::class, 'edit'])
        ->name('connected-accounts.edit');
    Route::get('ajustes/cuentas-vinculadas/{provider}/vincular', [ConnectedAccountController::class, 'link'])
        ->name('connected-accounts.link');
    Route::get('ajustes/cuentas-vinculadas/{provider}/callback', [ConnectedAccountController::class, 'linkCallback'])
        ->name('connected-accounts.link-callback');
    Route::delete('ajustes/cuentas-vinculadas', [ConnectedAccountController::class, 'destroy'])
        ->name('connected-accounts.destroy');

    Route::middleware('can:'.Permissions::MANAGE_ERRORS->value)->group(function () {
        Route::get('ajustes/errores', [ClientErrorController::class, 'index'])
            ->name('errors.index');

        Route::patch('settings/errors/{error}', [ClientErrorController::class, 'resolve'])
            ->name('errors.resolve');

        Route::delete('settings/errors/{error}', [ClientErrorController::class, 'destroy'])
            ->name('errors.destroy');
    });

    Route::middleware('can:'.Permissions::MANAGE_ROLES->value)->group(function () {
        Route::get('ajustes/roles', [RoleController::class, 'index'])
            ->name('roles.edit');

        Route::post('settings/roles', [RoleController::class, 'store'])
            ->name('roles.store');

        Route::put('settings/roles/{role}', [RoleController::class, 'update'])
            ->name('roles.update');

        Route::put('settings/roles/{role}/permissions', [RoleController::class, 'updatePermission'])
            ->name('roles.update-permissions');

        Route::delete('settings/roles/{role}', [RoleController::class, 'destroy'])
            ->name('roles.destroy');
    });
});

// Lets password managers and browsers find where passkeys are set up.
Route::get('.well-known/passkey-endpoints', function () {
    return response()->json([
        'enroll' => route('security.edit'),
        'manage' => route('security.edit'),
    ]);
})->name('well-known.passkeys');

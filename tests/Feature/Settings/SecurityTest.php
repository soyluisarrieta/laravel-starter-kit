<?php

use App\Models\User;
use Laravel\Passkeys\Passkey;

function passkeyFor(User $user, string $name = 'Chrome en Windows'): Passkey
{
    return Passkey::forceCreate([
        'user_id' => $user->id,
        'name' => $name,
        'credential_id' => 'cred-'.$name,
        'credential' => ['id' => 'cred-'.$name],
    ]);
}

test('asks for the password before showing the security settings', function () {
    $this->actingAs(User::factory()->create())
        ->get(route('security.edit'))
        ->assertRedirect(route('password.confirm'));
});

test('shows the confirm password page in spanish routes', function () {
    $this->actingAs(User::factory()->create())
        ->get(route('password.confirm'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page->component('auth/confirm-password'));
});

test('lists the passkeys of the user once the password is confirmed', function () {
    $user = User::factory()->create();
    passkeyFor($user);
    passkeyFor(User::factory()->create(), 'Ajena');

    $this->actingAs($user)
        ->withSession(['auth.password_confirmed_at' => time()])
        ->get(route('security.edit'))
        ->assertOk()
        ->assertInertia(fn ($page) => $page
            ->component('settings/security')
            ->where('canManagePasskeys', true)
            ->has('passkeys', 1)
            ->where('passkeys.0.name', 'Chrome en Windows'));
});

test('removes a passkey of the user', function () {
    $user = User::factory()->create();
    $passkey = passkeyFor($user);

    $this->actingAs($user)
        ->withSession(['auth.password_confirmed_at' => time()])
        ->delete(route('passkey.destroy', $passkey))
        ->assertRedirect();

    expect(Passkey::count())->toBe(0);
});

test('offers passkey sign in options to guests', function () {
    $this->getJson(route('passkey.login-options'))->assertOk();
});

test('tells browsers where passkeys are managed', function () {
    $this->getJson('/.well-known/passkey-endpoints')
        ->assertOk()
        ->assertJson(['enroll' => route('security.edit'), 'manage' => route('security.edit')]);
});

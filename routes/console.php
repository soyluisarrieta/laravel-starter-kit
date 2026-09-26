<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

// Hostinger blocks datacenter IPs (GitHub runners) on every port, so the runner
// cannot reach the server to trigger a deploy. Instead the server polls GitHub
// outbound, once a minute, from the scheduler's own cron.
Schedule::command('deploy:pull')
    ->everyMinute()
    ->withoutOverlapping(2);

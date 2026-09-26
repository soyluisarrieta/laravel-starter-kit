<?php

namespace App\Support;

/**
 * Starts scripts/deploy-pull.sh in the background, so the scheduler tick that
 * asked for it is not held up while a deploy installs and migrates.
 */
class DeployRunner
{
    public function run(): void
    {
        $script = base_path('scripts/deploy-pull.sh');
        $log = storage_path('logs/deploy.log');

        exec('nohup /bin/bash '.escapeshellarg($script).' >> '.escapeshellarg($log).' 2>&1 &');
    }
}

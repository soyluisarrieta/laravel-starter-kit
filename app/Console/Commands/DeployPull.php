<?php

namespace App\Console\Commands;

use App\Support\DeployRunner;
use Illuminate\Console\Command;

class DeployPull extends Command
{
    protected $signature = 'deploy:pull';

    protected $description = 'Deploy the production branch if it changed';

    public function handle(DeployRunner $runner): int
    {
        $runner->run();

        return self::SUCCESS;
    }
}

<?php

namespace App\Providers;

use Carbon\Carbon;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // global variable for controlling today's date
        $today = date('d');
        // global variable for controlling sidebar
        $sidebarIsClose = '';
        if(isset($_COOKIE['sidebar_is_close'])) {
            switch ($_COOKIE['sidebar_is_close']) {
                case 'true':
                    $sidebarIsClose = 'true';
                    break;
                case 'false':
                    $sidebarIsClose = 'false';
            }
        }
        View::share(['sidebarIsClose' => $sidebarIsClose, 'today' => $today]);
    }
}

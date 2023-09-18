<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ColorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('colors')->insert([
            [
                'code' => '#b8258f',
                'name' => 'Berry Red'
            ],
            [
                'code' => '#db4035',
                'name' => 'Red'
            ],
            [
                'code' => '#ff9933',
                'name' => 'Orange'
            ],
            [
                'code' => '#fad000',
                'name' => 'Yellow'
            ],
            [
                'code' => '#afb83b',
                'name' => 'Olive Green'
            ],
            [
                'code' => '#7ecc49',
                'name' => 'Lime Green'
            ],
            [
                'code' => '#299438',
                'name' => 'Green'
            ],
            [
                'code' => '#6accbc',
                'name' => 'Mint Green'
            ],
            [
                'code' => '#158fad',
                'name' => 'Teal'
            ],
            [
                'code' => '#14aaf5',
                'name' => 'Sky Blue'
            ],
            [
                'code' => '#96c3eb',
                'name' => 'Light Blue'
            ],
            [
                'code' => '#4073ff',
                'name' => 'Blue'
            ],
            [
                'code' => '#884dff',
                'name' => 'Grape'
            ],
            [
                'code' => '#af38eb',
                'name' => 'Violet'
            ],
            [
                'code' => '#eb96eb',
                'name' => 'Lavender'
            ],
            [
                'code' => '#E05194',
                'name' => 'Magenta'
            ],
            [
                'code' => '#ff8d85',
                'name' => 'Salmon'
            ],
            [
                'code' => '#808080',
                'name' => 'Charcoal'
            ],
            [
                'code' => '#b8b8b8',
                'name' => 'Grey'
            ],
            [
                'code' => '#ccac93',
                'name' => 'Taupe'
            ],
        ]);
    }
}

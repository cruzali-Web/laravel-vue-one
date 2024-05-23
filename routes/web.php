<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Rutas publicas

// Route::get('/', function () {
//     return view('welcome');
// });


// Route::get('categorias', function() {
//     $categorias= [
//         'Fideos', 
//         'Jitomates',
//     ];

//     foreach ($categorias as $categoria) {
//         echo $categoria.'<br></br>';
//     }
// });

// Route::get('categorias/fideos', function () {
//     echo 'Productos de fideos';
// });



Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');
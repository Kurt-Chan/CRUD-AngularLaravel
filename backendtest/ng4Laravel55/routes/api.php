<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('Items', [ItemController::class, 'store'])->name('store');
Route::get('/getItems', [ItemController::class, 'read'])->name('read');
Route::post('/deleteItem', [ItemController::class, 'delete'])->name('delete');
Route::post('/editItem', [ItemController::class, 'edit'])->name('edit');

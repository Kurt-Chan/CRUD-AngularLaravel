<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ItemController extends Controller
{
    //

    public function store(Request $request){
        $item = new Item([
            'name' => $request->get('name'),
            'price' => $request->get('price')
        ]);
        $item ->save();
        return response()->json('Successfully added!');
    }

    public function read(){
        return response()->json(Item::all());
    }

    public function delete(Request $request){
        DB::delete('delete from items where id = ?', [$request->id]);
        return response()->json('Item Deleted!');
    }

    public function edit(Request $request){
        DB::table('items')->where('id', $request->id)->update([
            'name'=> $request->name,
            'price'=>$request->price
        ]);
        return response()->json('Item Edited');
    }
}

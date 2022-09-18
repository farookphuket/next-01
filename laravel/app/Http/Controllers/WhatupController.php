<?php

namespace App\Http\Controllers;

use App\Models\Whatup;
use Illuminate\Http\Request;

use Auth;

class WhatupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $wp = Whatup::with('user')->latest()->get();


        return response()->json([
            "whatup" => $wp
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store()
    {
        $valid = request()->validate([
            "title" => ["required"],
            "body" => ["required","min:4"]
        ],[
            "body.min" => "Error! need at least 40 characters."
        ]);

        $is_public = !request()->is_public?0:1;

        $valid["is_public"] = $is_public;
        $valid["user_id"] = Auth::user()->id;
        $valid["title"] = request()->title;
        $valid["body"] = request()->body;
        $valid["created_at"] = now();
        $valid["updated_at"] = now();
        Whatup::create($valid);

        $msg = "success this is save";

        return response()->json([
            "msg" => $msg,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Whatup  $whatup
     * @return \Illuminate\Http\Response
     */
    public function show(Whatup $whatup)
    {
        $wp = Whatup::with('user')->where('id',$whatup->id)->first();
        return response()->json([
            "whatup" => $wp
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Whatup  $whatup
     * @return \Illuminate\Http\Response
     */
    public function edit(Whatup $whatup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Whatup  $whatup
     * @return \Illuminate\Http\Response
     */
    public function update(Whatup $whatup)
    {

        $valid = request()->validate([
            "title" => ["required","min:8"],
            "body" => ["required","min:4"]
        ],[
            "body.min" => "Error! need at least 40 characters."
        ]);


        $is_public = !request()->is_public?0:1;

        $valid["is_public"] = $is_public;
        $valid["title"] = request()->title;
        $valid["body"] = request()->body;
        $valid["updated_at"] = now();
        Whatup::where('id',$whatup->id)->update($valid);

        $msg = "success this has update {$whatup->id}";

        return response()->json([
            "msg" => $msg
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Whatup  $whatup
     * @return \Illuminate\Http\Response
     */
    public function destroy(Whatup $whatup)
    {
        //
    }
}

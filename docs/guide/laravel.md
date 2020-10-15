# LARAVEL

## Tailwind setup in Laravel 8

- `npm install`

- `npm install tailwindcss`

- In `resources/css/app.css` paste these lines :

```scss
@import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Roboto&display=swap");
// Roboto, Alfa slab one  fonts ☝

@import "tailwindcss/base";

@import "tailwindcss/components";

@import "tailwindcss/utilities";
```

- `npx tailwindcss init` to create `tailwind.config.js`

- Open `webpack.mix.js`and replace its content with this:

```js
const mix = require("laravel-mix");

mix
  .js("resources/js/app.js", "public/js")
  .postCss("resources/css/app.css", "public/css", [require("tailwindcss")]);
```

Don't forget to add your font's in `tailwind.config.js`

```js
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      serif: ["'Alfa Slab One'", "cursive"],
    },
    extend: {
      // or fontFamily should be here I am not sure, but it works for me
    },
  },
  variants: {},
  plugins: [],
};
```

finally in the `views`

- Create a partial folder or whatever you wanna call it.
- Create a new file `template.blade.php`and paste this:

```html
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" />
  </head>
  <body class="bg-gray-700 container m-auto">
    @yeild('body')
  </body>
</html>
```

When you create a new blade file :

```php
@extends('partial.header') // 👈 or whatever your name is.

@section('body')

// your content
<div class="bg-green-400 p-10">
  It Works! 😎
</div>

@endsection
```

If I miss something please share it with me.

## You did it, Good job! 👏 💃

TailwindCss is the best thing happen to CSS so far ♥

Change my mind 😎

---

## The Seven Restful Controller Actions

in terminal :

```sh
>> php artisan make:controller ProjectsController -r -m Project
```

it will ask you if you want to create one :

```sh
>> php artisan make:controller ProjectsController -r -m Project
 A App\Models\Project model does not exist. Do you want to generate it? (yes/no) [yes]:
 > yes
Model created successfully.
Controller created successfully.
```

this will create a controller with all basic functions and create a model

now in the routes folder :

```php
Route::get('/project',[ProjectsController::class, 'index']);
Route::get('/project/create',[ProjectsController::class, 'create']);
Route::post('/project/',[ProjectsController::class, 'store']);
Route::get('/project/{project}',[ProjectsController::class, 'show']);
Route::get('/project/{project}/edit',[ProjectsController::class, 'edit']);
Route::put('/project/{project}',[ProjectsController::class, 'update']);
```

::: tip
make sure to match wildcard name with the variable in the functions cause if it's not matching you will get an error !

```php
// web.php
Route::get('/project/{project}',[ProjectsController::class, 'show']);

// ProjectsController.php

  // ...
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {
        return view('projects.edit', compact('project'));
    }

```

Laravel is smart enough to match the wild card name with the variable you feeding to the function THEY HAVE TO MATCH!!
however if you wanna feed a slug or anything else other then primary key like ID you should update your modal

```php
// Your modal

public function getRouteKeyName()
{
  // return parent::getRouteKeyName(); // it will change the auto generated key name
  return 'your-slug'; // it will change the auto generated key name
}
```

:::

## How to validate form input

the dirty way :

```php
    public function update(Project $project)
    {
            request()->validate([
            'name' => ['required', 'min:4', 'max:255'],
            'body' => ['required', 'min:4', 'max:255'],
            'owner' => ['required', 'min:4', 'max:255'],
        ]);
        // dirty way
        $project->name = request('name');
        $project->body = request('body');
        $project->owner = request('owner');
        $project->save();

        // cleaner way
        Project::create([
          'name' => request('name'),
          'body' => request('body'),
          'owner' => request('owner'),
        ]);


        return redirect('/project/'. $project->id);
    }
```

- PROBLEM

  you will get error
  `Illuminate\Database\Eloquent\MassAssignmentException Add [name] to fillable property to allow mass assignment on [App\Models\Project].`

- Solution
  got to your model and add this property `$fillable`

```php
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'body', 'owner']; // 👈 Add your cols that you wanna fill

    // if you want to turn off protection completely
  protected $fillable = []; // super dangerous! 💥

}
```

so store methods :

```php
  /**
    * Store a newly created resource in storage.
    *
    * @param  \Illuminate\Http\Request  $request
    * @return \Illuminate\Http\Response
    */
  public function store(Request $request)
  {
    // Dirty way
      request()->validate([
          'name' => ['required', 'min:4', 'max:255'],
          'body' => ['required', 'min:4', 'max:255'],
          'owner' => ['required', 'min:4', 'max:255'],
      ]);
      $project = new Project();
      $project->name = request('name');
      $project->body = request('body');
      $project->owner = request('owner');
      $project->save();
      return redirect('/project');

      // cleaner way

      Project::create(
        request()->validate([
          'name' => ['required', 'min:4', 'max:255'],
          'body' => ['required', 'min:4', 'max:255'],
          'owner' => ['required', 'min:4', 'max:255'],
        ])
      )
  }
```

if you wanna update you replace `Project::create` with `$project->update();`

like so:

## Controller example:

```php
<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::all();
        return view('projects.index', compact('projects'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return view('projects.create' );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Project::create($this->validateProject());
        return redirect('/project');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {

        return view('projects.show', compact('project'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function edit(Project $project)
    {

        return view('projects.edit', compact('project'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function update(Project $project)
    {
      // we replace this by a protected function 👈
      // Project::create(
      //   request()->validate([
      //     'name' => ['required', 'min:4', 'max:255'],
      //     'body' => ['required', 'min:4', 'max:255'],
      //     'owner' => ['required', 'min:4', 'max:255'],
      //   ])
      // )
        $project->update($this->validateProject())  // 👈 don't forget $this->

        return redirect('/project/'. $project->id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Project  $project
     * @return \Illuminate\Http\Response
     */
    public function destroy(Project $project)
    {
        //
    }

// here 👇 because we will not call it outside this class
    protected function validateProject() // 👈 we extract the duplicate here.and call it
    {
        return request()->validate(
            [
                'name' => ['required', 'min:4', 'max:255'],
                'body' => ['required', 'min:4', 'max:255'],
                'owner' => ['required', 'min:4', 'max:255'],
            ]
            );
    }
}
```

# Named routes

the previous example works fine for small projects if you wanna hard code the routes values, but if you decide to change the route path in the future, you need to change that every where
you can do this:

```php


```

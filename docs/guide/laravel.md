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
// web.php                                                                    👇 named route
Route::get('/project/{project}',[ProjectsController::class, 'show'])->name('project.show');

// index.blade.php

    <div class="flex flex-wrap m-2">
        @foreach ($projects as $project )
        // You can apply it here 👇
            <a href="{{ route('project.show', $project) }}" class="hover:shadow-lg shadow rounded-lg w-1/2 p-5 cursor-pointer">
                <div class="text-xl font-serif">{{ $project->name }}</div>
                <div>{{ $project->body }}</div>
                <div>{{ $project->owner }}</div>
                <div>{{ $project->created_at }}</div>
            </a>
        @endforeach
    </div>
```

# Eloquent Relationships

[see documentation](https://laravel.com/docs/master/eloquent)

# Create dummy data

[see Faker documentation](https://github.com/fzaninotto/Faker)

```php
App\Models\User::factory()->count(10)->create();
```

- specify certain data for certain column you can provide array like here :

```bash
 >> App\Models\Article::factory()->count(5)->create(['user_id'=>1]);
```

- Factory example

```php
<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\User;  // 👈 you first import it here
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Article::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => User::factory(), // 👈  relation to User table
            'title' => $this->faker->sentence,
            'author' => $this->faker->sentence,
            'body' => $this->faker->paragraph,
        ];
    }
}

```

If you delete the user let's say, you need all data related to this user id to be deleted or your data base will be in a bad situation for that,
in your migration file

you should add these lines :

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('title');
            $table->text('author');
            $table->text('body');
            $table->timestamps();
            // when you delete the user it will delete the related data for this user
            $table->foreign('user_id') //  👈  if you delete the user it will cascade  to all the related data and delete  it
                ->references('id')
                ->on('users')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
}

```

## Collections

```php
$article->pluck('tags')->collapse()->pluck('name')->unique();

```

### Dot notation:

if you have a collection and you wanna pluck a collection inside this collection, if you try to do it like :
`$art->pluck('tags.name');` with a dot only, it will not work, but if you add `*` then it's correct:

```php
// you  should    👇 add * in order to work
$art->pluck('tags.*.name');https://www.freecodecamp.org/news/7-git-commands-you-might-not-know/?fbclid=IwAR3xkHIvTO0axfRrP3Iw2oKvHJABopbFG6CWgv3pyr-UkgTAjBy9usZS6dE

 $art->pluck('tags.*.name')->collapse()->unique()->map(function($tag){return ucwords($tag);});

// result :
=> Illuminate\Support\Collection {#4316
     all: [
       "Laravel",
       "Php",
       "Javascript",
     ],
   }
>>>
```

# Service Container

it's exactly like it sounds like it's a container to store and retrieve services.

# Sending emails

in your terminal:

```zsh
php artisan make:mail MyEmail
```

With Markdown

```zsh
#      email file name 👇         👇 with markdown and where the blade file should be created
php artisan make:mail MyEmail --markdown=emails.contact
```

you will have a template like this

```php
// views/emails/contact.blade.php 1️⃣

@component('mail::message')
# Introduction

The body of your message.

@component('mail::button', ['url' => ''])
Button Text
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent

// Http/mail/Contact.php 2️⃣

<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Contact extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
      //  automatically 👇 populate the markdown method
        return $this->markdown('emails.contact');
    }
}

```

# Custom CSS for laravel Email

If you wanna tweak the style of your email wish 99.99123% you will do that

```zsh
# basically copy only the tag 👇 laravel mail into the view directory

php artisan vendor:publish --tag=laravel-mail

>> Copied Directory [\vendor\laravel\framework\src\Illuminate\Mail\resources\views] To [\resources\views\vendor\mail]
>> Publishing complete.
```

it will copy the CSS and HTML from vendor folder into views, and then

- In the themes folder
- Create new file name it whatever `sam.css`
- Go to config -> mail.php

```php

    'markdown' => [
      // your new   👇 file here
        'theme' => 'sam',

        'paths' => [
            resource_path('views/vendor/mail'),
        ],
    ],
```

## Eventing event listener

in your cintroller lets say that when an Event happen you need to trigger a sequence of actions or events,
Rather then writing all the code in the controller, you can split it into event and
listeners

- Create event :

`php artisan make:event EventName`

- List Event

`php artisan event:list`

After creating an event it will create a folder called events!

:::tip
All property of an event Should be public!
:::

in your controller :

```php
    public function store()
    {
      //  You trigger the event here
        ProductPurchased::dispatch('productModule');
        // or
        // event(new ProductPurchased('toy'));
    }
```

- Create listener

```zsh
// -e is shortcut foe event you     👇follow it by the event name
php artisan make:listener EventName -e EventName
```

after you create the event and the listener, you should connect them together.
there 2 ways :

- manual way
- automatic way (Not always good!)
  we doing so by going to `Providers` folder

```php
<?php

// App/Providers/EventServiceProvider.php

namespace App\Providers;

use App\Events\ProductPurchased;
use App\Listeners\AwardAchievements;
use App\Listeners\SendShareableCoupon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        //  👇 You add your events and listeners here
        ProductPurchased::class => [
            AwardAchievements::class,
            SendShareableCoupon::class,
        ]
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    // public function shouldDiscoverEvents()
    // {
    //     return true;
    // }
}

```

you have other option to connect events and listeners automatically by adding this function

```php
    public function shouldDiscoverEvents()
    {
        return true;
    }
```

after adding this function you can delete the connection you did manually.

Both ways are correct, the automatic way will blur the connections between the event and it's listeners and it will not be so clear unless you called `php artisan event:list` so you can see the connections, but in the first method is more clear and explicit, so you need to think about what method you should use in your production.

#

in the modal you can replace this function, by adding name into the route it self.

```php
    public function getRouteKeyName()
    {
        return 'name';
    }
```

so you can clean it up with one word

if you wanna access the user by something other then the id then you can clear this out in the route directly

```php
//                             👇
  Route::get('/profiles/{user:name}', 'ProfilesController@show')->name('profile');
```

## CSS Loop last

```php
//  you can do this so the last loop will not have the effect

<div class="flex p-4 {{ $loop->last ? '':'border-b border-gray-400' }}"></div>
```

## Check if the User is authorized

you can do it in controller like :

[custom created function at 02:07](https://laracasts.com/series/laravel-6-from-scratch/episodes/63?autoplay=true)

```php

// junior way
    public function edit(User $user)
    {
      //                 👇 Custon created function
      if($user->isNot(current_User())){
        abort(404);
      }

    // MID LEVEL
        abort_if($user->isNot(current_User()), 404);

    //  senior level
    🎃👇

        return view('profiles.edit', compact('user'));
    }
```

[🎃 => time: 04:54](https://laracasts.com/series/laravel-6-from-scratch/episodes/63?autoplay=true)

## Form upload files

whenever you want to upload files with your form you should add

```php
enctype="multipart/form-data"

so it should be like :
 <form method="POST" action="{{ $user->path() }}" enctype="multipart/form-data">
  <input type="file">
 </form>
```

to solve the path

```php
//  add this in config/fileSystems.php

    'links' => [
        public_path('storage') => storage_path('app/public'),
        public_path('avatars') => storage_path('app/public/avatars'),
    ],

    // and then run
    php artisan storage:link

then in App/User.php

    public function getAvatarAttribute($value)
    {
        return asset($value ?:'/assets/svg/robot.svg');
    }
```

[learn more](https://laracasts.com/series/laravel-6-from-scratch/episodes/64?autoplay=true)

## hash passwords

[01:00](https://laracasts.com/series/laravel-6-from-scratch/episodes/65?autoplay=true)

set this in the controller of the form password field, the password will be processed here before it go to the DB

```php
  public function setPasswordAttribute($value)
  {
      $this->attributes['password'] = bcrypt($value);
  }
```

## GITHUB project file:

[samstwitter](https://github.com/Samk13/samstwitter)

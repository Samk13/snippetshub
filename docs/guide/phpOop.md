# PHP OOP

## name space

[explain name space](https://www.youtube.com/watch?v=tqg34D3AIH4&list=PLFbnPuoQkKscQ4dD0jLXPReGlL4Iv3lnC&index=4&ab_channel=DaveHollingworth)

name spaces are like folders
oif you wanna use one class under name space you should write the name space before the class name,
`$useYouClass = new NameSpace\classname;`

you can creat as much subnamespaces as you want
if the namspace get long you can use the word `use`

```php
// item.php
<?php
namespace App\Model\Admin;

class item
{

}

// index.php
<?php
require 'item.php';
use App\Model\Admin\Item;


$obj = new Item;
var_dump($obj);
```

when you use the word `use` itäs like creating an alias, you can use the class name directelly

prefixing a class by `\` means that ignor the name space the class is in and use the global namespace

you can combine multiple use keyu words by seperating acery name space by ,

`use NameSpace1, NameSpace2, NameSpace4 as bla;`
it's recommended not to do so thaugh!

# auto load your requiered classes

if your file name match your class name you can auto import all your required classes
by running this function
no need to write require or use

```php
spl_autoload_register(function($class){
    require "$class";
});
```

that's why it's importany to match the name of the class and file name .
if you match the folder and file name structure it will work perfectelly
like this :

```php
spl_autoload_register(function($class){
    require str_replace('\\','/', $class) . '.php';
});
```

# Array useful functions

## [array_column();](https://www.youtube.com/watch?v=yTg5vCdSViI&ab_channel=Webslesson)

## Abstract Classes

```php
<?php

abstract class AcheavmentType
{
    public function name()
    {
        // get the class name
        $class = (new ReflectionClass($this))->getShortName();

        // replace capital letters
        return trim(preg_replace('/[A-Z]/', ' $0', $class));
    }
    public function icon()
    {
        return strtolower(str_replace(' ', '-', $this->name()) . '.png');
    }
    abstract public function qualifier($user);
}


class FirstThousandPoints extends AcheavmentType
{
    public function qualifier($user)
    {
        //
    }
}
class FirstBestAnswer extends AcheavmentType
{
    public function qualifier($user)
    {
        //
    }
}

$achievement = new FirstBestAnswer();
echo $achievement->name();
echo '<br />';
echo $achievement->icon();
echo '<br />';
echo $achievement->qualifier('usersss');
```

when you add `abstract` to a class you do couple of things:

- you remove the ability to instantiate that class directelly how ever unlike the `interface`
  abstract can still include any behaviour or functionality if you need to, that's why we say it's template of sorts.

- you can also declare abstract methods, these methodes you can not implement them directelly
  it needs specefics from the subclass,

  example on this abstract the [template method pattern](https://en.wikipedia.org/wiki/Template_method_pattern)

in simple words, abstract will force you to keep the same structure of the original class

```php
abstract class Game
{
    abstract protected function initialize();
    abstract protected function startPlay();
    abstract protected function endPlay();

    /** Template method */
    public final function play()
    {
        /** Primitive */
        $this->initialize();

        /** Primitive */
        $this->startPlay();

        /** Primitive */
        $this->endPlay();
    }
}

class Mario extends Game
{
    protected function initialize()
    {
        echo "Mario Game Initialized! Start playing.". PHP_EOL;
    }

    protected function startPlay()
    {
        echo "Mario Game Started. Enjoy the game!". PHP_EOL;
    }

    protected function endPlay()
    {
        echo "Mario Game Finished!". PHP_EOL;
    }

}

class Tankfight extends Game
{
    protected function initialize()
    {
        echo "Tankfight Game Initialized! Start playing.". PHP_EOL;
    }

    protected function startPlay()
    {
        echo "Tankfight Game Started. Enjoy the game!". PHP_EOL;
    }

    protected function endPlay()
    {
        echo "Tankfight Game Finished!". PHP_EOL;
    }

}

$game = new Tankfight();
$game->play();

$game = new Mario();
$game->play();
```

## HandChakes and interfaces

```php
<?php

// interface it's like class without behaviour
// basically it will gorce function that implement it to have certain functions that is required in the interface
interface NewsLetter
{
    // it's not even allowed to gave a body for the functions
    // this what I force 👇 to implement
    public function subscribe($email);

}
class CampaignMonitor implements NewsLetter
{
    public function subscribe($email)
    {
         echo('subsribing by Campaign monitor <br>');
    }
}

// and you should implement  the interface here
//             👇        👇
class Drip implements NewsLetter
// if I don't implements i get error : ...  must implement interface NewsLetter, instance of Drip given, ...
{
    public function subscribe($email)
    {
         echo('subsribing by Drip <br>');
    }
}

class NewsLetterSubscriptionController
{
    // implement the interface 👇 here
    public function store(NewsLetter $newsletter)
    {
        $email = 'test@test.com';
    // i need to call it 👇 here
        $newsletter->subscribe($email);
    }
}

$controller = new NewsLetterSubscriptionController();
$controller->store(new Drip());
$controller->store(new CampaignMonitor());

```

## Change accessibility of a function

```php
<?php

class Person
{
    public $name;

    public function __construct($name)
    {
        $this->name = $name;
    }
    private function thingsThatShouldBePrivate()
    {
        echo 'The Private things that we should keep it private.🤐';
    }
}

// how to get a  private function

$method = new \ReflectionMethod(Person::class, 'thingsThatShouldBePrivate');
$method->setAccessible(true);
$person = new Person('Sam');
$method->invoke($person);
```

## Object composition

```php
<?php

// Object Composition means: combining types to build more complex objects
// it's when one class has a pointer into another class

class Subscription
{
    /**
     * @var \Gateway
    */
    protected Gateway $gatway;

    public function __construct(Gateway $gatway)
    {
        $this->gatway = $gatway;
    }

    public function swap($newPlan)
    {
        //
    }
    protected function findStripCustomer($newPlan)
    {
        //
    }
}

interface Gateway
{
    public function findCustomer();
    public function findSubscriptionByCustomer();
}

class SripeGatway implements Gateway
{
    public function findCustomer()
    {
        //
    }

    public function findSubscriptionByCustomer()
    {
        //
    }
}

new Subscription(new SripeGatway());
```

## Create Types in PHP

if you want to make a special type for data other then the primitive ones like `string` or `int`,
you can create a class :

```php
class Coordinates
{
    private $x;
    private $y;

    public function __construct($x, $y)
    {
        $this->x = $x;
        $this->y = $y;
    }

    public function getX()
    {
        echo ' ___________ ';
        echo $this->x;
        echo ' ___________ ';
    }
    public function getY()
    {
        echo $this->y;

    }
    public function getXY()
    {
        echo '_____';
        echo $this->y;
        echo '_____';
        echo $this->y;
    }

}

function pin(Coordinates $coordinates)
{
    echo $coordinates->getX();
    echo $coordinates->getY();
    echo $coordinates->getXY();
}

pin((new Coordinates(12, 123412)));
```

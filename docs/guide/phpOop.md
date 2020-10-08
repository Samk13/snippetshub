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

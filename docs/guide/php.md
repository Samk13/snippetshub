# PHP

[PHP documentations](https://www.php.net/docs.php)

# String functions:

[PHP from free code camp tut](https://www.youtube.com/watch?v=OK_JCtrrv-c&ab_channel=freeCodeCamp.org)

```php
// make variable :
$yourvariable = "Long string that we can test on";
echo(); // to display stuff on screen you can use it like
echo "somthing at it will works too";
// string to upper case :
echo strtoupper($yourvariable);
// string to lower case :
strtolower($yourvariable);
// string count :
echo strlen($yourvariable);
```

If I want to select the a char in the string I can convert the string to array by adding []

## String select one char index :

```php
$yourvariable = "Long string that we can test on";
 echo $yourvariable[0] // will print first char L
```

## String replace :

```php
str_replace("Long","what you should replace with",$yourvariable);
```

## String slice section of a string:

```php
// substr($yourSting, startIndex, ?endIndex);
substr($yourvariable, 8 , 4);
```

### [full list of string functions](https://www.php.net/manual/en/ref.strings.php)

### Working with numbers

### [full list of Math functions](https://www.php.net/manual/en/ref.math.php)

You should differentiate between integers and floating numbers :

```php
$integer_number = 12312341;
$float_number = 1231.2341;

echo 13;
echo -13; // negative or positive no problem
echo 13.00; // Float number
echo 13 + 13; // 26
echo 13 * 13; // 26
echo 13 / 13; // 1
echo 12 % 2; // 0

```

you can specify the order of opperations by addig ():

```php
echo 2+2*2;  //6
echo (2+2)*2 //8
```

- increment :

```php
echo $num = 2+2*2;  //6
echo $num += 1;
echo $num /= 2;
echo $num *= 1;
echo pow($num, 2); // power num * num
echo sqrt($num); // square root num
echo max( 3, 10); // 10 the bigger
echo min( 3, 10); // 3 the smaller
echo round( 3.38247); // 3
echo round( 3.6); // 4
echo ceil( 3.38247); // 4
echo floor( 3.38247); // 3
```

## Getting user input

using form is the middel man between php and html

in the form:
action = the name of php page that will handle the form data
method = the type of data handling should apply on the data get put post ...

to handle form input in php there is special cariable start with \$\_

$_GET: not fot secure data data will be shown in the URL
$\_POST : more secure and data will not show in the URL

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form action="site.php" method="post">
      name: <input type="text" name="name" /> password:
      <input type="password" name="password" />
      <input type="submit" />
    </form>
    <?php
        echo $_POST["name"]; // will show in the URL
        echo $_POST["password"]; // Will not show in the URL
    ?>
    <br />
  </body>
</html>
```

## Arrays in PHP:

We creat an array like this :

```php
$array_of_freinds = array("sam","samFreind1","samFreind3","samFreind4",);

```

how can we access it:

```php
$freinds = array("sam","samFreind1","samFreind3","samFreind4",);

echo $freinds; // Array or will give error (Notice: Array to string conversion in C:\xampp\htdocs\example\index.php on line  number)
echo $freinds[0]; // sam
echo $freinds[1]; // samFreind1

// if I want modefy
 $freinds[1] = "Linnea"; // will replace "sanFreind1" with Linnea

//  adding an element to array
$freind[4] = "oneMoreFreind";
// find the length of array :

echo count($freinds); // 4
```

:::tip
`echo` will not work with array, cause it expect a string always.
instead you should use `print_r`
:::

## associative array

It's fancy name for a key value pair array

rather then access array by index
we access them using the key

"sam" => "A+"
<br>
key ----- value

```php
$grades = array("sam" => "A+", "Linnea" => "AA+");
                 key  => value,    key =>  value
echo $grades["sam"]; // A+

$grades["sam"] = "F+";

// we can use it  in a form like

<form action="index.php" method="post">
    <input type="text" name="student"><br>
    <input type="submit"><br>
</form>
<?php

$grades = array("sam"=>"A+", "Linnea"=>"2342")
echo $grades[$_POST["student"]];
?>
```

## Multidimensional Arrays

It's basically fancy name for arrays within an array.

```php
 $blogs= [
     ["title" => "title1", "author"=>"autor1","title"=>"the text1", "likes"=>12],
     ["title" => "title2", "author"=>"autor2","title"=>"the text2", "likes"=>1212],
     ["title" => "title3", "author"=>"autor3","title"=>"the text3", "likes"=>1212],
     ["title" => "title4", "author"=>"autor4","title"=>"the text4", "likes"=>1122],
 ];

```

### push value to array

you can do either

```php
$people= ['test1','test2','test3','test4'];
$people[]="test5";
// ot
array_push($people, "test5");
```

## merge 2 arrays

```php
$people1= ['test1','test2','test3','test4'];
$people2=["test5","test6"];
$people3 = array_merge($people1,$people2);
```

## pop last element in array

`array_pop();`

## cycle through an array

```php
 $blogs= [
     ["title" => "title1", "author"=>"autor1","title2"=>"the text1", "likes"=>12],
     ["title" => "title2", "author"=>"autor2","title2"=>"the text2", "likes"=>1212],
     ["title" => "title3", "author"=>"autor3","title2"=>"the text3", "likes"=>1212],
     ["title" => "title4", "author"=>"autor4","title2"=>"the text4", "likes"=>1122],
 ];
 foreach($blogs as $blog)
 {
     echo $blog["title"] . " - " . $blog["likes"] . "<br>";
 }

```

##

## collect inputs from checkBox:

```php
<form action="index.php" method="post">
apples: <input type="checkbox" name="fruits[]" value="apples"><br>
oranges: <input type="checkbox" name="fruits[]" value="oranges"><br>
banana: <input type="checkbox" name="fruits[]" value="banana"><br>
</form>
<?php
$fruits = $_POST["fruits"];
echo print_r($fruits[0]);

?>
```

## Functions in PHP

make function that greet the user:¨

```php
function sayHi($name)
{
    echo "Hello $name";
};
sayhi("sam");
```

# Loops

## While loops

Simple example:

```php
  <?php

  $index = 1;
  while($index < 5)
  {
    echo "$index <br>";
    $index++; // 👈 dont forget this one here
  }
  ?>
```

## for loop

```php
  <?php
  for ($i = 1; $i < 5; $i++)
  {
    echo "=> $i <br>";
  }

  $numb = [4,5,6,67,7,7,235,2,345,234,5,234,5,23];
  echo count($numb) . "<br>";
  for ($i = 0; $i < count($numb); $i++)
  {
    echo $numb[$i] . "<br>";
  }
  ?>
```

## Include in php

It's similer to `import` in JavaScript
when yuou includ a file you can inherit all the variable and functions that is pblically avaialble.

```php
includ "fileName.php";
$fileNameFunction = "0000"
```

## Classes and Objects

Classes it'a specification of a sustom data type

```php
  <?php
  class Book
  {
    var $title;
    var $author;
    var $pages;
  }

  $book1 = new Book;
  $book1->title = "Harrey Potter";
  $book1->author = "JK Rowling";
  $book1->pages = 400;

  echo $book1->title;

  ?>
```

## Constructors

It's a function that it gets called whenever we created that class

```php
  class Book
  {
    var $title;
    var $author;
    var $pages;
    function __construct($atitle, $aAuthor, $aPages)
    {
      $this->title = $atitle;
      $this->author =$aAuthor;
      $this->pages = $aPages;
      echo "$this->title <br> $this->author <br> $this->pages <br>";
    }
  }

  $book1 = new Book("Harrey Potter","JK Rowling",323);
```

## Object functions

```php
  <?php
  class Book
  {
    var $title;
    var $author;
    var $pages;
    function __construct($atitle, $aAuthor, $aPages)
    {
      $this->title = $atitle;
      $this->author =$aAuthor;
      $this->pages = $aPages;
    }
    function getBook ()
    {
      echo "$this->title <br> $this->author <br> $this->pages <br>";
    }
  }

  $book1 = new Book("Harrey Potter","JK Rowling",323);
  $book1->getBook();

  ?>
```

## Getters and Setter

```php
  <?php
  class Book
  {
    public $title;
    public $author;
    public $pages;
    private $rating;
    function __construct($atitle, $aAuthor, $aPages, $aRating)
    {
      $this->title = $atitle;
      $this->author =$aAuthor;
      $this->pages = $aPages;
      $this->rating = $aRating;
    }

    function getInfo ()
    {
      echo "$this->title <br> $this->author <br> $this->pages <br> $this->rating <br>";
    }

    function getRating()
    {
      return $this->rating;
    }

    function setRating($newRating)
    {
      return $this->rating = $newRating;
    }
  }

  $book1 = new Book("Harrey Potter","JK Rowling",323, "PG-13");
  $book1->setRating("lkadhjsflskah");
  $book1->getRating();
  $book1->getInfo();
  ?>
```

# PHP

[PHP documentations](https://www.php.net/docs.php)

# Strings type

```php
$single_quotes = 'this type of string is better performance then double quotes'
$double_quotes =  " you can put a variable like {$var}s so you let php now that the name is ended"
$name = "Sam";
$html = <<<EOT
<h2 class="bg-green-500">
welcome $name
you can write multiple lines with <<<EOT <---> EOT;
 </h2>
EOT;
```

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

you can specify the order of operations by adding ():

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

using form is the middle man between php and html

in the form:
action = the name of php page that will handle the form data
method = the type of data handling should apply on the data get put post ...

to handle form input in php there is special variable start with \$\_

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

# Arrays in PHP:

We create an array like this :

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

 // otehr example

 <?php
 $blogs= [
     ["title" => "title1", "author"=>"autor1","title2"=>"the text1", "likes"=>12],
     ["title" => "title2", "author"=>"autor2","title2"=>"the text2", "likes"=>1212],
     ["title" => "title3", "author"=>"autor3","title2"=>"the text3", "likes"=>1212],
     ["title" => "title4", "author"=>"autor4","title2"=>"the text4", "likes"=>1122],
 ];

?>

<h1>Products</h1>
<ul>
<?php foreach($blogs as $blog){ ?>
    <li>
        <div><?php echo  $blog["author"]; ?></div>
        <span> likes <?php echo  $blog["likes"]; ?></span>
    </li>
 <?php } ?>
</ul>

```

## present array in HTML

```php
    <ul>
        <?php
            foreach($names as $name){
                echo "<li>$name</li>";
            }
        ?>
    </ul>
    <!-- cleaner way writing forloops inside html  -->
    <ul>
        <?php foreach($names as $name) : ?>
            <li><?= $name; ?></li>
        <?php endforeach ?>
    </ul>
```

## present of else in htnl

```php
<td>
// ternery opperator way
<?= $task['completed'] ? 'Completed':'Not completed';

// if you need to do more then one thing then regular if else is better


    <?php if($task['completed']) :?>
        <span class="text-4xl bg-white w-full rounded-lg">&#9989;</span>
    <?php else  :?>
        <span class="text-4xl bg-white w-full rounded-lg">&#10060;</span>
    <?php endif ?>
</td>
```

##

## collect inputs from checkBox:

[really good resource to check for this](https://www.youtube.com/watch?v=firSTs1bEEY&list=PL4cUxeGkcC9gksOX3Kd9KPo-O68ncT05o&index=21&ab_channel=TheNetNinja)

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

## Array push

```php
$animals = [
'animal1',
'animal2',
];

// add to  normal array
$animals[] = 'one more animal';

$person = [
    'name'=> 'Sam',
    'age'=> 36,
    'career' => 'Software engeneer',
    'location' => 'Stockholm'
];

// add to associative array

$person['address']  = "add your address";
```

## Array pop or remove element

```php
// remove from array
unset($person['location']);
```

## Array formatting on display

you can preserve the formatting by echo out `<pre> echo "code" </pre>`

You can make function to display formatted array like:

```php
function dd($data){¨
// if you use tailwindcss
    echo '<div class="p-5 m-5 rounded-lg text-left font-mono text-lg bg-gray-800 text-white">';
    echo '<pre>';
    print_r($data);
    echo '</pre>';
    echo '</div>';
}
```

## Array Filtering

```php

// create a class Post
class Post
{
    public $title;
    public $published;

    public function __construct($title, $published)
    {
        $this->title = $title;
        $this->published = $published;
    }
}

// create array from the class we create
$posts = [
    new Post('My Post is Lorem ipsum dolor ectetur adipisicing elit', true),
    new Post('My Post is 2 Dignissimos explicabo voluptas tempore veli', true),
    new Post('false Post is 3 t atque non fuga deleniti nostrum placeat expedita, is', false),
    new Post('My Post is 4 te aliais enim praesentium repellat corporis?', true),
    new Post('false Post is 5  Quam, veritatis voluptatibus consectetur velit quaera', false),
    new Post('My Post is 6 ipsum dolor sit amet consectetur adipisicing elit. ', true),
    new Post('My Post is 7 sandae quis suscipit voluptatibus incidunt dolor', true),
];

// filter array

$unpublished = array_filter($posts, function ($post){
    return !$post->published;
});

dd($unpublished);

// result
// Array
// (
//     [2] => Post Object
//         (
//             [title] => false Post is 3 t atque non fuga deleniti nostrum placeat expedita, is
//             [published] =>
//         )

//     [4] => Post Object
//         (
//             [title] => false Post is 5  Quam, veritatis voluptatibus consectetur velit quaera
//             [published] =>
//         )

// )
```

## Array map

One of the down sides of PHP is inconsistency, like here in this example:

array_filter(\$yourArray, funtion(){});

array_map(funtion(){},\$yourArray);

this you could pass by function wrappers around it.

````php
//  you can take the third argument to act as👇 key for the array
$authors = array_column($posts, 'author', 'title');
// extract array value that you    👆 specify here

// result
Array
// (                    title  👇                           author👇
//     [My Post is Lorem ipsum dolor ectetur adipisicing elit] => me
//     [My Post is 2 Dignissimos explicabo voluptas tempore veli] => you
//     [false Post is 3 t atque non fuga deleniti nostrum placeat expedita, is] => them
//     [My Post is 4 te aliais enim praesentium repellat corporis?] => ne
//     [false Post is 5  Quam, veritatis voluptatibus consectetur velit quaera] => him
//     [My Post is 6 ipsum dolor sit amet consectetur adipisicing elit. ] => her
//     [My Post is 7 sandae quis suscipit voluptatibus incidunt dolor] => theme
// )
```

# Functions in PHP

make function that greet the user:¨

```php
function sayHi($name)
{
    echo "Hello $name";
};
sayhi("sam");
```

# Scopes

## Variable scope

:::warning
If you see in a fuction input a variable name with `&` like `&$variable` that means that this variable
has a global scope and this function will change the very same globale scope function, not only the private scope variable inside that function.
::::

```php
 $name = "🍟";
 function sayBye(&$name)
 {
     $name= "🌭";
     global $name;
    echo "bye {$name}";
 }

 sayBye($name); //🌭
 echo $name; // 🌭
```

## Global variables

if you have same variable inside and outside the function, you can force the fuction to read the varible outside the function scope by adding the word `global` before the variable.

```php
 $price = "🍔";
 function myFunc()
 {
     $price = "🍟";
     global $price;
    echo $price;
 }

 myFunc() // "🍔"
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

## Include and require in PHP

It's similer to `import` in JavaScript
when you want to include a file inside another you can inherit all the variable and functions that is pblically avaialble.

the diffrence between `require` and `include` is that:
`require` will stop the code execution if the file does not exist
`include` will keep execute the code even if there was errors on the way

you can write it like `require("filename.php");` or `require "filename.php";` both are accepted.

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

# PHP internal functions

`isset();` will check if certain vart has been set.

`empty();` check if the inpyut is empty exp: `empty($_POST["email"])`

# PHP special arrays

`$_POST` more secure way to get form information

`$_GET` less secure cause you can get the input data in the url
you can show the data by writing :
`print_r($_POST);`

# XSS Attacks

Whenever you get data from users you should check for special charachters in case they send some millisious data. by wraping the `$_GET()` with `htmlspecialchars();`

```php
htmlspecialchars($_POST['email']);
```

## PHP filter functions

## filter_has_var()

filter_has_var — Checks if variable of specified type exists

Returns TRUE on success or FALSE on failure.

## filter_id()

filter_id — Returns the filter ID belonging to a named filter

## filter_var()

filter_var — Filters a variable with a specified filter

## filter_input_array()

filter_input_array — Gets external variables and optionally filters them

## filter_input()

filter_input — Gets a specific external variable by name and optionally filters it

```php
filter_var($email, FILTER_VALIDATE_EMAIL); // validate email
```

## Validate filters

### `FILTER_VALIDATE_BOOLEAN`

Returns TRUE for "1", "true", "on" and "yes". Returns FALSE otherwise.

If FILTER_NULL_ON_FAILURE is set, FALSE is returned only for "0", "false", "off", "no", and "", and NULL is returned for all non-boolean values.

### `FILTER_VALIDATE_DOMAIN`

Validates whether the domain name label lengths are valid.

Validates domain names against RFC 1034, RFC 1035, RFC 952, RFC 1123, RFC 2732, RFC 2181, and RFC 1123. Optional flag FILTER_FLAG_HOSTNAME adds ability to specifically validate hostnames (they must start with an alphanumeric character and contain only alphanumerics or hyphens).

### `FILTER_VALIDATE_EMAIL`

Validates whether the value is a valid e-mail address.

In general, this validates e-mail addresses against the syntax in RFC 822, with the exceptions that comments and whitespace folding and dotless domain names are not supported.

### `FILTER_VALIDATE_FLOAT`

Validates value as float, optionally from the specified range, and converts to float on success.

### `FILTER_VALIDATE_INT`

Validates value as integer, optionally from the specified range, and converts to int on success.

### `FILTER_VALIDATE_IP`

Validates value as IP address, optionally only IPv4 or IPv6 or not from private or reserved ranges.

### `FILTER_VALIDATE_MAC`

Validates value as MAC address.

### `FILTER_VALIDATE_REGEXP`

Validates value against regexp, a Perl-compatible regular expression.

### `FILTER_VALIDATE_URL`

Validates value as URL (according to » http://www.faqs.org/rfcs/rfc2396), optionally with required components. Beware a valid URL may not specify the HTTP protocol http:// so further validation may be required to determine the URL uses an expected protocol, e.g. ssh:// or mailto:. Note that the function will only find ASCII URLs to be valid; internationalized domain names (containing non-ASCII characters) will fail.

# Variable handling functions

## [isset()](https://www.php.net/manual/en/function.isset.php)

Determine if a variable is declared and is different than NULL

## [boolval()](https://www.php.net/manual/en/function.boolval.php)

To anyone like me who came here looking for a way to turn any value into a 0/1 that will fit into a MySQL boolean (tinyint) field:

```php
<?php
$tinyint = (int) filter_var($valToCheck, FILTER_VALIDATE_BOOLEAN);
?>
```

tinyint will be 0 (zero) for values like string "false", boolean false, int 0

tinyint will be 1 for values like string "true", boolean true, int 1

Useful if you are accepting data that might be from a language like Javascript that sends string "false" for a boolean false.

## fetch the data from mysql

[follow these steps here](https://www.youtube.com/watch?v=WGuyxGJW9hs&list=PL4cUxeGkcC9gksOX3Kd9KPo-O68ncT05o&index=26&ab_channel=TheNetNinja)

## Usefull dunctions in PHP

```php
// first char to upper case
ucwords($name); // hello world => Hello World

```
````

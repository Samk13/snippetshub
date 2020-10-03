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

# [full list of string functions](https://www.php.net/manual/en/ref.strings.php)

# Working with numbers

# [full list of Math functions](https://www.php.net/manual/en/ref.math.php)

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

# Getting user input

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

# Arrays in PHP:

We creat an array like this :

```php
$array_of_freinds = array("sam","samFreind1","samFreind3","samFreind4",);

```

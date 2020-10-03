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

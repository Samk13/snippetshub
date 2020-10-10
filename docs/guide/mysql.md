# MYSQL

## MYSQL 101

## enter MYSQL from terminal

```
mysql -u root -p

// -u => user
// -p => password

mysql>> showdatabases;

// important to close every line with ;

```

## Create new data base

`create database my_database_name;`

## slecte one database to work with

`use my_database_name;`

## see the tables we have

`show tables;`

## create new table

you should specify the type of each cloumn to make it work like so:
`create table my_table_name (my_column text, my_column_2 boolean);`

but this could result that you could have a null fields like so:

```
mysql> describe todos;
                              👇
+-------------+------------+------+-----+---------+-------+
| Field       | Type       | Null | Key | Default | Extra |
+-------------+------------+------+-----+---------+-------+
| description | text       | YES  |     | NULL    |       |
| completed   | tinyint(1) | YES  |     | NULL    |       |
+-------------+------------+------+-----+---------+-------+
                              👆
```

to prevent this you should add this to the field:

`mysql> create table todos (description text NOT NULL, completed boolean NOT NULL);`

Meaning that if you don't provide me with a value I will throw an error in your face.

```
mysql> create table todos (description text NOT NULL, completed boolean NOT NULL );
Query OK, 0 rows affected (0.02 sec)

mysql> describe todos;
                              👇
+-------------+------------+------+-----+---------+-------+
| Field       | Type       | Null | Key | Default | Extra |
+-------------+------------+------+-----+---------+-------+
| description | text       | NO   |     | NULL    |       |
| completed   | tinyint(1) | NO   |     | NULL    |       |
+-------------+------------+------+-----+---------+-------+
                              👆
2 rows in set (0.00 sec)

```

One more important thing is every row should have an ID and Id have a special type:
autoincrement, so every time we add a new row it will auto increment the value
so one more time we can update our create new table to be like :

```
create table todos (id integer PRIMARY KEY AUTO_INCREMENT,description text NOT NULL, completed boolean NOT NULL );
```

`PRIMARY KEY` means that you make sure that every row has unik value with column id in this case,
`AUTO_INCREMENT` It auto increment value

```


mysql> describe todos;
                                    👇                   👇
+-------------+------------+------+-----+---------+----------------+
| Field       | Type       | Null | Key | Default | Extra          |
+-------------+------------+------+-----+---------+----------------+
| id          | int(11)    | NO   | PRI | NULL    | auto_increment |
| description | text       | NO   |     | NULL    |                |
| completed   | tinyint(1) | NO   |     | NULL    |                |
+-------------+------------+------+-----+---------+----------------+
3 rows in set (0.00 sec)
```

## show tables columns

`describe my_table_name;`

## delete one table

`drope table my_table_name;`

## insert new row into table

`insert into my_table_name (description, completed) values('adding data to my cell', false);`

you write wish feilds you are tagetting,
and then you put the values like so:

```
                  fields  1👇            2 👇         values 1  👇                  2👇
mysql> insert into todos (description, completed) values('adding data to my cell', false);
```

## Show the table row

`select * from my_table_name`

- => means everything

## selecte specefic row :

`select * from todos where id=2;`

## Connect to your DB

Use the built-in function `PDO();`

```php
<?php

try {
    $db = new PDO('mysql:host=127.0.0.1;dbname=mytodo','root', '');
} catch (PDOException $e) {
    die($e->getMessage());
}

$statment = $db->prepare('select * from todos');

$statment->execute();

// PDO::FETCH_OBJ to fix the double data comming from DB

$result = $statment->fetchAll(PDO::FETCH_OBJ);

// fetchall() will not be the best optin if you have 10000000 rows !

```

A more elegent way writing it would be like :

```php
//Connections.php

<?php

class Connection
<?php

class Connection
{
    public static function make($config)
    {
        try {
            return new PDO(
                $config['connection'].';dbname='.$config['name'],
                $config['username'],
                $config['password'],
                $config['options'],
            );

        } catch (PDOException $e) {
            die($e->getMessage());
        }
    }
}
```

it's good idea to keep your config in seperate place so your future changes will be in one place only

```php
<?php
// config.php

return [
    'database' =>[
        'name' => 'mytodo',
        'username' => 'root',
        'password' => '',
        'connection' => 'mysql:host=127.0.0.1',
        'options' => [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING
        ],
    ]
];
```

## Building query

```php
// QuetBuilder.php
<?php

class QueryBuilder
{
    protected $pdo;

    public function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    public function selectAll($table, $intoClass)
    {
        $statment = $this->pdo->prepare("select * from ($table)");
        $statment->execute();

        return $statment->fetchAll(PDO::FETCH_CLASS, $intoClass);
    }
}
```

Bootstrap it :

```php
// bootstrap.php
return new QueryBuilder(
    Connection::make()
);
```

implement it

```php
// init
<?php
$query = require "bootstrap.php";
require "classes.php";

$tasks = $query->selectAll('todos', 'Task');
```

```php
// Task classe
<?php
class Task
{
    protected $description;
    protected $completed;

    public function __construct()
    {
        // automatically triggered
        $this->description ;
        $this->completed;

    }

    public function complete( )
    {
        $this->completed = true;
    }

    function get_description ()
    {
        return $this->description;
    }

    function get_completed ()
    {
        return $this->completed;
    }
    function set_completed ()
    {
        return $this->completed = true;
    }

}
```

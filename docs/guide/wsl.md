# WSL and linux on windows

[good explanation here](https://www.youtube.com/watch?v=A0eqZujVfYU&ab_channel=ScottHanselman)

## Update all packages:

```zsh
sudo apt update && sudo apt dist-upgrade
```

## update everything

```sh
sudo apt-get update && sudo apt-get upgrade && sudo apt-get dist-upgrade
```

`$ sudo apt-get update`

## What is Apt-get upgrade

To install the latest versions of all the previously installed packages on your system, apt-get upgrade is used. This command only upgrades the packages which have a new release available as stated in the sources.list file in the “/etc/apt” folder. It does not attempt to install a new package or remove any installed package on its own.

To upgrade or install the latest versions, run the following command as sudo as an only privilege user can check for and install updates on the Linux system:

`$ sudo apt-get upgrade`
To upgrade a specific package, command is as follows:
`$ sudo apt-get upgrade <package_name>`

## What is Apt-get dist-upgrade

Similar to apt-get upgrade command, the apt-get dist-upgrade also upgrades the packages. In addition to this, it also handles changing dependencies with the latest versions of the package. It intelligently resolves the conflict among package dependencies and tries to upgrade the most significant packages at the expense of less significant ones, if required. Unlike apt-get upgrade command, the apt-get dist-upgrade is proactive and it installs new packages or removes existing ones on its own in order to complete the upgrade.
In order to upgrade the packages, run the dist-upgrade command with sudo privileges:

`$ sudo apt-get dist-upgrade`

## Stop WSL

To terminate a Running WSL Linux Distro in Windows 10,
Open a new command prompt.
Type the following command:

```zsh
wsl --terminate <DistributionName>
```

. Alternatively, you can use this shorten syntax:

```zsh
wsl -t <DistributionName>
```

The WSL Distro is now terminated.

## List all linux distributions you have on your machine

`wsl --list`

## Switch between the linux dists

`wsl -d ubuntu`

you can install all packages needed through brew like in MAC ! 😎💃
[brew install linux](https://formulae.brew.sh/formula-linux/)

## show wsl running

```sh
wsl --list --running
```

## terminate wsl running process

```sh
#            👇 replace it wih the running distro name
--terminate Ubuntu
```

following these steps to make MySQL work: inspired by this repo

1- Upgrade the Repositories

```sh
sudo apt update
sudo apt upgrade
```

2- Install MySQL 5.7

```sh
sudo apt install mysql-server
```

3- Start service

```sh
sudo service mysql start
```

4- Setup new user account and grant privileges

sudo mysql
5- Check the authentication method/plugin that all your MySQL accounts are currently using

```sh
SELECT user,authentication_string,plugin,host FROM mysql.user;
```

6- Create a new user within the shell and grant privileges

```sh
CREATE USER 'YOUR*USER_NAME_HERE'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD'; GRANT ALL PRIVILEGES ON * . \_ TO 'newuser'@'localhost'; FLUSH PRIVILEGES;
```

7- Exit shell and return with passward 'password':

```sh
mysql -u yourusername -p
```

your db password

```sh
mysql> CREATE DATABASE your_db_name;
```

make sure you created by running :

```sh
mysql> database list; and exit mysql
```

8- make sure your password and user in your .env file are matching with your DB

9- Finally run php artisan migrate

should now migrate successfully.

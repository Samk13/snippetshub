# WSL and linux on windows

[good explanation here](https://www.youtube.com/watch?v=A0eqZujVfYU&ab_channel=ScottHanselman)

## Update all packages:

```zsh
sudo apt update && sudo apt dist-upgrade
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

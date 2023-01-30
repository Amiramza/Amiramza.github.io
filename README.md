# Amiramza.github.io
# Introduction to Vagrant 

Vagrant is a tool that helps developers to create and configure virtual development environments. It works by using a simple, easy-to-read configuration file, called a `Vagrantfile`, which describes the kind of machine you want to run, as well as how to configure it. This makes it incredibly easy to set up and maintain a consistent environment across your entire development team.

## Prerequisites

- VirtualBox or another virtualization provider
- Vagrant installed on your local machine

## Installation
### VirtualBox Install:
- `Window and Mac` Users should directly Download the executable from https://www.virtualbox.org/wiki/Download_Old_Builds_6_1 and install VirtualBox-6.1 (the latest version is vitualbox-7 but that is not supported by vagrant as a provider) while `Linux Users` either follow the documentation at https://www.virtualbox.org/wiki/Linux_Downloads or follow these steps

 - In the following command replace  `<mydist>` with the output of:
 ```bash 
 lsb_release -sc 
 ```
 ``` bash
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/oracle-virtualbox-2016.gpg] https://download.virtualbox.org/virtualbox/debian $(lsb_release -sc) contrib" | sudo tee /etc/apt/sources.list.d/virtualbox.list
```

 - Then add the virtualbox keys to your system with the following command.
 ```bash
 wget -O- https://www.virtualbox.org/download/oracle_vbox_2016.asc | sudo gpg --dearmor --yes --output /usr/share/keyrings/oracle-virtualbox-2016.gpg
 ```
- The key fingerprints are
- `` 
B9F8 D658 297A F3EF C18D  5CDF A2F6 83C5 2980 AECF
Oracle Corporation (VirtualBox archive signing key) <info@virtualbox.org>
``

 - then install virtualbox-6.1 using:
 ```bash 
 sudo apt-get update
 sudo apt-get install virtualbox-6.1
```
###              Vagrant Installation

* Either follow the documentation section for your distro at https://developer.hashicorp.com/vagrant/downloads or follow the following steps [Ubuntu/Debian]

```bash 
wget -O- https://apt.releases.hashicorp.com/gpg | gpg --dearmor | sudo tee /usr/share/keyrings/hashicorp-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/hashicorp-archive-keyring.gpg] https://apt.releases.hashicorp.com $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hashicorp.list
sudo apt update && sudo apt install vagrant
```
* In case of any errors regarding virtualization on your system such as `kvm_intel` or `VT-x` follow the installation section of this documentation. 
 https://developer.hashicorp.com/vagrant/docs/installation

## Vagrant providers

## Creating Your First Vagrant Environment

1. Open a terminal or command prompt window
2. Run `vagrant init hashicorp/bionic64` to create a new Vagrant environment using the Ubuntu 18.04 LTS (Bionic Beaver) base box.
3. Run `vagrant up` to start the virtual machine
4. Run `vagrant ssh` to log into the virtual machine
5. To stop the virtual machine, run `vagrant halt`
6. To destroy the virtual machine, run `vagrant destroy`

## Configuring Your Vagrant Environment

The `Vagrantfile` is the key to configuring your Vagrant environment. Here are some examples of things you can configure in your `Vagrantfile`:


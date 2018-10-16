# Creating node.js instance


https://github.com/gc3-uzh-ch/elasticluster/issues/425

https://pypi.python.org/pypi/python-openstackclient

`pip install 'python-novaclient==7.0.0'`

## Colabo.space instance

- Project > Compute > Istances > Launch Instance
  - Details
    - Instance Name: `colabo.space-1`
    - Availability Zone: `osl-default-1`
  - Source
    - Select Boot Source: Image
    - Allocated: `GOLD Ubuntu 17.10`
  - Flavor: `m1.large`
  - Networks: `dualStack`
  - Security Groups
    - add group `ICMP-SSH-HTTP-security-group`
  - Key Pair
    - add your key pair (if it is the only one it will be injected already)
    - you cannot add more than one at this stage
  - **`Launch Instance`**

Test if the *orchestration* machine is alive: `ping <F_IP>`

Try to login to your newly started machine:

- `ssh -i ~/.ssh/<key-name> ubuntu@<F_IP>`
- NOTE: you will not need pass since you use private key instead
- to do something difficult use `sudo command` :), ubuntu is a default user and it is sudoer

## Installing

```sh
sudo apt-get update
sudo apt-get install joe
sudo apt-get install screen
sudo apt-get install unzip
sudo apt-get install git
sudo apt-get install cowsay
sudo apt-get install fortune
```

### Profile

```sh
joe ~/.bashrc
# add: fortune | cowsay -f tux to ~/.bashrc
source ~/.bashrc
sudo apt-get install gcc
```

### Python related

```sh
sudo apt-get install python-pip
pip install flask
pip install --upgrade pip
```

### Accounts

Please use the ansible playbook `playbooks/users.yml`

### Web Folders

Please use the ansible playbook `playbooks/init.yml`

## Node.js

+ [How To Install Node.js on Ubuntu 16.04](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)

**<u>NOTE</u>**: There are different procedures for different major versions

To get the most recent version of Node.js is to add a PPA (**P**ersonal **P**ackage **A**rchive), which is maintained by [NodeSource](https://nodesource.com/).

```sh
# install Node.js 8.x LTS Carbon and npm
sudo curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
# for the 9.x version
# sudo curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs
nodejs -v
npm -v
# Optional: install build tools
# You may also need development tools to build native addons:
sudo apt-get install gcc g++ make
gcc -v
# To install the Yarn package manager, run:
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
yarn -v
```

### Upgrade

+ [How can I update my nodeJS to the latest version?](https://askubuntu.com/questions/426750/how-can-i-update-my-nodejs-to-the-latest-version)
+ [updating nodejs on ubuntu 16.04](https://stackoverflow.com/questions/41195952/updating-nodejs-on-ubuntu-16-04)
+ https://www.npmjs.com/package/n

We will use **`n`** module from `npm` in order to upgrade node:

```sh
sudo npm cache clean -f
sudo npm install -g n
# installing particular version (6.11.4)
sudo n 6.11.4
# installed as node, not nodejs, under /usr/local/bin/node, not /usr/bin/nodejs
# it is possible to install it in a speciffic folder
```

## Web server

### Apache

https://help.ubuntu.com/lts/serverguide/httpd.html

NOTE: nginx is listening on 80 as well and acting as web server as well. We need to investigate and see if it already fulfills all our needs, since we are less and less relay on heavy dependence on web server.

```sh
sudo apt install apache2

# restart/status/stop
sudo service apache2 stop
sudo service apache2 status
sudo service apache2 restart
```

enabling/disabling

```sh
sudo update-rc.d apache2 disable
sudo update-rc.d apache2 enable
```

### nginx

https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04

```sh
sudo apt install nginx
sudo ufw app list
sudo ufw allow 'Nginx HTTP'
```

#### Subdomain

```sh
sudo touch /etc/nginx/sites-available/playsound
sudo joe /etc/nginx/sites-available/playsound

# <START>
server { 
  listen 80; 
  listen [::]:80; 

  server_name playsound.colabo.space;

  root /var/www/playsound;
  index index.html;
  autoindex on;

  location / {
    try_files $uri $uri/ /index.html;
  }
}
# <END>

touch /var/www/playsound/index.html
joe /var/www/playsound/index.html

# check the syntax
sudo rm /etc/nginx/sites-available/playsound~
sudo ln -s /etc/nginx/sites-available/playsound /etc/nginx/sites-enabled/playsound
sudo nginx -t -c /etc/nginx/nginx.conf

sudo service nginx reload
```

# Code

## General

```sh
sudo npm install -g typescript
sudo npm install -g @angular/cli
```

## ColaboSpace Code

```sh
cd /var/repos/
# colabo
git clone https://github.com/Cha-OS/colabo
# install colabo tools
cd colabo
cd src/tools
# set sudo for offer in colabo.config.js
yarn
sudo npm run link
# install isomorphic puzzles
cd ../isomorphic/
# sudo chown -R $USER:$(id -gn $USER) /home/mprinc/.config
# set sudo for offer in colabo.config.js
yarn
# install backend puzzles
cd ../backend
# set sudo for offer in colabo.config.js
yarn
# install frontend puzzles
cd ../frontend/
# set sudo for offer in colabo.config.js
yarn
```

## AudioCommon Code

```sh
cd /var/repos/
# audio-commons
git clone https://github.com/mprinc/audio-commons-js
cd audio-commons-js
# set sudo for offer in colabo.config.js
yarn
```

## PlaySound Code

```sh
cd /var/repos/
# or: cd <path_to_play_sound_folder>
git clone https://github.com/Cha-OS/PlaySound-Colabo.Space/
cd PlaySound-Colabo.Space
git checkout --track origin/colabo.space

cd src/backend/apps/play-sound/
# set sudo for offer in colabo.config.js
yarn
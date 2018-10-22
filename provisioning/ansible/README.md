# Testing

Testing connections:

```sh
ansible all -i hosts.yaml -u ansible --private-key ~/.ssh/orchestration-iaas-no.pem -m ping
```

+ **--check**: run in **dry mode** (just to see what it can do)

```sh
ansible --check all -i hosts.yaml -u ansible --private-key ~/.ssh/orchestration-iaas-no.pem -m ping
```

# Structure

+ playbooks are under the `playbooks` folder
+ templates are under the `templates` folder
+ variables are under the `variables` folder
    + `hosts.yaml` is a special file containing all hosts organized in groups. It is inventory file
    + `empty.json` is a special safe fall-drop file when we are iterating over different files to avoid error

# Playbooks

Each playbook comes with associated variables in the same-name varables file stored in the `variables` folder.

Each playbook can in addition have 

## Users

This playbook creates all users in the cluster, sets up their privileges, credentials, sets private keys, etc.

```sh
# real
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key ~/.ssh/orchestration-iaas-no.pem playbooks/users.yml

# just checking
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key --check ~/.ssh/orchestration-iaas-no.pem playbooks/users.yml

# Evaluate
ls -al /home
cat /etc/sudoers.d/95-no-pass-users
```

## init

This playbook setup initial server state

+ creates all folders

```sh
# real
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key ~/.ssh/orchestration-iaas-no.pem playbooks/init.yml

# just checking
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key --check ~/.ssh/orchestration-iaas-no.pem playbooks/init.yml

# evaluate
ls -al /var/www
ls -al /var/services
ls -al /var/repos
```

## apps

This playbook installs apps via `apt`

```sh
# real
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key ~/.ssh/orchestration-iaas-no.pem playbooks/apts.yml

# just checking
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key --check ~/.ssh/orchestration-iaas-no.pem playbooks/apts.yml

# evaluate
gcc --version
git --version
python --version
python3 --version
```

## nginx

This playbook installs nginx and configures all hosts

```sh
# real
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key ~/.ssh/orchestration-iaas-no.pem playbooks/nginx.yml

# just checking
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key --check ~/.ssh/orchestration-iaas-no.pem playbooks/nginx.yml

# evaluate
nginx -v
ls -al /var/www/
ls -al /var/www/playsound
ls -al /etc/nginx/sites-available/
cat /etc/nginx/sites-available/playsound
ls -al /etc/nginx/sites-enabled/
nginx -t -c /etc/nginx/nginx.conf
sudo systemctl status nginx
```

## node

This playbook installs node, build tools and yarn

```sh
# real
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key ~/.ssh/orchestration-iaas-no.pem playbooks/node.yml

# just checking
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key --check ~/.ssh/orchestration-iaas-no.pem playbooks/node.yml

# evaluate
nodejs -v
npm -v
yarn -v
gcc --version
g++ --version
make --version
```

## services

This playbook creates, registers and starts all necessary system services (with SystemD)

```sh
# real
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key ~/.ssh/orchestration-iaas-no.pem playbooks/services.yml

# just checking
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key --check ~/.ssh/orchestration-iaas-no.pem playbooks/services.yml
# evaluate
ls -al /var/services
cat /var/services/b-playsound.service
ls -al /etc/systemd/system/
sudo systemctl status b-playsound
```

## gits

This playbook clones git repos to the remote hosts and sets the folders and files privileges

```sh
# real
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key ~/.ssh/orchestration-iaas-no.pem playbooks/gits.yml

# just checking
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key --check ~/.ssh/orchestration-iaas-no.pem playbooks/gits.yml

# evaluate
ls -al /var/repos/PlaySound-Colabo.Space
# NOTE: check owner, group, and file and folder mode
```

## builds

This playbook builds projects localy

```sh
# real
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key ~/.ssh/orchestration-iaas-no.pem playbooks/builds.yml

# just checking
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key --check ~/.ssh/orchestration-iaas-no.pem playbooks/builds.yml

# evaluate
# NOTE: on local machine
ls -al ./playbooks/../../../src/frontend/apps/PlaySound/dist/play-sound
```

## transfers

This playbook transfers local files/folders to remote hosts

```sh
# real
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key ~/.ssh/orchestration-iaas-no.pem playbooks/transfers.yml

# just checking
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key --check ~/.ssh/orchestration-iaas-no.pem playbooks/transfers.yml

# evaluate
ls -al /var/www/playsound/
ls -al /var/www/playsound/config/global.js
# NOTE: should have server (no localhost) `serverUrl`
cat /var/www/playsound/config/global.js
```

## yarns

This playbook installs npm packages with `yarn`

```sh
# real
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key ~/.ssh/orchestration-iaas-no.pem playbooks/yarns.yml

# just checking
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key --check ~/.ssh/orchestration-iaas-no.pem playbooks/yarns.yml

# evaluate
tsc -v
ng --version
colabo
ls -al /var/repos/PlaySound-Colabo.Space/src/backend/apps/play-sound/node_modules
ls -al /var/repos/PlaySound-Colabo.Space/src/backend/apps/play-sound/node_modules/\@audio-commons/
ls -al /var/repos/PlaySound-Colabo.Space/src/backend/apps/play-sound/node_modules/\@colabo-*/
```

# Final

## Backend

```sh
# from local machine
curl -v -H "Content-Type: application/json" -X GET http://127.0.0.1:8005/search-sounds/bird
# from local machine
curl -v -H "Content-Type: application/json" -X GET http://playsound.colabo.space:8005/search-sounds/bird
# from remote machine
curl -v -H "Content-Type: application/json" -X GET http://playsound.colabo.space/api/search-sounds/bird
```

Or navigate browser to: http://playsound.colabo.space/api/search-sounds/bird

## Frontend

Navigate browser to http://playsound.colabo.space
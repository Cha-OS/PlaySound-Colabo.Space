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
```

## init

This playbook setup initial server state

+ creates all folders

```sh
# real
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key ~/.ssh/orchestration-iaas-no.pem playbooks/init.yml

# just checking
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key --check ~/.ssh/orchestration-iaas-no.pem playbooks/init.yml
```

## services

This playbook creates, registers and starts all necessary system services (with SystemD)

```sh
# real
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key ~/.ssh/orchestration-iaas-no.pem playbooks/services.yml

# just checking
ansible-playbook -i variables/hosts.yaml -e 'ansible_ssh_user=ubuntu' --private-key --check ~/.ssh/orchestration-iaas-no.pem playbooks/services.yml
```


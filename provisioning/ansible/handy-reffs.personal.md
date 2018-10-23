This is just a general form of refferences.

You can create your and name it as `handy-reffs.personal.md` because `.personal` is added to the ignore list.

# General

**NOTE**: You should be on IFI network or access through VPN

https://dashboard.uh-iaas.no/dashboard/auth/login/

https://dashboard.uh-iaas.no/dashboard/project/

On the top is important to select **proper project**: `uio-ifi-colabo` and that the **region** is `osl`

# ac-orchestrator

System info:
```txt
DISTRIB_ID=Ubuntu
DISTRIB_RELEASE=16.04
DISTRIB_CODENAME=xenial
DISTRIB_DESCRIPTION="Ubuntu 16.04.4 LTS"
Linux orchestrator 4.4.0-112-generic #135-Ubuntu SMP Fri Jan 19 11:48:36 UTC 2018 x86_64 x86_64 x86_64 GNU/Linux
```

You can add in your personal file a real values

```sh
ping 158.39.75.31
ssh -i ~/.ssh/sasha-iaas-no.pem ubuntu@158.39.75.31
ssh -i ~/.ssh/sasha-iaas-no.pem mprinc@158.39.75.31
ssh -i ~/.ssh/orchestration-iaas-no.pem orchestrator@158.39.75.31
ssh -i ~/.ssh/mirko-iaas-no.pem mirko@158.39.75.31
curl -i http://localhost:5000/
curl -i http://158.39.75.31:80/
```

`http://158.39.75.31`

# ac-instance-1

```sh
ping 158.37.63.40

ssh -i ~/.ssh/sasha-iaas-no.pem mprinc@158.37.63.40
ssh -i ~/.ssh/orchestration-iaas-no.pem ubuntu@158.37.63.40
ssh -i ~/.ssh/orchestration-iaas-no.pem orchestrator@158.37.63.40
ssh -i ~/.ssh/mirko-iaas-no.pem mirko@158.37.63.40

curl -i http://localhost:5000/
curl -i http://158.37.63.40:80/
```

`http://158.37.63.40`


# ac-service-1

```sh
ping 158.37.63.53

ssh -i ~/.ssh/sasha-iaas-no.pem ubuntu@158.37.63.53
ssh -i ~/.ssh/orchestration-iaas-no.pem orchestrator@158.37.63.53
ssh -i ~/.ssh/sasha-iaas-no.pem mprinc@158.37.63.53
ssh -i ~/.ssh/mirko-iaas-no.pem mirko@158.37.63.53
ssh -i ~/.ssh/lazar-iaas-no.pem laza@158.37.63.53

curl -i http://localhost:5000/
curl -i http://158.37.63.53:80/
```

http://158.37.63.53
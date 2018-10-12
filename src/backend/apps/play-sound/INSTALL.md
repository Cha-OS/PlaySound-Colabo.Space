# 	INSTALL

***NOTE***: Before installing backend you need to install Colabo.Space tools. Please read how to install them in the [tools/README.md](../tools/README.md) document.

This is  the backend part of the ColaboFlow-System Demo app. It shows basics of ColaboFlow system interaction.

## Installing

```sh
cd colabo
cd src/backend
# NOTE: some of the packages will be installed as tarbales from the colabo.space website
# - http://colabo.space/downloads/express-resource-1.0.0.tgz
#   - it is the `express-resource` package on steroids
# - http://colabo.space/downloads/deep-assign-2.0.0.tgz
yarn

# we can also run:
npm run clean_full
# this cleans ALL build outputs, so running `yarn` afterwards 
# checks if everything is working properly
```

```
cd demos/colaboflow-system
yarn
```

***That is all***. Backend of the ColaboFlow-System Demo should be installed now. 

The following section ist describing the process under hood.

# Test Run

```
cd /demos/colaboflow-system
npm start
```

```sh
http://localhost:8001/kmaps/all.json
http://localhost:8001/knodes/one/default/59d3d92d73a8d7b33b00970b
http://localhost:8001/knodes/one/default/59d3b3f90d1f92de005c858e
```

```sh
https://fv.colabo.space/api/kmaps/all.json
https://fv.colabo.space/api/knodes/one/default/59d3d92d73a8d7b33b00970b
https://fv.colabo.space/api/knodes/one/default/59d3b3f90d1f92de005c858e
```
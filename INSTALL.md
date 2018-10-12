# Environment

## Yarn

Yarn is a replacement for npm tools. It is faster, caching, reducing space, bandwith and time. We use it here, but you can use npm instead if you insist :)

```sh
brew install yarn --without-node
```

## Typescript

```sh
# typescript compiler should be global because we use it in angular, backend, etc
# later you run it as a `tsc` command
sudo npm install -g typescript
```

## CLI

Angular CLI is a main tool for developing angular applications

Links:
https://cli.angular.io/
https://github.com/angular/angular-cli/wiki

```sh
npm install -g @angular/cli
```

# Code

## Colabo.Space Code

```sh
# install
cd ..
git clone https://github.com/Cha-OS/colabo
cd colabo
git checkout --track origin/cf-ng5
cd src/tools
yarn
npm run link

# install backend puzzles
cd ../backend
yarn

# install isomorphic puzzles
cd ../isomorphic/
yarn

# install frontend puzzles
cd ../frontend/
yarn
```

## AudioCommon Code

```sh
cd ../..
git clone https://github.com/mprinc/audio-commons-js
cd audio-commons-js
yarn
```

## PlaySound Code

```
git clone https://github.com/Cha-OS/PlaySound-Colabo.Space/
git checkout --track origin/colabo.space
cd PlaySound-Colabo.Space
```


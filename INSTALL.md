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
# you should replace <path_to_play_sound_folder> with the folder where you want to develop playsound
cd <path_to_play_sound_folder>
git clone https://github.com/Cha-OS/colabo

# install colabo tools
cd colabo
cd src/tools
yarn
# or: npm install
npm run link

# install isomorphic puzzles
cd ../isomorphic/
yarn
# or: npm install

# install backend puzzles
cd ../backend
yarn
# or: npm install

# install frontend puzzles
cd ../frontend/
yarn
# or: npm install
```

## AudioCommon Code

```sh

cd ../..
# or: cd <path_to_play_sound_folder>
git clone https://github.com/mprinc/audio-commons-js
cd audio-commons-js
yarn
# or: npm install
```

## PlaySound Code

```sh
cd ..
# or: cd <path_to_play_sound_folder>
git clone https://github.com/Cha-OS/PlaySound-Colabo.Space/
cd PlaySound-Colabo.Space
git checkout --track origin/colabo.space

cd src/backend/apps/play-sound/
yarn
# or: npm install
```

# Test

```sh

# backend
cd <path_to_play_sound_folder>/src/backend/apps/play-sound/
npm start

# test in other tab
curl -v -H "Content-Type: application/json" -X GET http://127.0.0.1:8005/search-sounds/bird

158.37.63.40
# frontend
cd ../../../frontend/apps/PlaySound/
yarn
ng serve -o
```

# Build for production

```
cd src/frontend/apps/PlaySound/
ng build --prod
```
# Code

## Cloning

```sh
# NOTE: you should replace <path_to_the_play_sound_folder> 
# with the folder path where you want to develop playsound
cd <path_to_the_play_sound_folder>

# cloning
git clone https://github.com/Cha-OS/PlaySound-Colabo.Space/
git clone https://github.com/Cha-OS/colabo
git clone https://github.com/mprinc/audio-commons-js
```

## Colabo install

```sh
# install/provide/offer isomorphic colabo-puzzles
cd ../isomorphic/
yarn

# install/provide/offer backend colabo-puzzles
cd ../backend
yarn

# install/provide/offer frontend colabo-puzzles
cd ../frontend/
yarn
```

## AudioCommon Code

```sh
cd <path_to_the_play_sound_folder>
cd audio-commons-js
yarn
```

## PlaySound Code

### Backend

```sh
cd <path_to_the_play_sound_folder>
cd PlaySound-Colabo.Space
# no need anymore as it is as the `colabo.space` branch
# is merged to the master branch
# git checkout --track origin/colabo.space

cd src/backend/apps/play-sound/
cp -f package-dev-full.json package.json
yarn
```

#### Test

```sh
# backend
cd <path_to_the_play_sound_folder>/PlaySound-Colabo.Space/src/backend/apps/play-sound/
npm start

# then test in other terminal's tab
# you should get search results back, and backend should not crash ;)
curl -v -H "Content-Type: application/json" -X GET http://127.0.0.1:8005/search-sounds/bird
```

### Frontend

Open third terminal's or continue in the 2nd tab:

```sh
cd <path_to_the_play_sound_folder>/PlaySound-Colabo.Space/src/frontend/apps/PlaySound/
# set package-dev-full.json as package.json
cp -f package-dev-full.json package.json
yarn
# compile and provide the frontend available to the broweser
# `-o` will also open the site in the default browser
ng serve -o
```

# Build for production

## Backend

TBD (To Be Done)

## Frontend

TBD (To Be Done)

If you are building for the production you need to build frontend in a more efficient way:

```
cd <path_to_the_play_sound_folder>/PlaySound-Colabo.Space/src/frontend/apps/PlaySound/
ng build --prod
```
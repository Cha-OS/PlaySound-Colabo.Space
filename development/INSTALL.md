# Environment

This is a general part of installation necessary for normal angular 6+ development, and you have to do it.

We assume you already have properly installed node and npm tools.

## Yarn

Yarn is a replacement for npm tools. It is faster, caching, reducing space, bandwith and time. We use it here, but you can use npm instead if you insist :)

For OSX:

```sh
brew install yarn --without-node
```

## Typescript

This is Typescript compiler

```sh
# typescript compiler should be global because we use it in angular, backend, etc
# later you run it as a `tsc` command
sudo npm install -g typescript
```

## CLI

### Angular NG CLI

Angular CLI is a main tool for developing angular applications

Links:
https://cli.angular.io/
https://github.com/angular/angular-cli/wiki

```sh
npm install -g @angular/cli
```


### Colabo.Space CLI

Colabo tools (CLI) is a main tool for maintaining modular application consisting of colabo puzzles.

Links:
https://www.npmjs.com/package/@colabo/cli

```sh
npm install -g @colabo/cli
```

# Code

To install code, you have two modes:

+ **basic** - helps you bootstrapping, easy going. It is simple, straight forward, but you have less limited options of extending PlaySound, Here are [INSTALL-basic](INSTALL-basic.md) instructions.
+ **full** - this is for a full blown PlaySound development. You should try it after you reach limitations of the basic mode. Here are [INSTALL-full](INSTALL-full.md) instructions.
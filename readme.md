# rice-rename

CLI for scaffolding rice-rename projects.
>给当图片文件夹下所有文件重命名

### Installation
Prerequisites: Node.js (>=6.x), npm version 3+

```
$ npm install rice-rename -g
```

### Usage

```
$ rename init                  // in current directory
$ rename init [project name]   // use exists directroy named project name
```
Example:
```
$ rename init img
```

rename will run npm to install dependencies.


## Scaffolding

Using `Gulp + Webpack + Babel + BrowserSync` Scaffolding.

You can modify your project name，or modify the project detail by `npm init`.

### development

``` js
$ npm run dev
```

### build

``` js
$ npm run dist
```

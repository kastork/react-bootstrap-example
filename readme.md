# Small project to replicate an issue with react-bootstrap packaging

## Prelim

The browserify build tools need to be available as
command line tools, so install them with npm -g.

```npm install -g browserify```
```npm install -g watchify```
```npm install -g uglifyjs```

## Build

Then, after cloning this repo and cd'ing to it...

1. npm install
1. bower install

Now the scripts in `package.json` should work.

### Development build

```npm run start```

Builds the browser-bundle.js file referenced in index.html.  File changes are watched for and trigger a rebuild.  Just open the html file locally, no server required.

```npm run build``` makes a production minified version, browser-bundle.min.js.  You have to change the index.html
file manually to use the minified file in the page.


Using `npm run start`, on my machine, this works against this repository as-written.

## Problems

The build works, but the CJS 'requires' found in `index.js` for react-bootstrap do not.

For example, comment out line 6 of `index.html`.

```var Button = react('react-bootstrap/Button');```

Doing so results in an error:

```Uncaught ReferenceError: define is not defined ```

Now, comment out the line 6 and instead uncomment the example on line 10, `var Grid = require('react-bootstrap').Grid;`, you get a new error:

``` Uncaught TypeError: Cannot read property 'PropTypes' of undefined```

It seems the react-bootstrap library can't find React.


These are the two documented ways to bring ReactBootstrap components into an app using node's commonjs system, and neither one seems to work.


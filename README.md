# incode website, w/ 11ty

This is the website of incode.

## Development

Clone this repo, `cd` in the cloned directory and install the required dependencies with

```sh
$ npm install
```

The project uses [eleventy](https://www.11ty.dev/) to build the website. You can start the development mode with

```sh
$ npm start  
```
or use
```sh
$ netlify dev --no-open
```
then choose
```sh
$ Eleventy-npm run serve:eleventy
```

Navigate to http://localhost:8080 to get the website preview.

## Build

You can build the website with

```sh
$ npm run build
```

The command generates the build assets in the `/dist` directory.

## Note

Parcel is [configured](/package.json#L6) to transpile the code to support old browsers. Refer to the official [documentation](https://parceljs.org/getting-started/webapp/#declaring-browser-targets) for further details.

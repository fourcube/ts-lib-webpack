# typescript library boilerplate

Provides a simple starter project for a UMD library that is compiled from typescript via webpack.

## Build

`npm run build`

## Development

Launch a `webpack-dev-server`. Static content is served from `./dist` and `./static`.

```bash
$ npm start
$ open http://localhost:9000
```

## Usage of the library

### TypeScript

```ts
import * as boilerplate from 'lib-webpack-ts'

new boilerplate.Foo('.app');
```

### JavaScript

```ts
import * as boilerplate from 'lib-webpack-ts'

new boilerplate.Foo('.app');
```


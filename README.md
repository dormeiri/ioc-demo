# IoC Demo

This represents scenario where your application is dependant on another service that is unreachable locally.

### Install

```bash
yarn
```

### Test

```bash
yarn test
```

Tests are using fake classes.

### Run with fake classes

```
USE_FAKES=true yarn start
```

Uses fake classes that mimic the unreachable service, so it will be easier to run the application locally.

### Run with real implementation

```
yarn start
```

Uses real implementation that is dependant on some service which is not reachable locally.

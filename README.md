# IoC Demo

Represents a scenario where your application is dependant on another service that is unreachable locally.

With IoC you can bind the concrete implementation to a fake class that mimics the behaviour of the unreachable service.

_This way you can easily run the app locally and write tests._

### Install

```bash
yarn
```

### Test

```bash
yarn test
```

Uses fake classes.

### Run with fake classes

```
USE_FAKES=true yarn start
```

Uses fake classes.

### Run with real implementation

```
yarn start
```

Uses real implementation. **Expected to fail locally!**

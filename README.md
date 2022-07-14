# can-bind-to-host

[![Node.js CI](https://github.com/knyzorg/can-bind-to-host/actions/workflows/node.js.yml/badge.svg)](https://github.com/knyzorg/can-bind-to-host/actions/workflows/node.js.yml)

[![Publish to NPM](https://github.com/knyzorg/can-bind-to-host/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/knyzorg/can-bind-to-host/actions/workflows/npm-publish.yml)

`can-bind-to-host` serves to definitively tell if a host (hostname or IP address) can be bound to. This is useful to determining if the given host is equivalent to `localhost`.

This package was written to replace the abandonned `is-localhost-ip` package.

> **Note:** In the context of this README, `localhost` is used as a familiar term for _the IPs (or hostnames that resolve to them) which are associated with the network interface(s) of the local system_. This includes `localhost`, `127.0.0.1`, `0.0.0.0`, `::1`, and even public domains that happen to resolve to an IP which points to your own system.

## Implementation

The implementation of `can-bind-to-host` is very short (it's less than 25 lines!). It functions by attempting to create a TCP server on the specified host (and optionally port). The underlying standard `net` module handles DNS resolution as needed.

## Usage

### API

```js
import canBindToHost from 'can-bind-to-host';

// Check if bindable to localhost:8080
canBindToHost("localhost", 8080)
    .then(bindable => bindable ? "Yes" : "No")
    .then(answer => console.log(answer))
```

[Example](/src/bin/can-bind-to-host.ts)

### CLI

You can try out the package via `npx` in CLI:

Usage:

```
npx can-bind-to-host [hostname] [port]
```

Examples:

```bash
$ npx can-bind-to-host           
0.0.0.0:0 is bindable

$ npx can-bind-to-host localhost 8080
localhost:8080 is bindable

$ npx can-bind-to-host localhost
localhost:0 is bindable
```

## Can I use `can-bind-to-host` to check if a host is localhost?

### Short Answer:

**Yes!**

### Long Answer:

In general, `can-bind-to-host` can reliably detect whether a given host points to localhost.

Unlike `is-localhost-ip` which uses regular expressions to determine if an IP is local and can mislead by unusual network configurations, this package can definitively rule out any host which is not local.

For similar reasons as above, this package can return false negatives in case of using this package under an extremely restricted user. This can be mitigated by running an additional check on `0.0.0.0` to see whether the process has the permissions to bind to localhost at all.

As long as the process uses this package can bind to a local port, it will be accurate.

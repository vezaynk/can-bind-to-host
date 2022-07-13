# can-bind-to-host

`can-bind-to-host` serves to definitively tell if a host (hostname or IP address) can be bound to. This is useful to determining if the given host is equivalent to `localhost`.

This package was written to replace the abandonned `is-localhost-ip` package.

# Localhost False Positives

Unlike `is-localhost-ip` which uses regular expressions to determine if an IP is local and can mislead by unusual network configurations, this package can definitively rule out any host which is not local.

# Localhost False Negatives

For similar reasons as above, this package can return false negatives in case of using this package under an extremely restricted user. As long as the process uses this package can bind to a local port, it will be accurate.

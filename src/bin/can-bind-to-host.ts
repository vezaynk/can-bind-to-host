#! /usr/bin/env node
import canBindToHost from "..";

const args = process.argv.slice(2);

const [host="0.0.0.0", port="0"] = args;
canBindToHost(host, +port).then(bindable => {
    if (bindable) {
        console.log(`${host}:${port} is bindable`);
        process.exit(0);
    } else {
        console.log(`${host}:${port} is not bindable`);
        process.exit(1);
    }
})
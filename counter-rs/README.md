# Counter example in Rust

[![Open in Gitpod!](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/near-examples/rust-counter)

<!-- MAGIC COMMENT: DO NOT DELETE! Everything above this line is hidden on NEAR Examples page -->

## Description

This contract implements simple counter backed by storage on blockchain.
Contract in `contract/src/lib.rs` provides methods to increment / decrement counter and get it's current value or reset.

Plus and minus buttons increase and decrease value correspondingly. When button L is toggled, a little light turns on, just for fun. RS button is for reset. LE and RE buttons to let the robot wink at you.

## To Run

Open in the Gitpod link above or clone the repository.

```bash
git clone https://github.com/near-examples/rust-counter
```

## Setup [Or skip to Login if in Gitpod](#login)

Install dependencies:

```bash
yarn
```

If you don't have `Rust` installed, complete the following 3 steps:

Install Rustup by running:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

([Taken from official installation guide](https://www.rust-lang.org/tools/install))

Configure your current shell by running:

```bash
source $HOME/.cargo/env
```

Add wasm target to your toolchain by running:

```bash
rustup target add wasm32-unknown-unknown
```

Next, make sure you have `near-cli` by running:

```bash
near --version
```

If you need to install `near-cli`:

```bash
npm install near-cli -g
```

## Login

If you do not have a NEAR account, please create one with [NEAR Wallet](https://wallet.testnet.near.org).

In the project root, login with `near-cli` by following the instructions after this command:

```bash
near login
```

Modify the top of `src/config.js`, changing the `CONTRACT_NAME` to be the NEAR account that was just used to log in.

```javascript
…
const CONTRACT_NAME = 'YOUR_ACCOUNT_NAME_HERE'; /* TODO: fill this in! */
…
```

Start the example!

```bash
yarn start
```

## To Test

```bash
cd contract
cargo test -- --nocapture
```

## To Explore

- `contract/src/lib.rs` for the contract code
- `src/index.html` for the front-end HTML
- `src/main.js` for the JavaScript front-end code and how to integrate contracts
- `src/test.js` for the JS tests for the contract

## To Build the Documentation

```bash
cd contract
cargo doc --no-deps --open
```

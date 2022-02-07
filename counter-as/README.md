# Counter example in AssemblyScript

## Dev Deploy && Test

```bash
yarn build
ACC1=$(near dev-deploy out/main.wasm | sed 's/.*id: \(.*\), node.*/\1/' | head -n 1)
near view --accountId $ACC1 $ACC1 getCounter '{}'
```

<!-- MAGIC COMMENT: DO NOT DELETE! Everything above this line is hidden on NEAR Examples page -->

## Description

This contract implements simple counter backed by storage on blockchain.
Contract in `assembly/main.ts` provides methods to increment / decrement counter and get it's current value or reset.

Plus and minus buttons increase and decrease value correspondingly. When button L is toggled, counter will add or minus 10 a time. RS button is for reset. LE and RE buttons to let the robot wink to you.

## To Run

Open in the Gitpod link above or clone the repository.

```bash
git clone https://github.com/near-examples/counter
```

## Setup [Or skip to Login if in Gitpod](#login)

Install dependencies:

```bash
yarn --frozen-lockfile
```

Make sure you have `near-cli` by running:

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

Modify the top of `src/config.js`, changing the `CONTRACT_NAME` to be the NEAR account name in the file `neardev/dev-account`. It starts with `dev-`.

```javascript
const CONTRACT_NAME = 'neardev/dev-account ACCOUNT ID'; /* TODO: fill this in! */
```

Start the example!

```bash
yarn start
```

## To Test

```bash
yarn asp  # as-pect tests
NODE_ENV=ci yarn jest # jest tests
NODE_ENV=ci yarn test # both
```

## To Explore

- `assembly/main.ts` for the contract code
- `src/index.html` for the front-end HTML
- `src/main.js` for the JavaScript front-end code and how to integrate contracts
- `src/test.js` for the JS tests for the contract

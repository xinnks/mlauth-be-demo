# mlAuth Back-end Example

This is an example demonstrating how to use the [mlauth-js](https://github.com/xinnks/mlauth-js) package to authenticate users with [mlAuth](https://github.com/xinnks/mlAuth) in a back-end ExpressJs environment.

## Setup
Add a .env file containing the client and secret keys from your mlAuth app
```env
VITE_MLAUTH_CLIENT=mlauth-app-client-key
VITE_MLAUTH_SECRET=mlauth-app-secret-key
EMAIL=some-email-address
PORT=5000
```

## Install dependencies.
```sh
#npm
npm run install
#pnpm
pnpm install
```

## Serve.
```sh
# npm
npm run dev
# pnpm
pnpm dev
```
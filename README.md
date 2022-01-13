This is a NextJs based metamask web3 login project to allow users to login with their metamask.

The app can then retrieve the wallet address and perform various actions from that address.

---

> Social Media

[Youtube](https://www.youtube.com/channel/UCNSVBipVk4ocQrcXCixxGtA), [Twitter](https://twitter.com/developerg0d), [Tiktok](https://www.tiktok.com/@developerg0d) & [Instagram](https://instagram.com/developerg0d) - **@developerg0d**

**Support my projects :^)** - [Buy me a Coffee](https://www.buymeacoffee.com/developerg0d) <3

---

## To test out

_Have a browser logged into MetaMask_

```bash
1) npm install
2) npm run dev
3) head to > http://localhost:3000
```

## Written Tutorial

Requirements:
- NextJs (or React) Knowledge
- MetaMask Wallet

### 1)
Run the command:
```
npx create-next-app@latest --ts
```
This will create a NextJs app with the latest version of NextJs with all the boilerplate code being in TypeScript.

### 2) 

Remove all the boilerplate code; 

This includes unused css & HTML that we need to remove so we can have a clean state to work with.

### 3)  

We then add a button with css to the index.tsx file and update the global css with some changes to make the application full screen with our version of simple dark mode.

### 4) 

Then run the command
```
npm install @usedapp/core
```
This will allow us to import the required functions to interact with MetaMask and retrieve various data post login.

We when enclose our Component within DApp Provider which provides service for a DApp: https://usedapp.readthedocs.io/en/latest/core.html

As well as enclosing the rest within React.StrictMode which is a tool for highlighting potential problems:

https://reactjs.org/docs/strict-mode.html

Now add a ConnectMetamask function that calls activate browser wallet (this will specifically interact with MetaMask).

### 5) 

Add a Slice Address function to cut up the wallet address.

This works by utilizing the String prototype function of **Slice** to allow us to exract section of the wallet address and then combine it using back-ticks (\` \`)

### 6)

We can now run the app and login with our MetaMask! :)
# NFTChallenge Introduction

NFTChallenge(NFTC) is an interactive platform where any NFT Project (referred to as third NFTP in the following context) can depoly its contract. On NFTC, any user can join to have fun with any NFTP and eligible users can easily mint.

On NFTC, all NFTPs are integrated with their own NFTs and can be shared with each other. NFTP can also build projects with the help of other existing NFTP. The user's NFTs in each item are not isolated. NFTC encourages user to use the NFTs of other NFTPs to complete the tasks required under a current project.

NFTC makes NFTs truly have circulation value. Besides, it will play a vital role in the metaverse.

## Installing Prerequisites

Node.js 12+ and Yarn are required to use this repo. 
Please refer to the [Yarn installation how-to](https://classic.yarnpkg.com/en/docs/install) if you don't yet have the `yarn` command installed locally.

To install the prerequisite packages,  clone the repository and then run `yarn`:

### Install Truffle

```bash
npm install -g truffle 
```

### Install dependencies

```bash
git clone https://github.com/mircial/nervos_NFTPlatform.git

cd nervos_NFTPlatform

yarn
```

## Compile with Truffle 

Change your `private key` as follows in `index.js`:

```bash
const DEPLOYER_PRIVATE_KEY = ''
```

Now in `truffle-config.js`, you will need to make the docker used.

using below command to compile contracts.

```bash
yarn compile
```

## Deploying Contracts

To deploy the `NFTChallenge` contract,  you can run the `node` command as follows:

```bash
node index.js ChallengeFactory.json
```

## Interface

A mature front-end (webpack, grunt, etc.) was not used so as to get from scratch as easy as possible. 

Open ternminal and Run `liteserver` development server (outside the development console) for front-end hot reloading. Smart contract changes must be manually recompiled and migrated. Open http://localhost:3000 for the web contents.

```bash
yarn dev
```

**note**: By far, we just finished a simple work to show how NFTC runs. For more details, go to [examples](https://github.com/mircial/CollectNFT).

## Summary

Above all, NFTC is an awesome platform for both developers and players. Anyone can depoly their contracts and anyone can have fun with it. For more details, please kindly refer to our slides.

To Make Metaverse More Wonderful. To Make NFT More Valuable!
import wbtcABI from './ABI/wbtc.json'
import wethABI from './ABI/weth.json'
import usdtEthABI from './ABI/usdt_eth.json'
import wbtcEthABI from './ABI/wbtc_eth.json'
import domoEthABI from './ABI/domo_eth.json'

import domoTokenABI from './ABI/domo_token.json'

import DOMOETHPool from './ABI/DOMOETHPool.json'
import WETHPool from './ABI/WETHPool.json'
import WBTCPool from './ABI/WBTCPool.json'
import USDTETHPool from './ABI/USDTETHPool.json'
import WBTCETHPool from './ABI/WBTCETHPool.json'



export default {
  stake_token:{
    domo_eth_lp: {
      name: "DOMO-ETH",
      description: "UNI DOMO-ETH LP",
      icon: "icon_domo_eth",
      link: "https://app.uniswap.org/#/add/0x77c329b7c9e2632a77aca45074d92ab027898c0e/ETH",
      address: '0x2c91AA5F6586e9E13D4EC50dA16b336beC448BCf',
      abi: domoEthABI,
      speed: 6
    },
    weth: {
      name: "WETH",
      description: "Wrapped Ether",
      icon: "icon_weth",
      link: "https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      abi: wethABI,
      speed: 1 
    },
    wbtc: {
      name: "WBTC",
      description: "Wrapped BTC",
      icon: "icon_wbtc",
      link: "https://etherscan.io/token/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      abi: wbtcABI,
      speed: 1 
    },
    wbtc_eth_lp: {
      name: "WBTC-ETH",
      description: "UNI WBTC-ETH LP",
      icon: "icon_wbtc_eth",
      link: "https://app.uniswap.org/#/add/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599/ETH",
      address: '0xBb2b8038a1640196FbE3e38816F3e67Cba72D940',
      abi: wbtcEthABI,
      speed: 1 
    },
    usdt_eth_lp: {
      name: "USDT-ETH",
      description: "UNI USDT-ETH LP",
      icon: "icon_usdt_eth",
      link: "https://app.uniswap.org/#/add/ETH/0xdac17f958d2ee523a2206206994597c13d831ec7",
      address: '0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852',
      abi: usdtEthABI,
      speed: 1 
    }
  },
  token: {
    domo: {
      address: '0x77c329b7C9E2632A77Aca45074d92AB027898c0e',
      abi: domoTokenABI
    },
    momo: {},
    domoko: {}
  }, 
  pool: {
    domo_eth_pool: {
      address: '0x1755baa7b6017da5a96d553c2213DfbEe140396C',
      abi: DOMOETHPool.abi
    },
    weth_pool: {
      address: '0xB570C884D51976E5186945fbcEf0CA7e47B63aDB',
      abi: WETHPool.abi
    },
    wbtc_pool: {
      address: '0xB03574a4b351DF7601D58B8415c1B229A3056495',
      abi: WBTCPool.abi
    },
    usdt_eth_pool: {
      address: '0x87ba179b2d9be6eA9939F9e0636DA809EEBF3f33',
      abi: USDTETHPool.abi
    },
    wbtc_eth_pool: {
      address: '0x3dc454c765370207CEACA9d14f4D4F6ED42C057e',
      abi: WBTCETHPool.abi
    }
  }
};

// "USDT", "USDT", 18, 100000000000000000000000, 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4, 0x5B38Da6a701c568545dCfcB03FcB875f56beddC4

//0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
//0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2
//0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db
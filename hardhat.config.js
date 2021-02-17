require('@nomiclabs/hardhat-waffle');
require('solidity-coverage');
require('hardhat-deploy');

const fs = require('fs');
let credentials = require('./credentials.json');

module.exports = {
  networks: {
    BNBTest: {
    url: credentials.BNBTest.providerUrl || 'https://data-seed-prebsc-2-s1.binance.org:8545',
    accounts: { mnemonic: credentials.BNBTest.mnemonic || 'ketchup comfort flat pilot steel valid smooth question buddy desk tackle pumpkin' },
  },

  },
  solidity: {
    version: '0.6.12',
  },
};

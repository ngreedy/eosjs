Eos = require('eosjs')
fs = require('fs')
binaryen = require('binaryen')

// Default configuration (additional options below)
config = {
  chainId: "c40a90d6bcb4b9b2c2d4c0916ee97a29af42a420372af44fa4f538ddef9e6b83", // 32 byte (64 char) hex string
  keyProvider: ['5KZ2ytRsGMxRAycpFqFnkRF8mNfZTomQKnaXzh1FtbRPgbaTAF3'], // WIF string or array of keys..
  httpEndpoint: 'http://127.0.0.1:8888',
  expireInSeconds: 60,
  broadcast: true,
  verbose: false, // API activity
  sign: true
}

eos = Eos(config,binaryen)
eos.getInfo((error, result) => { console.log(error, result) })

options = {
  authorization: 'eosio.token@active',
  broadcast: true,
  sign: true
}
eos.transfer('eosio.token', 'eosio', '1.0000 SYS', '', options)

wasm = fs.readFileSync(`/Users/sam/Public/oasis-eos/oasis/contracts/eosio.token/eosio.token.wasm`)
abi = fs.readFileSync(`/Users/sam/Public/oasis-eos/oasis/contracts/eosio.token/eosio.token.abi`)

// Publish contract to the blockchain
//eos.setcode('eosio.token', 0, 0, wasm).then(result => console.log(result)) // @returns {Promise}
//eos.setabi('eosio.token', JSON.parse(abi)) // @returns {Promise}
//eos.contract('eosio.token').then(tokencontract => tokencontract.create('eosio.token','1000.0000 SYS'))
//eos.contract('eosio.token').then(tokencontract => tokencontract.issue('eosio.token','1000.0000 SYS','init issue'))

// eos.transaction(tr => {
//   tr.newaccount({
//     creator: 'eosio.token',
//     name: 'sam',
//     owner: "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV",
//     active: "EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV"
//   })
// }
// )

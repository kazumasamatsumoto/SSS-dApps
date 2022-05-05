const symbol = require('/node_modules/symbol-sdk')

const address = symbol.Address.createFromRawAddress("TDIR3I5NU2HPZ7KTNMMB4YWSIPP2X4LWVFOCIWY")
console.log(`Your address : ${address.plain()}`)
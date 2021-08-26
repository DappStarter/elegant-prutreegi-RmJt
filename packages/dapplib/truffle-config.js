require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth scrub exchange inner nasty flock sound'; 
let testAccounts = [
"0x9075b4eb27fd62a2a7f7b4fbf457895202687c8caaddd2b769cdfc7ec45f5dff",
"0x426dc370c971933734bafcd09a753326b9a54065cad7b33a3d2e541fe7fe4dc0",
"0x8d6c0ff53e8dc27d8a7243c8e76212022602c3e56a54a6c368de4e7f4344c0ed",
"0x8d803cacd1522356d19fae76453d4f1551184c99e420b15b1ae5408ce47bfc83",
"0xfbdf048e9152c7675b0c3ce9a9756b878e28b2aa7ab0c44496b0c79b1a6b48b8",
"0x2a375f761d8f754c470b78b411165c411bda8e2a28b6ac9d903cd1d455664840",
"0x6657de5123b24bdbf039bbc3f7354c6b560ffe9e48c37a20f6534071274f15a2",
"0x8cc7dc2064fd3942dff8faec16c3c44a0e078e0db1e943289cdbc3148e6f7989",
"0xf440642bd35954364c8798075bcc514cda0c4937a465079834fa138b06512d8f",
"0x3f7d5ba39aa8ad7ef319db53d5a13ee41818f33174bdfd9e54eed53a4e2450e4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


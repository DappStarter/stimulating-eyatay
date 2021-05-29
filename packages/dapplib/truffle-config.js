require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin cloth flame trust'; 
let testAccounts = [
"0x8d18dfaee7c895ef69829e655041bc4bf99f7d16cdeadf1f2302f29f24b8a7f5",
"0xb259788dc8ac9c67df13abd08a3b2a5a9d89819e04809d974366b4b172d77bef",
"0xe02feda358baf579cb46cacb0c05a90f8af002b2e18ec5578ec543c1e95fd4cd",
"0x4ab9cbd1790fe002ae2cf73503f9236d2199f3e8772fb83378029365e25eb249",
"0xcca9383e0f6adb313f09e44156f858551badc8c6f28e59b3fdbd28e55b21633c",
"0xf54cf76e877570659cca246035b5c5710336c45dc799d5b0e4d0eb795fcc77ad",
"0x1e038497fc7d85763b795a3aad74e4d4f1b520fd58836398f4bce1265e723d82",
"0x7b41d9bba73ea75af396cc123c21b7ab5eb7650087e01ceb54fbf80a2820c302",
"0xa754b4e1cb3bdff61233e4179fa68f126294795d7891aabd912ab8baaa89913a",
"0x4637ae5b6d5c0f83c0eee88d67e0532766147cc54e5b42824eb074a05409782c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


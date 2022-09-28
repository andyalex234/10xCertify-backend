const { default: algosdk } = require("algosdk");
const {createAccount} = require('../create-account/create_account');
require("dotenv").config();

async function firstTransaction() {
    try {
        let myAccount = createAccount();
        // console.log("Press any key when the account is funded");
        // await keypress();
        // Connect your client
        const algodToken = process.env.ALGORAND_TOKEN;
        const algodServer = 'http://localhost';
        const algodPort = 4001;
        let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
    } catch (e){
        console.log("error", e);
    }
}

await firstTransaction()
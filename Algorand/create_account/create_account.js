const { default: algosdk } = require("algosdk");

export const createAccount = function() {
    try {
        
        const account = algosdk.generateAccount();
        const passphrase = algosdk.secretKeyToMnemonic(account.sk);
        console.log("Account Address:" + account.addr);
        console.log("Account Mnemonic:" + passphrase);
        
        return account;
    } catch (error) {
       console.log("error", error);
    }
}



let accountInfo = await algodClient.accountInformation(account.addr).do();
console.log("Account balance: %d microAlgos", accountInfo.amount);

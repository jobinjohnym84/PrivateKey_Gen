# PrivateKey_Gen

Conversely, you can you can read an encrypted private key with the json method by using the ethereumjs-wallet library. The specific function for this is called fromV3.

An Ethereum keystore file (stored in ~/.ethereum/keystore on Linux or C:\Users\<User>\Appdata/Roaming/Ethereum/keystore on Windows) is an encrypted version of your unique Ethereum private key that you will use to sign your transactions. If you lose this file, you lose access to your unique private key which means you lose the ability to sign your transactions — which means your funds are stuck in your account forever.

Of course, you could directly store your Ethereum private key in an encrypted file but it would make your key vulnerable to attackers that could simply read the file and use your private key to sign transactions to their account. Your Ether would be gone in less time that it’d take you to realise what had happened!

That’s why the Ethereum keystore files were created: they allow you to store your Ethereum private key encrypted under your passphrase. It’s the perfect compromise between security (an attacker would need the keystore file and your password to steal your funds) and usability (you only need the keystore file and your password to use your money).

To let you send some Ether, most Ethereum clients will ask you to type your passphrase (the same one you used when you created your account) in order to decrypt your Ethereum private key. Once decrypted, the private key is available to the client program to sign your transactions and let you move your fund.


# Main items of a keystore file

cipher: The name of a symmetric AES algorithm  
cipherparams: The parameters required for the “cipher” algorithm above  
ciphertext: Your Ethereum private key encrypted using the “cipher” algorithm above  
kdf: A Key Derivation Function used to let you encrypt your keystore file with a password  
kdfparams: The parameters required for the “kdf” algorithm above  
mac: A code used to verify your password  

# Sign a transaction

If you already created a private key, using web3’s privateKeyToAccount will give the same results as web3.eth.accounts.create. Furthermore, you can use signTransaction to sign a transaction with your private key. You must use signTransaction if you do not want to reveal your private key to the Ethereum node. 

```

const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider(“http://ethereumNodeUrl”));
const toAddress = "0x75A426f8136891afe4244347CE6931f5826E5Cc7";
const privateKey = "0x5f83be83fdd3c38bdc3f383896260604f42053fd4d6591af0cf946b841bbb4b1";
web3.eth.accounts.signTransaction({
    to: toAddress,
    value: "100000000",
    gas: 21000
}, privateKey, function (err, result) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(`rawTransaction ${result.rawTransaction}`);
    web3.eth.sendSignedTransaction(result.rawTransaction).on('receipt', console.log);
});
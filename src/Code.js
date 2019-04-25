const jswallet = require("ethereumjs-wallet");
const json = 

{
    address: '139b1627156becdb2efa3ece2415f14de997d5ac',
    crypto: {
        cipher: 'aes-128-ctr',
        ciphertext: '8a290f4ec5efdd78045ae8358c6f2581dd6397db7317597a9a1cf6c9241c9572',
        cipherparams:{iv: '5e215096e8ca2dbce7aac846ef8649c7'},
        kdf: 'scrypt',
        kdfparams:
            {
                 dklen:32,
                 n:262144,
                 p:1,
                 r:8,
                 salt: '3891606d18a8042d0727529d5dcd6b8a0f0fbe5e5821675f28f62d3973197d27'
            },
         mac: 'b653434a21ed585272d27068f1864ad14582dc2e3cec7debe28b613055331e59'
     },
     id: 'b88344ae-7d60-4c9b-97d8-96b9f2410b87',
     version:3
};

const wallet = jswallet.fromV3(json, "1779account1");
console.log("Private key " + wallet.getPrivateKey().toString("hex"));
const sha256sum = require("crypto-js/sha256");

const inlineScriptHash = sha256sum(inlineScript).toString("hex");

const scriptSrc = `
script-src 'self' 'wasm-unsafe-eval' 'inline-speculation-rules' ${inlineScriptHash}
`;

document.head.querySelector("meta[name=csp]").content = scriptSrc;

const app = new Vue({
    el: "#app",
    data: {
        balance: 0,
    },
    mounted() {
        this.getBalance();
    },
    methods: {
        getBalance() {
            klaytn.getBalance("YOUR_ADDRESS", (err, balance) => {
                if (err) {
                    console.log(err);
                } else {
                    this.balance = balance;
                }
            });
        },
        connectWallet() {
            klaytn.connectWallet((err, wallet) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Wallet connected:", wallet);
                }
            });
        },
        sendKlay() {
            klaytn.sendKlay("RECIPIENT_ADDRESS", 20000, (err, txHash) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Transaction sent:", txHash);
                }
            });
        }
    }
});

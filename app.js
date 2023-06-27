// Import the Klaytn SDK.
const klaytn = require("@klaytn/sdk");

// Get the recipient address from the form.
const address = document.querySelector("input[name=address]").value;

// Get the amount from the form.
// const amount = document.querySelector("input[name=amount]").value;

// Connect to the Klaytn network.
const client = klaytn.createClient();

// Send the Klaytn tokens.
client.sendTransaction({
  to: address,
  value: 20000,
}, (err, txHash) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Transaction hash:", txHash);
  }
});

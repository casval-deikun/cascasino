const Web3 = require('web3');
const klaytnProvider = new Web3.providers.HttpProvider('https://api.klaytn.com');
const web3 = new Web3(klaytnProvider);

function getAddress() {
  const ethereumAddress = window.ethereum.accounts[0];
  return ethereumAddress;
}

function getBalance() {
  const balance = web3.fromWei(web3.eth.getBalance(getAddress()), 'klay');
  return balance;
}

function transfer(toAddress, amount) {
  const transaction = web3.eth.sendTransaction({
    from: getAddress(),
    to: toAddress,
    value: amount,
  });

  transaction.on('transactionHash', (hash) => {
    console.log('Transaction hash:', hash);
  });

  transaction.on('receipt', (receipt) => {
    console.log('Transaction receipt:', receipt);
  });

  transaction.send();
}

$(function() {
  $('#transfer').on('click', function() {
    const toAddress = $('#toAddress').val();
    const amount = 100;

    transfer(toAddress, amount);
  });
});

let clickPower = 1;
let coins = 0;

const setCoins = () => {
  $('#coins').html(`<h2>Coins: ${coins}</h2>`);
}

const coinClick = () => {
  $('#target').bind('click', function() {
    coins = coins + clickPower;
    setCoins();
  })
}



const main = () => { 
  $(document).ready(function() {
    setCoins();
    coinClick();
  })
}
main();
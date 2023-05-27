// input elements
const costOfPacketApples = document.querySelector('.packetCostApples');
const numApplesInBox = document.querySelector('.applesInBox');

// output elements
const priceOfApple = document.querySelector('.applePrice');

// buttons
const calculateBtn = document.querySelector('.calculateBtn');

// variables
let appleCost = 0;

if (localStorage['costOfApple']) {
    priceOfApple.innerText = localStorage.getItem('costOfApple');
    appleCost = priceOfApple.innerText;
}

// factory function instance
const apple = appleApp();

// event listeners
calculateBtn.addEventListener('click', function() {
    apple.getAppleBoxPrice(costOfPacketApples.value);
    apple.getNumberForApples(numApplesInBox.value);
    priceOfApple.innerText = apple.costOfApple();
    localStorage.setItem('costOfApple', priceOfApple.innerHTML);
});

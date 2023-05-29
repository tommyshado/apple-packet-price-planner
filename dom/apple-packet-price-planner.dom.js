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
    priceOfApple.classList.add('output');
    appleCost = priceOfApple.innerText;
}

// factory function instance
const apple = appleApp();

// event listeners
calculateBtn.addEventListener('click', function() {
    priceOfApple.innerText = apple.costOfApple(costOfPacketApples.value, numApplesInBox.value);
    priceOfApple.classList.add('output');
    costOfPacketApples.value = '';
    numApplesInBox.value = '';
    localStorage.setItem('costOfApple', priceOfApple.innerHTML);
});

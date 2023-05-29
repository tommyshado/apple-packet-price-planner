// input elements
const costOfPacketApples = document.querySelector('.packetCostApples');
const numApplesInBox = document.querySelector('.applesInBox');
const applePacketSize = document.querySelector('.applesPacket');

// output elements
const packetNumber = document.querySelector('.packetNum');
const priceOfApple = document.querySelector('.applePrice');
const priceOfPacket = document.querySelector('.applePacketPrice');

// buttons
const calculateBtn = document.querySelector('.calculateBtn');

// variables of the local storage
let appleCost = 0;

if (localStorage['costOfApple']) {
    priceOfApple.innerText = localStorage.getItem('costOfApple');
    priceOfApple.classList.add('output');
    appleCost = priceOfApple.innerText;
}

let applePacketCost = 0;

if (localStorage['costPerPacket']) {
    priceOfPacket.innerText = localStorage.getItem('costPerPacket');
    priceOfPacket.classList.add('output');
    applePacketCost = priceOfPacket.innerText;
}

let numOfPacket = 0;

if (localStorage['packetNumber']) {
    packetNumber.innerText = localStorage.getItem('packetNumber');
    packetNumber.classList.add('output');
    numOfPacket = packetNumber.innerText;
}

// factory function instance
const apple = appleApp();

// event listeners
calculateBtn.addEventListener('click', function() {

    // cost of an apple
    apple.getAppleBoxPrice(costOfPacketApples.value);
    apple.getNumberForApples(numApplesInBox.value);
    priceOfApple.innerText = apple.costOfApple();
    priceOfApple.classList.add('output');
    localStorage.setItem('costOfApple', priceOfApple.innerText);

    // cost of apple per packet
    apple.getAppleBoxPrice(costOfPacketApples.value);
    priceOfPacket.innerText = apple.costOfPacket(applePacketSize.value);
    priceOfPacket.classList.add('output');
    localStorage.setItem('costPerPacket', priceOfPacket.innerText);

    // packets number
    apple.getNumberForApples(numApplesInBox.value);
    apple.costOfPacket(applePacketSize.value);
    packetNumber.innerText = apple.numberOfPackets();
    packetNumber.classList.add('output');
    localStorage.setItem('packetNumber', packetNumber.innerText);

    // setting input elements to an empty string
    costOfPacketApples.value = '';
    numApplesInBox.value = '';
    applePacketSize.value = '';
});

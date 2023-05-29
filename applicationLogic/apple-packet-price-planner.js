function appleApp() {

    // code for buying apples
    let appleBoxCost = 0;
    let appleNumber = 0;

    function getAppleBoxPrice(userInput) {
        appleBoxCost = Number(userInput)
        return appleBoxCost;
    }

    function getNumberForApples(userInput) {
        appleNumber = Number(userInput)
        return appleNumber;
    }

    // code for price calculations apple

    function costOfApple() {
        let appleCostVar = (appleBoxCost / appleNumber).toFixed(2);
        return appleCostVar;
    }

    function costOfPacket(packetSize) {
        return (appleBoxCost / packetSize).toFixed(2);
    }

    return {
        getAppleBoxPrice,
        getNumberForApples,
        costOfApple,
        costOfPacket
    }
}

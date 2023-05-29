function appleApp() {

    // code for buying apples
    let appleBoxCost = 0;
    let appleNumber = 0;
    let sizeOfPacket = 0;

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
        sizeOfPacket = packetSize;
        return (appleBoxCost / sizeOfPacket).toFixed(2);
    }

    function numberOfPackets() {
        return appleNumber / sizeOfPacket;
    }

    return {
        getAppleBoxPrice,
        getNumberForApples,
        costOfApple,
        costOfPacket,
        numberOfPackets
    }
}

function appleApp() {
    let appleBoxCost = 0;
    let appleNumber = 0;

    function costOfApple(appleBoxPrice, numberOfApples) {
        appleBoxCost = Number(appleBoxPrice);
        appleNumber = Number(numberOfApples);
        return (appleBoxCost / appleNumber).toFixed(2);
    }

    return {
        costOfApple
    }
}
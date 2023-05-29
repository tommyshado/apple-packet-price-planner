const appleApp = () => {
    let appleBoxCost = 0;
    let appleNumber = 0;
    let appleCost = 0;

    const costOfApple = (appleBoxPrice, numberOfApples) => {
        appleBoxCost = Number(appleBoxPrice);
        appleNumber = Number(numberOfApples);
        appleCost = (appleBoxCost / appleNumber).toFixed(2);
        
        return appleCost;
    }

    return {
        costOfApple
    }
}
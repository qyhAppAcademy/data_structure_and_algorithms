var canCompleteCircuit = function (gas, cost) {
    if (sumGas < sumCost) {
        return -1;
    }
    for (let i = 0; i < gas.length; i++) {
        let totalGas = 0;
        let j = i;
        for (; j < cost.length; j++) {
            totalGas += gas[j];
            if (totalGas - cost[j] < 0) {
                break;
            }
            else {
                totalGas -= cost[j];
            }
        }
        if (j === cost.length) {
            return i;
        }
    }
    return -1;
};
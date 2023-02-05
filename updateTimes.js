function updateTimes(signalOne, signalTwo) {
    // Write your code here
    let m = signalOne.length;
    let n = signalTwo.length;
    let minLen = Math.min(m, n);
    let maxEqual = undefined;
    let count = 0;
    for (let i = 0; i < minLen; i++) {
        if (signalOne[i] === signalTwo[i]) {
            if (!maxEqual) {
                maxEqual = signalOne[i];
            }
            else {
                if (signalOne[i] > maxEqual) {
                    count += 1;
                    maxEqual = signalOne[i];
                }
            }
        }
    }
    return count;
}
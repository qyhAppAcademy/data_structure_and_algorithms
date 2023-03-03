export function firstKMissingNumbers(arr, k){
    // your code will replace this placeholder return statement
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] > 0 && arr[i] - 1 !== i && arr[arr[i] - 1] !== arr[i]) {
            let tmp = arr[arr[i] - 1];
            arr[arr[i] - 1] = arr[i];
            arr[i] = tmp;
        }
    }
    const result = [];
    let last = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] - 1 === i) {
            for (let j = last + 1; j <= arr[i] - 1; j++) {
                result.push(j);
                count += 1;
                if (count === k) {
                    return result;
                }
            }
            last = arr[i];
        }
    }
    while (count < k) {
        result.push(last + 1);
        count += 1;
        last += 1;
    }
    return result;
}
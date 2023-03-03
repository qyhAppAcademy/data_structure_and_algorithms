export function firstKMissingNumbers(arr, k) {
    // your code will replace this placeholder return statement
    for (let i = 0; i < arr.length; i++) {
        while (arr[i] > 0 && arr[i] - 1 !== i && arr[arr[i] - 1] !== arr[i]) {
            let tmp = arr[arr[i] - 1];
            arr[arr[i] - 1] = arr[i];
            arr[i] = tmp;
        }
    }
    const result = [];
    let count = 0;
    console.log(arr);
    for (let i = 1; i <= arr.length; i++) {
        for (let j = (arr[i - 1] < 0 ? 1 : arr[i - 1] + 1); j < (i === arr.length ? arr[i - 1] + k + 1 : arr[i]); j++) {
            result.push(j);
            count += 1;
            if (count === k) {
                return result;
            }
        }
    }
    return result;
}
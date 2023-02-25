let getKSumSubsetsRec = function (list, partialList, targetSum, sets, arrayStack) {
    // Sum the partial_list
    let listSum = 0;
    for (let i = 0; i < partialList.length; i++) {
        listSum += partialList[i];
    }
    // If sum is equal to target_sum, add the set from the partial_list to the output_array
    if (listSum === targetSum && partialList.length > 0) {
        sets.push(partialList);
    }
    // Return, if the sum is greater than the target_sum to save time
    else if (listSum > targetSum) {
        return;
    }

    else {
        for (var i = 0; i < list.length; i++) {
            // In JS array is passed by reference so we need to save array's state
            arrayStack.push(list.slice());
            arrayStack.push(partialList.slice());
            let newPartialList = partialList.slice();
            newPartialList.push(list[i]);

            let new_list = list.splice(i + 1);
            getKSumSubsetsRec(new_list, newPartialList, targetSum, sets, arrayStack);
            partialList = arrayStack.pop();
            list = arrayStack.pop();
        }
    }
};

let getKSumSubsets = function (list, targetSum) {
    // As arrays are passed by reference in Javascript and
    // we are changing the values of "list" in the getKSumSubsetsRec
    // so, pass  its clone "listClone" in getKSumSubsetsRec function
    let listClone = [...list];
    let partialList = [];
    let arrayStack = [];
    let subsets = [];
    getKSumSubsetsRec(listClone, partialList, targetSum, subsets, arrayStack);

    return subsets;
};
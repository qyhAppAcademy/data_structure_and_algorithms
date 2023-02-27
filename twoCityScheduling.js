var twoCitySchedCost = function (costs) {
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]));
    let minCost = 0;
    for (let i = 0; i < costs.length; i++) {
        if (i < costs.length / 2) {
            minCost += costs[i][0];
        } else {
            minCost += costs[i][1];
        }
    }
    return minCost;
};
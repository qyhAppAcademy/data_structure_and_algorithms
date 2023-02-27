var numRescueBoats = function (people, limit) {
    people.sort();
    let light = 0;
    let heavy = people.length - 1;
    let count = 0;
    console.log(people);
    while (light < heavy) {
        if (people[light] + people[heavy] <= limit) {
            count += 1;
            light += 1;
            heavy -= 1;
        }
        else {
            count += 1;
            heavy -= 1;
        }
    }
    if (light === heavy) {
        count += 1;
    }
    return count;
};
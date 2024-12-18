const removeFromArray = function(array, ...takeAway) {
    const list = [];
    array.forEach((item) => {
        if (!takeAway.includes(item)) {
            list.push(item);
        }
    });
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;

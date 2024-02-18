const removeFromArray = function(array, ...args) {
    let newArray = [];
    // Check each element in the array
    array.forEach(element => {
        // Only push to new array if the array element is not in the argument(s)
        if(!args.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

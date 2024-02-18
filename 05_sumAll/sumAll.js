const sumAll = function(start, finish) {

    // return ERROR if the parameters are not numbers
    if (typeof start != "number" || typeof finish != "number") return "ERROR";
    
    // return ERROR if negative numbers are provided
    if (start < 0 || finish < 0) return "ERROR";
    
    // allows functionality if larger number is provided as the first argument
    if (start > finish) {
        let temp = start;
        start = finish;
        finish = temp;
    }

    let sum = 0;
    
    for (let i = start; i <= finish; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

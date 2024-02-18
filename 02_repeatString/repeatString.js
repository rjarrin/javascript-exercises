const repeatString = function(string, ...args) {
    // Only proceed if the repeater number is positive
    if(args[0] < 0) {
        return "ERROR";
    }
    // Initialize holder variable
    let word = '';
    // Loop through the word based on the repeater number
    for (let i = 0; i < args[0]; i++) {
        word += string;
    }
    return word;
};

// Do not edit below this line
module.exports = repeatString;

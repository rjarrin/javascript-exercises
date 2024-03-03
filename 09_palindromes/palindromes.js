const palindromes = function (string) {
    // Remove any punctuation marks from the string and return in lowercase format
    let newString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    // Reverse the string and compare
    console.log("ORG: "+ newString);
    console.log("REV: " + newString.split("").reverse().join(""))
    if (newString.split("").reverse().join("") != newString) return false;
    return true;
};

// Do not edit below this line
module.exports = palindromes;

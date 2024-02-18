/* Rules:
- Leap years are divisible by 4
- Leap years are NOT divisible by 100
    - Leap years are divisble by 400
*/
const leapYears = function(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0 && year % 400 != 0) {
            return false;
        }
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;

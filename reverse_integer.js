// Reverse Integer


// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1
// Accepted
// 2,095,474
// Submissions
// 7,817,846




/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  
        let revNum = 0, lastDigit = 0;
    while (x!==0) {
        lastDigit = x % 10; 
        x = parseInt(x/10); 
        revNum = revNum * 10 + lastDigit;
        if (revNum < Math.pow(-2, 31) || revNum > Math.pow(2, 31) - 1) return 0
    }
    return revNum
    
    
    
//         var rnum = 0;

    
    
//     let string = x.toString();
//     string = string.split("")
//     let minus = string[0] == "-" ? string.filter((s) =>  s == "-") : "";
//     let numbers = string.filter((s) =>  s != "-")
    
//     numbers = numbers.reverse().join("");
//     parseFloat(numbers)
//     if(numbers > 2147483647){
//        return 0
//        }else{
//         numbers = `${minus}${numbers}`
    
//     return numbers  
//        }

};



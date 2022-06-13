// Zigzag Conversion

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);
 

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"
 

// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows < 2) {
      return s;
    }
    var matrix = [];
    for (var i = 0; i < numRows; i++) {
        matrix.push([]);
    }
    var k = 0;
    i = 0;
    var res = '';
    while (k < s.length) {
        while(i < matrix.length && k < s.length) {
            matrix[i].push(s[k]);
            // down
            i++;
            k++;
        }
        i = i-2;
        while (i >= 0 && k < s.length) {
            matrix[i].push(s[k]);
            // up
            i--;
            k++;
        }
        i = i+2;
    }
    for (var i = 0; i < matrix.length; i++) {
        for (var k = 0; k < matrix[i].length; k++) {
            res += matrix[i][k];
        }
    }
    return res;
};

// P   A   H   N
// A P L S I I G
// Y   I   R

// P      H
// A    S I
// Y  I   R
// P L    I G
// A      N

// PHASIYIRPLIGAN


// P         R
// A       I I
// Y     H   N
// P   S     G
// A I
// L



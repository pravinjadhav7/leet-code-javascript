// 10. Regular Expression Matching



// Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

// '.' Matches any single character.​​​​
// '*' Matches zero or more of the preceding element.
// The matching should cover the entire input string (not partial).

 

// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// Example 2:

// Input: s = "aa", p = "a*"
// Output: true
// Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
// Example 3:

// Input: s = "ab", p = ".*"
// Output: true
// Explanation: ".*" means "zero or more (*) of any character (.)".
 

// Constraints:

// 1 <= s.length <= 20
// 1 <= p.length <= 30
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.



/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
       const recurse = (i,j) => {
        if(i === s.length && j === p.length) return true;

        // Check whether this character matches the pattern
        const matchesChar = i < s.length && (p[j] === '.' || s[i] === p[j]);

        // If the character after this is a * then we can either continue the pattern
        // or abort by completely skipping over both characters
        if(j +1 < p.length && p[j+1] === '*') {
            return recurse(i,j+2) || matchesChar && recurse(i+1,j);
        } else {
            // Otherwise we simply match the character and continue onwards
            return matchesChar && recurse(i+1,j+1);
        }
    }
    
    return recurse(0,0); 
};


// Longest Palindromic Substring



// Given a string s, return the longest palindromic substring in s.
// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.


/**
 * @param {string} s
 * @return {string}
 */

var is_Palindrome = function (str) {
    var rev = str.split("").reverse().join("");
    return str == rev;
}


var longestPalindrome = function(s) {
    // to calculate substring length
    var max_length = 0;
    var longest_palindrome = '';
    
    for(var i = 0; i<s.length; i++){
        
        var substrings = s.substr(i, s.length);
        for(var j=substrings.length; j>=0; j--){
            // sub of sub
            var substrings_sub = substrings.substr(0, j);

            //if (substrings_sub.length <= 1) continue;
            
            if (is_Palindrome(substrings_sub)){
                if (substrings_sub.length > max_length) 
                {
                    max_length = substrings_sub.length;
                    longest_palindrome = substrings_sub;
                }
            }
            
        }
    }
    
    return longest_palindrome;
    
};

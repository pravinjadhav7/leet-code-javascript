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






/// another answer

/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function(s) {
  var start = 0;
  var end = 0;
  var len = s.length;
  var num = 0;
  for (var i = 0; i < len; i++) {
    num = Math.max(expandAroundCenter(s, i, i), expandAroundCenter(s, i, i + 1));
    if (num > end - start) {
      start = i - Math.floor((num - 1) / 2);
      end = i + Math.floor(num / 2);
    }
  }
  return s.slice(start, end + 1);
};

var expandAroundCenter = function (s, left, right) {
  var l = left;
  var r = right;
  var len = s.length;
  while (l >= 0 && r < len && s[l] === s[r]) {
    l--;
    r++;
  }
  return r - l - 1;
};

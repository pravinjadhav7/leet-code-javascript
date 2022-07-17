// Container With Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    // It stores maximum area...
    let maxArea = Number.MIN_SAFE_INTEGER;
    //Initialize beg and end pointers...
    let beg = 0;
    let end = height.length - 1;
        
    // Loop until beg and end meet...
    while (beg < end){
        //Calculate the height of the shorter bar — one bar is represented by height[beg] and the other bar is represented by height[end]...
        let srtrBar = Math.min(height[beg], height[end]);
        //Calculate the area between the two bars and compare it with the current maximum...
        maxArea = Math.max(maxArea, srtrBar * (end - beg));
            
        //Move the pointers if there exists a bar whose height is greater than the current one...
        if (height[beg] < height[end]) {
            beg++;
        } else {
            end--;
        }
    }
    //Return the maximum area at the end...
    return maxArea;
};

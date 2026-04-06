// LeetCode #1 - Two Sum
// https://leetcode.com/problems/two-sum/

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Explanation: Because nums[1] + nums[2] == 6, we return [1, 2].

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 6, we return [0, 1].

function twoSum(nums,target){
    let map={}

    for(let i=0;i<nums.length;i++){
        let diff = target - nums[i]
        if(map[diff] !== undefined){
            return [map[diff],i]
        }
        map[nums[i]] = i
    }
    return -1
}

// time complexity: O(n)
// space complexity: O(n)

// brute force solution:

// function twoSum(nums,target){
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j] === target){
//                 return [i,j]
//             }
//         }
//     }
//     return -1
// }

// time complexity: O(n^2)
// space complexity: O(1)
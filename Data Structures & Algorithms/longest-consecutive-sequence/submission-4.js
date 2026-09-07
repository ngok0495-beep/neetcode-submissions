class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0
        let numSet = new Set(nums)

        for(let n of numSet){
            if(!numSet.has(n - 1)){
                let length = 1
            
            while(numSet.has(n + length)){
                length++
            }
            longest = Math.max(length, longest)
        }
        }
        return longest
    }
}

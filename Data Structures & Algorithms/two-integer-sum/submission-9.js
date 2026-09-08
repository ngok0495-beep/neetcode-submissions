class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = {}

        for(let i = 0; i < nums.length; i++){
            let n = nums[i]
            let diff = target - n
            if(diff in map){
                return [map[diff], i]
            }
            map[n] = i
        }
        return []
    }
}

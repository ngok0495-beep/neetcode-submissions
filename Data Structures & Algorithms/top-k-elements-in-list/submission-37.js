class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}
        const freq = Array.from({length : nums.length + 1}, () => [])

        for(let i of nums){
            count[i] = 1 + (count[i] || 0)
        }

        for(let i in count){
            let c = count[i]
            freq[c].push(Number(i))
        }

        const res = []
        for(let i = freq.length - 1; i > 0; i--){
            for(let c of freq[i]){
                res.push(c)
                if(res.length === k) return res
            }
        }
        return res
    }
}

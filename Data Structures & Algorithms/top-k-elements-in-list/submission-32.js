class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {}
        const count = Array.from({ length : nums.length + 1}, () => [])

        for(let i of nums){
            map[i] = 1 + (map[i] || 0)
        }

        for(let n in map){
            let v = map[n]
            count[v].push(Number(n))
        }

        const res = []
        for(let i = count.length - 1; i > 0; i--){
            for(let c of count[i]){
                res.push(c)
                if(res.length === k) return res
            }
        }
        return res
    }
}

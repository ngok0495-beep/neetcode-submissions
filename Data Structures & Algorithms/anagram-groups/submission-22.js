class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()

        for(let i of strs){
            const count = new Array(26).fill(0)

            for(let ch of i){
                count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }

            let key = count.join('#')
            if(!map.has(key)) map.set(key, [])
            map.get(key, []).push(i)
            
        }
        return Array.from(map.values())
    }
}

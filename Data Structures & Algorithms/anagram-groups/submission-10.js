class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map()

        for( const i of strs){
            let count = new Array(26).fill(0)

            for( const ch of i){
                count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++            
            }
            const key = count.join('#')
            if(!map.has(key)) map.set(key, [])
            map.get(key).push(i)
        }
            return Array.from(map.values())
    }
}

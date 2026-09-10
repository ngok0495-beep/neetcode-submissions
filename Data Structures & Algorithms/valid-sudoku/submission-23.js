class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = Array.from({length: 9}, () => new Set)
        const rows = Array.from({length: 9}, () => new Set)
        const square = Array.from({length: 9}, () => new Set)

        for(let c = 0; c < 9; c++){
            for(let r = 0; r < 9; r++){
                const val = board[r][c]
                if(val === ".") continue
                let RaC = Math.floor(r / 3) * 3 + Math.floor(c / 3)
                if(cols[c].has(val) || rows[r].has(val) || square[RaC].has(val)) {return false}
                cols[c].add(val)
                rows[r].add(val)
                square[RaC].add(val)
            }
        }
        return true
    }
}

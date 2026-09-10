class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = Array.from({length: 9}, () => new Set)
        const rows = Array.from({length: 9}, () => new Set)
        const squares = Array.from({length: 9}, () => new Set)

        for(let r = 0; r < 9; r++){
            for(let c = 0; c < 9; c++){
                const val = board[r][c]
                if(val === ".") continue
                let RaC = Math.floor( r / 3 ) * 3 + Math.floor(c / 3)
                if(cols[c].has(val) || rows[r].has(val) || squares[RaC].has(val))
                    return false

                cols[c].add(val)
                rows[r].add(val)
                squares[RaC].add(val)
            }
        }
        return true
    }
}

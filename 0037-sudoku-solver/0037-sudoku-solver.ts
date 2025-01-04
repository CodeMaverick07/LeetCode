/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
 solve(board,0,0)    
};

function solve(board:string[][],row:number,col:number){
    if(row === 9) return true
    if(col === 9) return solve(board,row+1,0)
    if(board[row][col]!==".") return solve(board,row,col+1)
  for(let i = 1; i<10; i++){
   let num = i.toString()
   board[row][col]= num
   if(isValid(board,row,col)&&solve(board,row,col+1)){
    
return true
   }
   
   board[row][col]="."
   
  }

}

function isValid(board:string[][],row:number,col:number){
let num = board[row][col]

  //check row 
 for (let i =0; i<9; i++){
   if(i!==col&&board[row][i]===num) return false
 }
  //check column
for(let i = 0; i<9; i++){
   if(i!==row && board[i][col]===num) return false
}
 //check 3*3 matrix
 const startRow = row - row%3
 const startCol = col - col%3
 for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (
                (startRow + i !== row || startCol + j !== col) &&
                board[startRow + i][startCol + j] === num
            ) {
                return false;
            }
        }
    }
    return true
 
}
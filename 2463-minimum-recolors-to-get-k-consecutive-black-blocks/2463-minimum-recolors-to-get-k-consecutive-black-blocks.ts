function minimumRecolors(blocks: string, k: number): number {
       let n = blocks.length
       let noOfBlack = -1
       for (let i = 0; i<=n-k; i++){
        let no = 0
        for (let j = i; j<i+k; j++){
           if (blocks[j]=="B"){
            no++
           }
        }
        noOfBlack = Math.max(no,noOfBlack)
       }
       return k-noOfBlack
};
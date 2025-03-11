// function numberOfSubstrings(s: string): number {
//     let count = 0
//     let left = 0
//     let n = s.length 
//     let arr = new Map()
//     arr.set("a",0)
//     arr.set("b",0)
//     arr.set("c",0)
//     for (let i = 0; i<n; i++){
//         arr.set(s[i],arr.get(s[i])+1)
//         while(arr.get("a")>0&&arr.get("b")>0&&arr.get("c")>0){
//           count = count + n - i
//           arr.set(s[left],arr.get(s[left])-1)
//           left++
//         }
//     }
//     return count
// };

function numberOfSubstrings(s: string): number {
    let hash=new Array(3).fill(-1)
    let count=0

    for(let i=0;i<s.length;i++){
        hash[s.charCodeAt(i)-97]=i
        if(hash[0]!=-1&&hash[1]!=-1&&hash[2]!=-1){
            let minInd=Math.min(hash[0],Math.min(hash[1],hash[2]))
            count+=1+minInd
        }
    }

    return count
};
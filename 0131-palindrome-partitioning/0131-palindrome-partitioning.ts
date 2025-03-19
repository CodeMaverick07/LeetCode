function partition(s: string): string[][] {
    let result = []
    let ans = []
    rec(0,s,result,ans)
    return result
};


function rec(idx,s,result,ans){
    if (idx == s.length){
        result.push([...ans])
        return;
    }
  for (let i = idx; i<s.length; i++){
    let temp = s.substring(idx,i+1)
    if (isPalindrome(temp)){
        ans.push(temp)
        rec(i+1,s,result,ans)
        ans.pop()
    }
  }
}

function isPalindrome (s:string) : boolean {
   let l = 0
   let r = s.length - 1
   while (l<=r){
    if (s[l++]!=s[r--]){
        return false 
    }
   }
   return true
}


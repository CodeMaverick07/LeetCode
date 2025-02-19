function getHappyString(n: number, k: number): string {
    let ans: string[] = [];
    let queue: string[] = [];
    queue.push("a")
    queue.push("b")
    queue.push("c")
    while(queue.length>0){
        let curr = queue[0]
        queue.shift()
        if (curr.length == n){
           ans.push(curr)
           continue
        } 
        let first = curr
        let second = curr 
        if (curr[curr.length-1]=='a'){
          first = first.concat('b')
           second = second.concat('c')
        } else if (curr[curr.length-1]=='b'){
           first = first.concat('a')
           second = second.concat('c')
        }else {
           first = first.concat('a')
           second = second.concat('b')

        }
        queue.push(first)
        queue.push(second)

    }
    if (ans.length < k) return ""
    return ans[k-1]
};
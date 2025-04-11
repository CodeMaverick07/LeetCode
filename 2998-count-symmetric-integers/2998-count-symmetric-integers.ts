function countSymmetricIntegers(low: number, high: number): number {
    let count = 0;
    for (let i = low; i <= high; i++) {
        let str = i.toString();
        if (str.length % 2 !== 0) continue;

        let mid = str.length / 2;
        let part1 = str.substring(0, mid);
        let part2 = str.substring(mid);

        let ans1 = { count: 0 };
        let ans2 = { count: 0 };

        countValue(part1, ans1);
        countValue(part2, ans2);

        if (ans1.count === ans2.count) {
            count++;
        }
    }
    return count;
}

function countValue(str: string, ans: { count: number }) {
    for (let char of str) {
        ans.count += parseInt(char);
    }
}
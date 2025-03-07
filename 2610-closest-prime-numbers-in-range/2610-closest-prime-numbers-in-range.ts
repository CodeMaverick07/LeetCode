// function closestPrimes(left: number, right: number): number[] {
//     let primes = findPrimes(left,right)
//     if (primes.length == 0 || primes.length == 1) return [-1,-1]
//     let ans = [1,10000]
//     for (let i = 1; i<primes.length; i++){
//         let diff = primes[i]-primes[i-1]
//         if ((ans[1]-ans[0])>diff){
//             ans = [primes[i-1],primes[i]]
//         } 
//     }
//     return ans
// };


// function sieveOfEratosthenes(limit: number): boolean[] {
//     const primes = new Array(limit + 1).fill(true);
//     primes[0] = primes[1] = false; // 0 and 1 are not prime

//     for (let num = 2; num * num <= limit; num++) {
//         if (primes[num]) {
//             for (let multiple = num * num; multiple <= limit; multiple += num) {
//                 primes[multiple] = false;
//             }
//         }
//     }
//     return primes;
// }

// function findPrimes(x: number, y: number): number[] {
//     const primeFlags = sieveOfEratosthenes(y);
//     return primeFlags.map((isPrime, num) => (isPrime && num >= x ? num : -1)).filter(n => n !== -1);
// }


function closestPrimes(left: number, right: number): number[] {
    const isPrime = sieveOfEratosthenes(right);
    const primes: number[] = [];
    for (let i = Math.max(left, 2); i <= right; i++) {
        if (isPrime[i]) primes.push(i);
    }

    if (primes.length < 2) return [-1, -1];
    let closestPair: number[] = [primes[0], primes[1]];
    let minDiff = closestPair[1] - closestPair[0];

    for (let i = 1; i < primes.length - 1; i++) {
        let diff = primes[i + 1] - primes[i];
        if (diff < minDiff) {
            closestPair = [primes[i], primes[i + 1]];
            minDiff = diff;
        }
    }

    return closestPair;
}

function sieveOfEratosthenes(limit: number): boolean[] {
    const primes = new Array(limit + 1).fill(true);
    primes[0] = primes[1] = false;

    for (let num = 2; num * num <= limit; num++) {
        if (primes[num]) {
            for (let multiple = num * num; multiple <= limit; multiple += num) {
                primes[multiple] = false;
            }
        }
    }
    return primes;
}



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


const MAX_NUM = 1e6;

let i: number, j: number;
const isPrime = Array.from({ length: MAX_NUM + 1 }, () => true);
const primes: number[] = [];

for (i = 2; i * i <= MAX_NUM; i++) {
  if (isPrime[i]) {
    for (j = i * i; j <= MAX_NUM; j += i) {
      isPrime[j] = false;
    }
  }
}

for (i = 2; i <= MAX_NUM; i++) {
  if (isPrime[i]) {
    primes.push(i);
  }
}

function closestPrimes(left: number, right: number): number[] {
  let i: number,
    a = -1,
    b = -1,
    minDiff = Number.MAX_SAFE_INTEGER;

  // console.table(primes);

  const leftIdx = _.sortedIndex(primes, left);
  let rightIdx = _.sortedLastIndex(primes, right);

  if (primes[rightIdx] > right) rightIdx--;

  // console.log({ leftIdx, rightIdx });

  if (rightIdx - leftIdx < 1) return [-1, -1];

  for (i = leftIdx; i < rightIdx; i++) {
    if (primes[i + 1] - primes[i] < minDiff) {
      minDiff = primes[i + 1] - primes[i];

      a = primes[i];
      b = primes[i + 1];
    }
  }

  return [a, b];
}
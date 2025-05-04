
function numEquivDominoPairs(dominoes) {

  const countByKey = new Uint16Array(100);
  let totalEquivalentPairs = 0;

  const length = dominoes.length;
  for (let i = 0; i < length; i++) {
    const firstValue = dominoes[i][0];
    const secondValue = dominoes[i][1];


    const minValue = firstValue < secondValue ? firstValue : secondValue;
    const maxValue = firstValue < secondValue ? secondValue : firstValue;


    const key = minValue * 10 + maxValue;


    totalEquivalentPairs += countByKey[key];


    countByKey[key]++;
  }

  return totalEquivalentPairs;
}
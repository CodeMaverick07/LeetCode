function mergeArrays(arr1: number[][], arr2: number[][]): number[][] {
    const result: number[][] = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i][0] === arr2[j][0]) {
            result.push([arr1[i][0], arr1[i][1] + arr2[j][1]]);
            i++;
            j++;
        } else if (arr1[i][0] < arr2[j][0]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) result.push(arr1[i++]);
    while (j < arr2.length) result.push(arr2[j++]);

    return result;
}

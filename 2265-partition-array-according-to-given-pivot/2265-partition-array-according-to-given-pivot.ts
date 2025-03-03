const pivotArray = (nums: number[], pivot: number): number[] => {
  const output = [];

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] < pivot) {
      output.push(nums[i]);
    }
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === pivot) {
      output.push(nums[i]);
    }
  }

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] > pivot) {
      output.push(nums[i]);
    }
  }

  return output;
};
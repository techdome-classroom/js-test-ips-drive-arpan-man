function smallestMissingPositiveInteger(nums) {
  const n = nums.length;

  let posind = 0;
  for (let i = 0; i < n; i++) {
      if (nums[i] > 0) {
          [nums[i], nums[posind]] = [nums[posind], nums[i]];
          posind++;
      }
  }

  for (let i = 0; i < posind; i++) {
      const val = Math.abs(nums[i]);
      if (val - 1 < posind && nums[val - 1] > 0) {
          nums[val - 1] = -nums[val - 1];
      }
  }

  for (let i = 0; i < posind; i++) {
      if (nums[i] > 0) {
          return i + 1;
      }
  }
  return posind + 1;
}
  module.exports = smallestMissingPositiveInteger;


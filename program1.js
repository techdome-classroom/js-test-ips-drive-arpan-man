function smallestMissingPositiveInteger(nums) {
  const n = nums.length;

  let pind = 0;
  for (let i = 0; i < n; i++) {
      if (nums[i] > 0) {
          [nums[i], nums[pind]] = [nums[pind], nums[i]];
          pind++;
      }
  }

  for (let i = 0; i < pind; i++) {
      const val = Math.abs(nums[i]);
      if (val - 1 < pind && nums[val - 1] > 0) {
          nums[val - 1] = -nums[val - 1];
      }
  }

  for (let i = 0; i < pind; i++) {
      if (nums[i] > 0) {
          return i + 1;
      }
  }
  return pind + 1;
}
  module.exports = smallestMissingPositiveInteger;


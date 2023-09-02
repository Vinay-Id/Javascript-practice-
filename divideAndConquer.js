function majorityElement(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const mid = Math.floor(nums.length / 2);
  const left = majorityElement(nums.slice(0, mid));
  const right = majorityElement(nums.slice(mid));
  if (left === right) {
    return left;
  }
  const leftCount = nums.filter((num) => num === left).length;
  const rightCount = nums.filter((num) => num === right).length;
  return leftCount > rightCount ? left : right;
}

let arrx = [3, 2, 3];
console.log(majorityElement(arrx));

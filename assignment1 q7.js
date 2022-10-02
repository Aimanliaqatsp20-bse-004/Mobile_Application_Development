function first_last_10(nums)
{
  var end_pos = nums.length - 1;
  return nums[0] == 10 || nums[end_pos] == 10;
}


console.log(first_last_10([10, 3, 5,10]));

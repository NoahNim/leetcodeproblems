var twoSum = function (nums, target) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] !== nums[j]) {
                sum = nums[i] + nums[j]
                if (sum === target) return [i, j];
            }
        }
    }
};
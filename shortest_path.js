var findUnsortedSubarray = function(nums) {
    let sorted = nums.slice()
    sorted = sorted.sort((x,y) => x - y);
    let dif = 0;
    let min = nums.length, max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sorted[i] !== nums[i]) {
            min = Math.min(i, min)
            max = Math.max(i, max)
        }
    }
    
    let sum = max - min + 1;
    if (sum < 0) return 0;
    return sum
};

document.querySelector('footer p').innerHTML += '&copy; ' + new Date().getFullYear() + ' Rehmetjan Tursun. All rights reserved.';

// the leetcode twosum function
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        let index = nums.indexOf(diff);
        if (index !== -1 && index !== i) {
            return [i, index];
        }
    }
};

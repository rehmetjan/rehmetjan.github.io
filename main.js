// i want to show current year in the footer
document.querySelector('footer p').innerHTML += '&copy; ' + new Date().getFullYear() + ' Rehmetjan Tursun. All rights reserved.';

var twoSum = function(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};
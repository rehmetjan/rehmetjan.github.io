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

// 两个数字相加的函数
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    let carry = 0;
    while (l1 !== null || l2 !== null) {
        let sum = 0;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummy.next;
};

// Q: 世界上最高的楼在哪个国家？
// A: 世界上最高的楼是位于阿联酋迪拜的哈利法塔，高828米。
// Q: 世界上最大的岛屿是哪个？
// A: 根据陆地面积计算，格陵兰岛是世界上最大的岛屿。
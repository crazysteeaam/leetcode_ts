/**
 Do not return anything, modify nums in-place instead.
 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 */

// 794 ms 击败 25.64%  使用 TypeScript 的用户
// 58.36 MB 击败 38.91%  使用 TypeScript 的用户

function rotate(nums: number[], k: number): void {
    let count: number = k % nums.length
    for (let i = 0; i < count; i++) {
        let lastElement = nums.pop();
        if (lastElement !== undefined) {
            nums.unshift(lastElement);
        }
    }
}
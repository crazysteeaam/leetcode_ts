/**
 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */

// 65ms 击败 42.18% 使用 TypeScript 的用户
// 51.56MB 击败 28.02% 使用 TypeScript 的用户

function removeElement(nums: number[], val: number): number {
    let length: number = nums.length
    let door: number = nums.length -1
    for (let i: number = 0; i < length; i++) {
        if (nums[i] == val) {
            nums[i] = nums[door]
            nums[door] = 0
            length--
            door--
            i--
        }
        console.log(nums)
    }
    return length
}

// let nums: number[] = [3, 2, 2, 3]
// let val:number = 3

// let nums = [0,1,2,2,3,0,4,2]
// let val = 2

let nums = [4,4,0,1,0,2]
let val = 0

let new_length: number = removeElement(nums, val)
for (let j: number = 0; j < new_length; j++) {
    console.log(nums[j])
}
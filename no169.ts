/*
给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
你可以假设数组是非空的，并且给定的数组总是存在多数元素。
 */

// 64 ms 击败 80.43%  使用 TypeScript 的用户
// 53.38MB 击败 20.29% 使用 TypeScript 的用户

function majorityElement(nums: number[]): number {
    let count: number = 1
    let num: number = nums[0]
    for (let i = 1; i < nums.length; ++i) {
        if (num == nums[i]) {
            count++
        } else {
            count--
            if (count == 0) {
                num = nums[i]
                count = 1
            }
        }
    }
    return num
}


let nums: number[] = [0,0,0,1,1,1,1,0,0]
console.log(majorityElement(nums))
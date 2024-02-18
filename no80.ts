/*
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使得出现次数超过两次的元素只出现两次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 */

// 77 ms 击败 22.17% 使用 TypeScript 的用户
// 52.66 MB 击败 5.65% 使用 TypeScript 的用户

function removeDuplicates(nums: number[]): number {
    let r: number[] = [...nums];
    nums.length = 0
    let temp: number = -999
    let flag: boolean = false
    for (let index = 0; index < r.length; index++) {
        if (r[index] == temp && flag) {
            if (r[index] != r[index+1]){
                flag = false
            }
        } else if (r[index] == temp && !flag) {
            nums.push(r[index])
            flag = true
        } else if (r[index] != temp && !flag) {
            nums.push(r[index])
        } else {
            nums.push(r[index])
            flag = false
        }
        temp = r[index]
    }
    return nums.length
}


let nums: number[] = [1, 1, 1, 2, 2, 3]
// nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
let len: number = removeDuplicates(nums);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中 该长度范围内 的所有元素。
for (let i = 0; i < len; i++) {
    console.log(nums[i]);
}

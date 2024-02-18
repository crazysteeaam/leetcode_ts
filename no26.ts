function removeDuplicates(nums: number[]): number {

    return nums.length
}


let nums: number[] = [1, 1, 2]; // 输入数组
let expectedNums: number[] = [1, 2, 2]; // 长度正确的期望答案

let k: number = removeDuplicates(nums); // 对 nums 进行就地操作并返回长度

console.assert(k == expectedNums.length)
for (let i = 0; i < k; i++) {
    console.assert(nums[i] == expectedNums[i])
}

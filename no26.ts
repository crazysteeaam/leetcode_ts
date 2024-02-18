/**
 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。
 考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：
 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums 的其余元素与 nums 的大小不重要。
 返回 k 。
 */

// 70 ms 击败 76.66%  使用 TypeScript 的用户
// 53.16 MB 击败 5.08% 使用 TypeScript 的用户

function removeDuplicates(nums: number[]): number {
    let r: number[] = [...nums];
    nums.length = 0
    let temp: number = -999
    for (let key of r) {
        if (key != temp) {
            nums.push(key)
            temp = key
        }
    }
    return nums.length
}


let nums: number[] = [1, 1, 2]; // 输入数组
let expectedNums: number[] = [1, 2]; // 长度正确的期望答案

let k: number = removeDuplicates(nums); // 对 nums 进行就地操作并返回长度

console.assert(k == expectedNums.length)
for (let i = 0; i < k; i++) {
    console.log(nums[i])
    console.log(expectedNums[i])
    console.assert(nums[i] == expectedNums[i])
}

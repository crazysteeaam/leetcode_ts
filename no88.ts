// 58ms 击败 84.08% 使用 TypeScript 的用户
// 51.70MB 击败 10.10% 使用 TypeScript 的用户
// 下面算法的时间复杂度是 O(m+n)
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let index: number = 0
    let door: number = m
    for (let i: number = 0; i < n; i++) {
        console.log("i:", i)
        console.log("index:", index)
        while (index < m + n) {
            if (nums1[index] >= nums2[i]) {
                nums1.splice(index, 0, nums2[i])
                nums1.pop()
                console.log(nums1)
                index++
                door++
                break
            } else if (nums1[index] == 0 && index >= door) {
                nums1.splice(index, 0, nums2[i])
                nums1.pop()
                console.log(nums1)
                index++;
                break
            } else {
                index++;
            }
        }
    }
    console.log(nums1)
}

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
// merge([1], 1, [], 0)
// merge([0], 0, [1], 1)
// merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)
// merge([-1, 3, 0, 0, 0, 0, 0], 2, [0, 0, 1, 2, 3], 5)
merge([-1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0], 5, [-1, -1, 0, 0, 1, 2], 6)
function removeElement(nums: number[], val: number): number {
    let door:number = 0
    for (let i: number = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            nums[i] = 0
        }
    }

    return length
}

let nums: number[] = [3, 2, 2, 3]
let new_length:number  = removeElement(nums, 3)
for (let j: number = 0; j < new_length; j++) {
    console.log(nums[j])
}
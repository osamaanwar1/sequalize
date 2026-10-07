let nums = [3, 2, 2, 3, 4]
let val = 3
let k=0
for (let i = 0; i < nums.length; i++) {

    if(nums[i]!==val){
      nums[k]=nums[i]
        k++

    }



}


console.log(nums)
console.log(k)
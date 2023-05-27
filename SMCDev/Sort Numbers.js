function solution(nums){
    if (nums === null) {
        return nums = [];
    } else {
        nums.sort((a, b) => a - b);   
        return nums     
    }
}
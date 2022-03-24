function solution(nums) {
    var answer = 0, number=0;
    for(i=0;i<nums.length-2;i++){
        for(j=i+1;j<nums.length-1;j++){
            for(k=j+1;k<nums.length;k++){
                number=nums[i]+nums[j]+nums[k];
                var count=0;
                for(l=1;l<=number;l++){
                    if(number%l==0) count++;
                }
                if(count==2) answer++;
            }
        }
    }
    return answer;
}console.log(solution([1,2,3,4]))
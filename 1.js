function solution(arr) {
    var answer = [];
    var a = 0;
    
    answer.push(arr[0])
    for(i=1;i<arr.length;i++){
        if(arr[i]!==arr[i-1]) {
            answer.push(arr[i])    
        }
    }console.log(answer)
    return answer;
}solution([1,1,3,3,0,1,1])
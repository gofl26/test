function solution(n) {
    let answer = 0;
    let result = 1;
    
    result = n.toString(3).split('').reverse().join('')  //n.toString(a)  n을 a진법으로 변환해줌 
    
    
    answer = parseInt(result,3) //parseInt(a,n)   a를 n진법으로 바꿔줌
    
    return answer;
}console.log(solution(45))
function solution(numbers) {
    var answer = [];
    var c = [];
    for(i=0;i<numbers.length-1;i++){
        for(j=i+1;j<numbers.length;j++){
            c.push(numbers[i]+numbers[j])
        }
    }//서로 다른 인덱스끼리 합친값을 c에 넣어준다
    c=c.sort((a,b)=>a-b)//c를 오름차순으로 정렬해준다
    answer.push(c[0])
    for(i=1;i<c.length;i++){
        if(c[i]!==c[i-1]) {
            answer.push(c[i])    
        }
    }//중복된 값을 빼준다.
    return answer;
} console.log(solution([2,1,3,4,1]))
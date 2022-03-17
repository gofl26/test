function solution(answers) {
    var answer = [];
    var a = [1,2,3,4,5]
    var b = [2, 1, 2, 3, 2, 4, 2, 5]
    var c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    var num = [0,0,0];
    var max = 0;
    
    for(i=0;i<answers.length;i++) {
        if(a[i%5]===answers[i]) num[0] += 1
        if(b[i%8]===answers[i]) num[1] += 1
        if(c[i%10]===answers[i]) num[2] += 1
    }
    max=Math.max(...num)
    for(i=0;i<num.length;i++){
        if(max===num[i]) answer.push(i+1)
    }

    return answer;
} console.log(solution([1,2,3,4,5]))
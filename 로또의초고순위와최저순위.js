function solution(lottos, win_nums) {
    var answer = [];
    var result = 0;
    var result0 = 0;
    var max = 0;
    var min = 0;
    for(i=0;i<lottos.length;i++) {
        if(lottos.indexOf(win_nums[i])!==-1) {
            result += 1
        } if (lottos[i]===0) {
            result0 += 1
        }
    }//맞춘갯수 result, 0의 갯수 result0 출력
    max=7-result-result0 >6 ? 6 : 7-result-result0
    min=7-result >6 ? 6 : 7-result
    
    return answer = [max,min];
} console.log(solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19]))
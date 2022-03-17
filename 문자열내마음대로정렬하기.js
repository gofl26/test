function solution(strings, n) {
    var answer = [];
    
    for(i=0;i<strings.length;i++){
        strings.sort((a,b)=> {
            if(a[n] > b[n]) return 1; //return 이 양수이면 오름차순 음수이면 내림차순 0이면 제자리
            if(a[n] < b[n]) return -1;
            if(a[n] === b[n]){
                if(a>b) return 1;
                if(a<b) return -1;
                return 0;
            }
        })
    }
    return answer=strings;
} console.log(solution(["sun", "bed", "car"], 1))
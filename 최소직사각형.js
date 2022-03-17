function solution(sizes) {
    var answer = 0;
    var a = [];
    var b = [];
    
    for(i=0;i<sizes.length;i++) {
        if(sizes[i][0]<sizes[i][1]) {
            sizes[i]=sizes[i].reverse()
        }
        a.push(sizes[i][0])
        b.push(sizes[i][1])
    }
    return answer = sizes[a.indexOf(Math.max(...a))][0]*sizes[b.indexOf(Math.max(...b))][1];
}   console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))
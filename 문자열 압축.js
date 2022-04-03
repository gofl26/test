// 데이터 처리 전문가가 되고 싶은 "어피치"는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 
// 최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 
// 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 
// 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
// 간단한 예로 "aabbaccc"의 경우 "2a2ba3c"(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 같이 
// 표현할 수 있는데, 이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다. 예를 들면, 
// "abcabcdede"와 같은 문자열은 전혀 압축되지 않습니다. "어피치"는 이러한 단점을 해결하기 위해 문자열을 
// 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.

// 예를 들어, "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 
// 잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 
// "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.

// 다른 예로, "abcabcdede"와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 "abcabc2de"가 되지만, 
// 3개 단위로 자른다면 "2abcdede"가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다. 이때 3개 단위로 
// 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.

// 압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 
// 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.
// -------------------------------------------------------------------------------------------
// 제한사항
// s의 길이는 1 이상 1,000 이하입니다.
// s는 알파벳 소문자로만 이루어져 있습니다.


function solution(s) {
    let answer = s.length;
    
    for (let i = 1; i <= parseInt(s.length / 2); i++) { // 정수로 나타내는 함수 parseInt(s.length / 2) 때문에 s의 문자수가 홀수이면 소수점 아래를 버림해준다.
        let str = "";
        let cnt = 1;
        let tempStr = s.substr(0, i); // 
        let idx = 0;
  
      for (idx = i; idx <= s.length; idx += i) { // 자른 문자열 수만큼 값을 더해준다.
        let nextStr = s.substr(idx, i);

        if (tempStr === nextStr) {
        cnt += 1;
        } else {
        if (cnt === 1) str +=  tempStr;
        else str = str + cnt + tempStr;

        cnt = 1;
        tempStr = nextStr;
            
        }
      }
        
      if (cnt === 1) str += tempStr;
      else str = str + cnt + tempStr;
        
      answer = Math.min(answer, str.length); // 이전에 작업한 문자열 수와 지금 문자열 수를 비교해서 작은 값을 answer에 넣어준다.
    }
  
    return answer;
  }
  console.log(solution("aabbacccc"))
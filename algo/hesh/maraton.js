//아이디어
//두배열을 정렬해서 참가자와 완주한선수들의 배열을 비교해서 같지않다면 참가자 리턴

function solution(participant, completion) {
    var answer = '';
      participant.sort()
      completion.sort()
    for(let i = 0; i < participant.length; i++){
        if(participant[i] !== completion[i]){
            return participant[i]
        }
    }
    answer = participant;
    return answer;
}
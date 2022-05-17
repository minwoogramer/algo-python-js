function solution(numbers, target) {
    //사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 숫자를 적절히 더하고 뺴서
    let answer = 0;//타겟넘버를 만드는 방법의 수
    bfs(0,0);//0,0부터 시작
    //[1,2,3]이 들어오면  1+2+3,1+2-3,1-2+3 이런식으로 경우의 수가 나옴 더하고 빼고 더하고빼고
    function bfs(i, s) {//깊이탐색 첫번째 i를기준으로 numbers의길이와 같을때 와 아닐때로 구분하자,같을때는 두번째 인자값을 target과 비교
        if( i === numbers.length  ) {
            if(s === target){//s로 받은 인자값이 target의값과 같을떄 경우의수를 더해주자
                answer++;
            }
        }
        else{
            bfs(i+1,s+numbers[i]);//dfs이므로 더하기를 먼저해주고 그다음 빼기를 해주자
            bfs(i+1,s-numbers[i]);
        }
    }
    return answer;
    
}
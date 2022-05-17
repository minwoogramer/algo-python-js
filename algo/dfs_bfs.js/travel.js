function solution(tickets){
    let answer = [];  //가능한 루트들을 담을 배열

    function dfs (extra, cur,route ) {
    //3가지 인자를 받는다. 남은 티켓, 현재 위치, 배열
         if(extra.length===0){
         //extra의 길이가 0이라는 것은 tickets에 있는 티켓을 모두 사용했다는것.
         //그렇지 않을 경우엔 길이가 0이 될 수 없다.
             answer.push(route)
             //모두 사용했으니 route를 answer에 푸쉬해주자. 
         }
         else{
         //길이가 0이 아니라면 아직 티켓이 남았다는 얘기
             extra.forEach(([departure, destination], idx) => {
             //forEach문으로 구조분해할당으로 하나의 배열마다 접근하고, 인덱스 가져온다.
                if( cur === departure){
                // 항상 출발지는 같아야한다
                     const newTickets = [...extra]; //티켓을  복사
                     newTickets.splice(idx,1)   
                     //cur과같은 출발지가 있는 배열을 빼준 배열을 만든다.

                     dfs(newTickets, destination, route.concat(destination))
                  //하나가 빠진 배열과 데스티네이션, 도착지를 추가한 배열을 재귀돌린다.
                  //한바퀴를 돈 상태에선 다음과 같을거다.
                 }
             });
         }
     }
     dfs(tickets , "ICN" , ["ICN"])
     //초기값을 설정한다. 인천에서 출발하여야하니 현재위치에 인천을,
     //배열안에도 인천을 넣어준 상태로 출발
     return answer.sort()[0];
     //오름차순 정렬해서 첫번째 요소만 꺼낸다.
 }
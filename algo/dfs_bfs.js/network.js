function solution(n, computers) {
    let answer = 0;//연결된 네트워크의 갯수
    console.log(computers)
    //컴퓨터의 개수 n
    //연결에대한 정보가 담긴 2차원배열 computers[i][j]
    //i번과 j가 방문되었다면 1
    //네트워크 방문할때마다 올리는 인자값 하나 정의
    //방문하지않았다면 false값주기
    //방문하면 true로 올려주기
    //양방향으로 풀어야할까 단방향으로 풀어야할까
    //110 0번노드
    //110 1번노드
    //001 2번노드
    
    //110 
    //111 1번노드는 0번과 2번노드 모두에 연결되어있으므로 1
    //011
    //대각선으로 대칭하므로 양방향
    let notVisited = new Array(n).fill(false) //컴퓨터의 갯수만큼 배열을 만들어준뒤 false값 주기
    //n이 3이라면 [false,false,false]
    //dfs정의
    function dfs(i){//
        console.log(i)
        console.log(notVisited[i])
        notVisited[i] = true//방문한 노드 true로 변경시켜주기
        for(let j =0; j< n ; j++){//컴퓨터의 갯수만큼 탐색하고 방문한 computers[i][j]가 1이고 아직 방문하지않았다면 dfs(j)반복호출
            if(computers[i][j] == 1 && notVisited[j] == false){
                dfs(j)//재귀함수 호출
            }
        }
    }
    //컴퓨터 배열의 길이만큼 탐색하여 방문하지않았다면 네트워크 갯수 더해줘야함
    for(let  i = 0;  i < computers.length; i++ ){
        if(notVisited[i] ==false){
            dfs(i);//재귀함수 호출
            answer++;
        }
    }
   
    return answer;
}
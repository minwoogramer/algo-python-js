
//bfs
//동작원리 = 큐
//구현 방법= 큐 자료구조(선입선출FIFO구조) push와 shift를 사용해 자료구조를 구현한다.

//최소값을 구하는 문제이기때문에 bfs가 더빠르다.
function solution(begin, target, words) {
    const visited = []
    const queue = []

    // 변환할 수 없는 경우
    if (!words.includes(target)) return 0 //words안에 타겟이 없을때 0을 반환한다.

    queue.push([begin, 0])//큐 시작

    while(queue) {//큐를 이용해 반복문사용
        const [word, count] = queue.shift()//큐에서 하나의 원소를 뽑아 출력 구조..분해...할당!
        visited.push(word)

        if (word === target) {//큐에서 뽑은 단어가 타겟에 있다면 카운트를 출력한다.
            
            return count
        }

        words.forEach((_word) => {
            let diff = 0

            if (visited.includes(_word)) return // 만약 내가 넣은 현재노드에 바뀐 단어가 없다면 아래반복문 실행

            for (let i = 0; i < word.length; i++) {
                if (word[i] !== _word[i]) diff++
            }

            if (diff === 1) {
                queue.push([_word, count + 1])
            }
        })
    }
}

//dfs
//스택(선입후출구조 or 후입선출구조  )
//stack을 정의하고 push와 pop을 사용해 스택 자료구조를 구현하거나 재귀함수(자기자신을 호출하는 함수)를 이용한다
//재귀 함수 이용
function check(word, target){ //단어 체크하는 함수 구현
    let diff = 0;
    for(let i=0;i<word.length;i++){
        if(word[i] !== target[i]) diff++;
    }

    if(diff > 1) return false;
    return true;
}

const visited = {};
let finalAns = 101;

function dfs(words, target, word, ans){ //dfs 함수 구현
    if(target === word) {
        if(finalAns > ans) finalAns = ans;
    }

    for(let i=0;i<words.length;i++){   
        if(!visited[words[i]]){

            if(check(words[i], word)){
            visited[words[i]]=1;

                dfs(words, target, words[i], ans+1);//재귀함수 호출
                visited[words[i]]=0;
            }
        }
    }
}

function solution(begin, target, words) {
    let nowStr = begin + "";


    dfs(words, target, nowStr, 0);//재귀함수 호출

    if(finalAns === 101) return 0;

    return finalAns;
}


//bfs
//동작원리 = 큐
//구현 방법= 큐 자료구조

//최소값을 구하는 문제이기때문에 bfs가 더빠르다.
function solution(begin, target, words) {
    const visited = []
    const queue = []

    // 변환할 수 없는 경우
    if (!words.includes(target)) return 0 //words안에 타겟이 없을때 0을 반환한다.

    queue.push([begin, 0])//큐 시작

    while(queue) {
        const [word, count] = queue.shift()//큐에서 하나의 원소를 뽑아 출력 구조..분해...할당!
        visited.push(word)

        if (word === target) {//큐에서 뽑은 단어가 타겟에 있다면 카운트를 출력한다.
            
            return count
        }

        words.forEach((_word) => {
            let diff = 0

            if (visited.includes(_word)) return

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
//스택
//재귀 함수 이용
function check(word, target){
    let diff = 0;
    for(let i=0;i<word.length;i++){
        if(word[i] !== target[i]) diff++;
    }

    if(diff > 1) return false;
    return true;
}

const visited = {};
let finalAns = 101;

function dfs(words, target, word, ans){
    if(target === word) {
        if(finalAns > ans) finalAns = ans;
    }

    for(let i=0;i<words.length;i++){   
        if(!visited[words[i]]){

            if(check(words[i], word)){
            visited[words[i]]=1;

                dfs(words, target, words[i], ans+1);
                visited[words[i]]=0;
            }
        }
    }
}

function solution(begin, target, words) {
    let answer = 0;
    let nowStr = begin + "";


    dfs(words, target, nowStr, 0);

    if(finalAns === 101) return 0;

    return finalAns;
}

function solution(array, commands) {
    let answer = [];
    //i는 commands의 첫번째 숫자
    //j는 commands의 두번째 숫자
    //k는 commands의 세번째 숫자
    let i = 0;
    let j = 0;
    let k = 0;
    for (let l = 0; l < commands.length; l++) {
        i = commands[l][0]
        j = commands[l][1]
        k = commands[l][2]
        
        let copy = array.slice(i-1,j)//배열에서 첫번째는 -1을해줘야됌
        let sorted = copy.sort((a,b)=> a - b)//자바스크립트의 경우 sort시 숫자가 아닌 문자로 인식되기 때문에
                                             //sort((a,b)=>a-b)를 명시해줘야 숫자정렬이 된다. a-b는 오름차순이다.
    
        answer.push(sorted[k-1])//정렬한것중 k번째이므로 k-1
    }
    return answer;
}
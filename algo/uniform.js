function solution(n, lost, reserve) {
    lost.sort()//숫자가 순서대로 안나오는 테스트케이스가 존재함
    reserve.sort()
    let answer = n - lost.length//체육수업을 들을 수 있는 학생수는 훔친걸 제외한 체육복이 있는학생수
    //lost와 reseve가 같을때는 0이나온다 
    //여벌이 있는경우와 없는경우(다훔쳐간경우)가 존재
    //여벌이 없는경우 reserveStudent == lostStudent 일때  여벌이 있는애와 없는애의 배열이 일치할경우에는 n이 그대로나옴
   lost = lost.filter((lostStudent)=>{//lostStudent의 갯수를 구하기위해서 filter함수를 사용한다 
       let reserveIdx = reserve.findIndex(reserveStudent=> reserveStudent == lostStudent);
       //만족하는 요소중 가장 첫번째 요소를 반환한다.
       if(reserveIdx == -1 ){//findIndex값이 false라면 -1이 나오므로
           return lostStudent;
       }else{
           reserve.splice(reserveIdx,1);//reserveIdx번쨰 요소에서 한개 제거
           answer++
       }
       });
   
     lost.forEach(lostStudent => {
         // 5이고 [1, 3], [1 ,4 ,5]일 경우에는 5반환
        let reserveIdx = reserve.findIndex(reserveStudent =>lostStudent-reserveStudent == 1 || lostStudent-reserveStudent == -1);//앞에있는애와 뒤에있는녀석 모두 한명에게 빌리지 않을경우 -1 반환
        if(reserveIdx !== -1) {
            reserve.splice(reserveIdx,1);//reserveIdx번쨰 요소에서 한개 제거
            answer++;
        }});
    return answer;
    
    
}

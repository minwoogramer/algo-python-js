//아이디어  
//number = N 일때 나오는값을 무조건 1이 나옴
//number 값에 관계없이 N이 1일때 answer = N 값으로 나옴 , 하지만 만약 N >=8일경우 -1이 나옴 그 외의 경우
//number < N 일경우와 
//number > N 일경우로 나눌수있다.
//2^2 - (2/2) = 3 2^2 + (2/2) = 5 등등 같은숫자를 놓는다고하였을때 
//사칙연산 *, / , + , - 를 경우에 맞춰서 사용하면 됌
//중요한점은 N의 사용횟수에 따라 -1을 리턴할지 아니면 몇번 사용했는지를 리턴할지를 고민하는것
//똑같은 수가 반복해서 나오므로 javascript의 repeat메소드를 사용해야함
//N을 사용해 나올 수 있는 모든 경우의 수를 배열에 담은 다음 for문을 사용해 순회해서 사칙연산을하는방법

//시간복잡도
//알고리즘 DP 
//이전의 값을 재활용 하는 알고리즘
//이전의값을 이용해 시간복잡도를 줄일 수 있음
//memo = [] 배열을 만들어서 써먹어야함




function solution(N, number) {
    var answer = 0;
    let memo = Array(8).fill().map(() => new Array());//안이 비어있는 8개의 배열을생성한다.
    

   if(number / N == 1){
           return answer = 1;
   }
//     else{
//         if(number < N){
    //모든배열순회하면서 N반복에서 넣어버리기
//             for(let i = 0; i < N ; i ++){
//                 memo[i].push(Number(N.toString().repeat(i+1)));
    //반복해서 넣은것중 꺼내서 연산하기
//                 for(let j = 0; j < i; i ++){
//                     for (let x of memo[j]){
//                         for(let x2 of memo[i - j - 1]){
//                             memo[i].push(x + x2);
//                             memo[i].push(x - x2);
//                             memo[i].push(x * x2);
//                             memo[i].push(x / x2);
//                         }
//                     }
//                 }
//              else if(number > N){
//                      for(let i = 0; i < N ; i ++){
//                 memo[i].push(Number(N.toString().repeat(i+1)));
//                 for(let j = 0; j < i; i ++){
//                     for (let x of memo[j]){
//                         for(let x2 of memo[i - j - 1]){
//                             memo[i].push(x + x2);
//                             memo[i].push(x - x2);
//                             memo[i].push(x * x2);
//                             memo[i].push(x / x2);
//                         }
//                     }
//                 }
                    
//                 }
//             }
//         }
//     }
//         else{
//             return -1;
//         }
   else{
        

  for (let i = 0; i < 8; i++) {
    memo[i].push(Number(N.toString().repeat(i + 1))); //N을 반복하여 문자열로 만들어준후 숫자로변환하여 8
    for (let j = 0; j < i; j++) {
      for (let num1 of memo[j]) {
        for (let num2 of memo[i - j - 1]) {
          // 추가한 모든 숫자를 사칙연산을 사용하여 나올수 있는 경우의 수를 모두 계산하여 memo에 push한다.
          memo[i].push(num1 + num2);
          memo[i].push(num1 - num2);
          memo[i].push(num1 * num2);
          memo[i].push(num1 / num2 << 0);
        
        }
     
      }
    }
      console.log(memo)
    if (memo[i].includes(number)) return i + 1; // 해당 number가 arr에 존재하는 경우 해당 값을 반환한다.
  }
  return -1; // 모든 경우의 수를 조합했는데도 불구하고 8보다 작거나 같은 number가 존재하지 않는 경우 -1을 반환한다.
}
  
}
function solution(number, k) {
   
    let numbering = number.split("").map(Number);//문자열을 분해해서 배열로 만들어주자
    let arr =[];
    
     //반복되는 수는없음
    //k가 최댓값일때 나올수 있는 가장 큰 숫자는 9
    //numbering에서 k개의수를 제거했을때 얻을 수 있는 배열을 구현하면 끝남
    //arr.pop()사용하면 마지막요소를 제거하고 그요소를 반환한다.
    for(let i=0; i < numbering.length;i++){
        let x = numbering[i];
        
        while(true){
            //다지웠을때 멈춰야함
            if(k == 0){
                break; 
            }
            //arr현재숫자가 마지막 숫자보다 작을떄 arr 마지막 숫자를 제거해야함 현재숫자는[arr.length-1]번째 마지막숫자는 for문에서 돌고있는 numbering[i]임
            if(arr[arr.length -1] < x){
                arr.pop();
                k--;
            }
            else{
                break;
            }
            
        }
        arr.push(x);//제거하고 숫자넣기
        
    }
    //뒤에서부터 k개만큼 제거하려면 arr.length -k부터 k까지 splice로 설정해줘야함
        arr.splice(arr.length - k, k);
        let answer = arr.join('');
           
        return answer;
}
   //조합을 쓰기엔 number의 크기가 너무크다 앞에서부터 제거해줘야할듯
function solution(numbers) {
    var answer = '';
     //배열에 담겨있으니 스프레드 연산자로 빼줘서 각각에대해 더해줘야함
    let number=[...numbers]
    
     const result = number.sort((a, b) => {//순서를 재배치해 가장 큰수를 만들려면 6 10 2 를 내림차순으로 정렬하면
         //6210
         //3,30,34,5,9를 내림차순으로 정렬하면 9,5,34,3,30
           //a (뒤에 있는 값을 의미)가 더 클 때만 b - a 의 결과로 음수가 나오겠죠? 그러면 결국 뒤에 있는 값이 클 때 변경이                일어나기 때문에, 큰 값은 뒤로 가게 되고 작은 값은 앞으로 오게 돼서 내림차순 정렬이 됩니다.
        return ('' + b + a) - ('' + a + b);//''+b+a와''+a+b비교해서 내림차순으로 정렬후 넣어준다.
       
    }).join('');
    
   if(result[0]==='0'){//배열의 첫번째가 0일경우에는 0을 뱉어주자
       return '0';
   }
    else{
        return result;
    }
    return answer;
}
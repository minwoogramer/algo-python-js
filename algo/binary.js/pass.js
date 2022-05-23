function solution(n, times) {
    //가장 첫두사람은 바로심사를 받으러감
    //이분탐색은 정렬이된리스트를 필요로하지만 이 문제는 리스트를 사용하면 안됀다.
        //필요한것 arr ,target,start, end ,mid 값
        //여기서 target == n , arr = times
     let [start, end] = [1, Math.max(...times) * n] //time(심사관이 한 명을 심사하는데 걸리는 시간)의 최소값 start, 최대값 end
     //각각의 times 배열의 최대값에 사람의 수만큼 곱해주면 됌
     //반복문을 돌며 이두가지를 왔다가 갔다 해야함
     //기준을 둘 mid는 두개합한거를 2로나눈값
        while (start <= end) {
            let mid = Math.floor((start + end) / 2)//이분탐색을 하기위해서 mid값을 지정해준다 소수값을 없애기위해 floor사용하는것!
            let people = 0;
            times.forEach(e =>{
    
                //처음에는 최대값 60/2로 mid가담김
                //e에는 times의 요소들이 담김
                
                people = people + Math.floor( mid / e ) //mid시간 / times 각각의 요소들 => mid시간동안 처리할 수 있는 사람의 수
                
              
            })
            //people은 mid 시간 동안 처리 할 수 있는 사람의 수
            if (people >= n) {
               end = mid - 1 //최대값은 mid -1을해줌
            } else {
               start = mid + 1//최솟값은 mid + 1을 해줌
            }
        }
      
        
        return start;
    }
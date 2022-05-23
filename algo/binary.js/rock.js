function solution(distance, rocks, n) {
    //arr, target, start, end, mid
    //rocks 바위들의 위치가 담긴 배열
    //distance 출발점과 도착점간의 거리 mid값은 distance를 반으로 나눈값?
    //바위 n개를 제거한 각 지점 사이 거리 최소값중 가장 큰 값을 구해야함
    //바위 n개를 제거하는 과정을 이분탐색으로 구현
    var answer = 0;
    rocks.sort((a,b)=> a - b )
    let [start, end] = [1, distance]
    while(start <= end){
        let removeRock = 0;//제거된 바위의 갯수
        let preRock = 0;//앞에있는 바위
        let mid = Math.floor((start + end) / 2)
        for(let i = 0; i < rocks.length ; i ++){
            if(rocks[i] - preRock >= mid){
                preRock = rocks[i]
            }
            else 
                removeRock ++;
        }
        if (removeRock > n) {
            end = mid - 1;
       
            //제거된 바위 갯수가 n보다 작거나 같으면 start를 mid + 1
    } else {
          start = mid + 1;
            // 제거된 바위 갯수가 n보다 크면 end를 mid - 1
        
        if(start >= answer){
            answer = start;
        }
      answer = Math.max(answer); 
    }
  }
    
    
    return (answer-1) > 0 ? answer -1 : 0
}
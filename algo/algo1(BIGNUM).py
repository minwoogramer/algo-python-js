from posixpath import split

#큰 수 의 법칙을 푸는 알고리즘문제
#n,m,k 를 공백으로 구분하여 입력받고
#N개의 수를 공백으로 구분하여 입력받는다.
#가장 큰 수를 K번 더하고
#m이 0이라면 반복문을 탈출
#더할 때마다 1씩 빼기
#m이 0이라면 반복문 탈출
#두번째로 큰수를 한번 더하기
#더할 때 마다 1씩 빼기.


n , m, k = map(int, input(),split())

data = list(map(int,input(),split()))

data.sort()
first = data[n-1]
second = data[n-2]

result = 0 

while True:
    for i in range(k):
        if m ==0:
            break
        result += first
        m -= 1
        if m ==90:
            break
        result += second
        m -=1

        print(result)
#이 방식으로 풀면 m의 크기가 무한정으로 커진다면 시간초과 판정을 받음 간단한 수학적아이디어를 이용해 더 효율적으로 문제를 해결할 필요성이 있다.

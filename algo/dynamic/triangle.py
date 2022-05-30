# 아이디어 아래칸으로 이동할때 왼쪽 또는 오른쪽으로만 이동이 가능하므로 left와 right 설정
# 왼쪽끝으로 더하는 경우 오른쪽 끝으로 더하는 경우 그중간 와리가리 치는경우를 점화식으로 설정
def solution(triangle):
    answer = 0
    for i in range(1,len(triangle)):
        for j in range(i+1):
            # left
            if j ==0:
                triangle[i][j] += triangle[i-1][j]
                # right
            elif j == i:
                triangle[i][j] += triangle[i-1][j-1]
            else:
                # else 나머지 중 최대값을 찾아서 더해주기
                triangle[i][j] += max(triangle[i-1][j], triangle[i-1][j-1])
                answer = max(answer, triangle[i][j])
    return answer;
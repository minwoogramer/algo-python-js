# 아이디어
#set함수써서 중복제거후 find 사용해서 일치하는값없으면 false return =>오류나옴
#1.set() 
def solution(phone_book):

    
    set(phone_book)#중복제거
    hash_table = {}#해쉬테이블 생성

    # 맨 처음 가장 짧은 길이를 저장. min.
    min_len = len(phone_book[0])

    for target in phone_book:
        # loop마다 본인 정보를 hash table에 저장.
        hash_table[hash(target)] = target
        # min길이부터 +1씩 해서 본인 길이까지 hash table에서 검색.
        # 있으면 false, 없으면 true-계속 진행.
        for i in range(min_len,len(target)):
            try:
                if hash_table[hash(target[0:i])]:
                    return False
            except KeyError:
                print('에러')
                

    return True
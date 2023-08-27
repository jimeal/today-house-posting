# 오늘의 집 (제로베이스 실습)

## 1. json-server 설치 및 실행
```bash
  yarn add -D json-server
  npm i -D json-server
```

```bash
 yarn db
 npm run db
 json-server --watch ./db.json
```
http://localhost:3000   
<br>
<img src="images/rd-json-server.jpg" alt="" style="width: 500px">   

<br>   

## 2. 작업내용 (멀티페이지로 작업)

- [x] index(main) - nav 열기 닫기
- [x] post-list - 리스트 목록 나타내기
- [x] post-detail - 리스트 목록 상세내용
- [x] write - 글쓰기 리스트목록에 추가하기
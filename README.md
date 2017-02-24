##### - Coding Test

---

### # 목적

반응형을 지원하는 RESTful 웹서비스를 구축한다.  
이 서비스는 __회원가입__ , __회원목록__ 페이지로 이루어져 있다.  
- 회원가입 : https://ctmembers.herokuapp.com/regist
- 회원목록 : https://ctmembers.herokuapp.com/list

<br>

### # 요구사항 및 기능
1. 회원가입 페이지  
  a. 항목 - 회사명/이름/아이디/비밀번호  
  b. 회원가입이 완료되면 회원목록 페이지로 이동한다.  
  c. 헤더의 '목록으로' 을 클릭하면 회원목록 페이지로 이동한다.  
  
2. 회원목록 페이지  
  a. 테이블 형식으로 회원 목록을 보여준다.  
  b. 헤더의 '회원가입' 을 클릭하면 회원가입 페이지로 이동한다.

3. 반응형 웹  
  a. 다음의 3가지 분류로 화면을 대응한다.  
  b. Break Point 는 각 환경별로 가장 보편적으로 사용되는 화면 사이즈로 설정한다.  
    - Desktop : 1366x768
    - Tablet : 1024x768
    - Mobile : 750x1334

4. 회원 API 서버  
  a. RESTful API 를 지원하는 __json-server__ 를 이용  
  b. Heroku 에서 서비스 되도록 등록  
    - http://json-db.herokuapp.com/members  

<br>
  
### # 기술스택
1. 개발 환경  
  a. OS - Windows 10 64bit  
  b. Dev Tool - VS Code  
  c. Browser - Chrome v56, IE 11, iPhone6 Safari  
  d. Hosting - Heroku NodeJS Server  

2. 사용언어 및 도구  
  HTML, CSS, Javascript, Sass, node.js, Github, SoureTree, Heroku, Postman  

3. Node 모듈   
  a. http-server : 로컬에서 개발서버를 구성  
  b. json-server : 회원 API 서버 구성  
  c. node-sass : Sass 컴파일러  
  d. group-css-media-queries : CSS 의 미디어쿼리를 그룹핑  
  e. csso : CSS 를 압축  

4. 웹표준, 웹접근성 평가도구
  a. W3C Markup Validation Service
  b. Chrome extension OpenWAX, WAVE, Page Speed 
  
<br>



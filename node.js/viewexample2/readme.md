Viewexample2
==============================

웹 서버에서 사용자 요청에 대한 결과를 응답으로 보낼 때 지금까지는 응답객체의 write()메소드 또는 send()메소드 안에 직접 웹문서 내용을 입력했습니다. 그런데 웹 서비스를 시작한 이후 유지관리를 할 떄는 자바스크립트 코드 안에 응답 문자열을 입력하는 것보다 응답 웹 문서를 별도 파일로 만들어 사용하는것이 훨씬 좋다고합니다. 응답웹문서의 모양을 미리 만들어 둔것을 템플릿이라고 합니다. 익스프레스에서는 따로 만들어 둔 템플릿 파일과 결과 이 들어있는 변수를 사용해 처리 결과에 따른 응답 웹문서를 만들 수 있습니다.

--------------------------------
pug 포맷은 웹 문서의 태그를 그대로 사용하지 않고 최대한 간단한 형태로 입력하기 때문에 공백과 들여쓰기를 기준으로 태구의 구조가 결정됩니다. 따라서 pug 포맷을 사용하면 HTML 태그를 사용하는것보다 훨씬 적은 내용을 입력해도 웹 문서를 만들 수 있습니다.
템플릿 파일을 먼저 만들고 pug뷰 엔진에서 응답 웹 문서를 만들때 사용합니다.

![image1](http://drive.google.com/uc?export=view&id=1jF-7BugEGv0iE5QVzfmaXENT81mqxs0p "image1")
![image2](http://drive.google.com/uc?export=view&id=1Ni4LPw1-i30oOsAHYPcBmlWTQLUunScN "image2")

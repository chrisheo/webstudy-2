Viewexample
================================

웹 서버에서 사용자 요청에 대한 결과를 응답으로 보낼 때 지금까지는 응답객체의 write()메소드 또는 send()메소드 안에 직접 웹문서 내용을 입력했습니다. 그런데 웹 서비스를 시작한 이후 유지관리를 할 떄는 자바스크립트 코드 안에 응답 문자열을 입력하는 것보다 응답 웹 문서를 별도 파일로 만들어 사용하는것이 훨씬 좋다고합니다. 응답웹문서의 모양을 미리 만들어 둔것을 템플릿이라고 합니다. 익스프레스에서는 따로 만들어 둔 템플릿 파일과 결과 이 들어있는 변수를 사용해 처리 결과에 따른 응답 웹문서를 만들 수 있습니다.

------------------------------

응답 웹문서의 기본형태를 뷰 템플릿 파일에 만들어두고 사용합니다. 뷰 템플릿을 사용하면 웹문서의 기본형태는 뷰 템플릿으로 만들고 데이터베이스에서 조회한 데이터를 이 템플릿 안의 적당한 위치에 넣어 웹문서를 만들게 됩니다.
![image1](http://drive.google.com/uc?export=view&id=1IPf2dEgKJWwiw-Fm6uC_sOzWu28CyUTd "image1")
![image2](http://drive.google.com/uc?export=view&id=13-hNeWQS43HSv72LwumbDDne8I4MyIKU "image2")
![image3](http://drive.google.com/uc?export=view&id=15gknSR7JQ7drek9xnTIOyi727FzjVtBL "image3")

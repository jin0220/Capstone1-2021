# Capstone1-2021: 영냠사

## 프로젝트 설명 
다양한 영양정보 컨텐츠와 제품의 영양 성분을 알려주는 애플리케이션

- 개발 환경: VSCode
- 프레임워크: React Native
- 개발 언어:  JavaScript
- 데이터베이스: Firebase

## 프로젝트 목표(개요)
1) 식품을 어플에 검색하거나 어플 내 카메라로 식품의 바코드를 인식하면 해당 식품의 영양정보를 알려줌
2) 일상생활에서 접할 수 있는 영양정보를 다양한 컨텐츠를 통해 전달 
3) 사용자가 보유한 알레르기나 사용자가 선호하는 제품을 즐겨찾기

## 프로젝트 구조
- 메인 화면
  - 로그인/회원가입 페이지
  - 영양 컨텐츠 페이지
  - 바코드 스캔 페이지
- 제품 리스트 화면
  - 식품 상세 페이지
- 검색 화면 
- 마이페이지 화면
  - 알레르기 관리 페이지
  - 즐겨찾기 페이지

## 프로젝트 기능
### 1. 앱 아이콘 및 런치 스크린

### 2. 메인 화면
![슬라이드12](https://user-images.githubusercontent.com/76260153/145685721-b833e225-4e90-478e-b166-3cce1373a8a4.PNG)
- 왼쪽 상단에는 로그인/회원가입 페이지로 넘어갈 수 있는 버튼 배치
- 우측 상단에는 바코드 스캔 페이지로 넘어갈 수 있는 버튼 배치
- 슬라이드 이미지 배너를 배치
- 슬라이드 이미지 배너 밑으로 영양 컨텐츠를 카드 형식으로 배치

#### 1. 로그인/회원가입 페이지 
![슬라이드13](https://user-images.githubusercontent.com/76260153/145685782-85168c77-1900-46d9-8464-f8c1b59e9560.PNG)
- 메인 화면에서 버튼을 누르면 로그인을 할 것인지 회원가입을 할 것인지 선택할 수 있도록 함

- 회원가입 페이지
![슬라이드14](https://user-images.githubusercontent.com/76260153/145685802-faeee1d5-4fb5-4402-be49-6467088e6570.PNG)
  - 회원가입은 아이디, 이름, 비밀번호를 받음
  - 아이디, 이름 폼에 글자가 입력되면 동그라미 체크 아이콘이 뜨도록 함
  - 비밀번호 폼에 눈 아이콘을 클릭하면 비밀번호 내용을 볼 수 있도록 함

- 로그인 페이지
![슬라이드15](https://user-images.githubusercontent.com/76260153/145685836-48954c64-5bbb-4d01-a217-b8875f7405e0.PNG)
  - 회원가입 페이지와 같은 효과를 줌

#### 2. 영양정보 컨텐츠 페이지
![슬라이드16](https://user-images.githubusercontent.com/76260153/145685910-c1d8b74a-3306-4c2e-81d7-7dc72c8b9a27.PNG)
- 크게 제목, 출처, 내용으로 구분하여 영양정보 컨텐츠를 제공

#### 3. 바코드 스캔 페이지
![슬라이드17](https://user-images.githubusercontent.com/76260153/145685947-232ec609-2e2d-40e5-bb9e-a81c4e83def4.PNG)
- 바코드 섹션 외의 화면은 어둡게 처리함
- 식품 바코드 인식에 성공하면 해당 식품의 상세페이지로 넘어감
- 식품 바코드 인식에 실패하면 오류 페이지를 띄우도록 함 
![프레젠테이션1](https://user-images.githubusercontent.com/76260153/145686097-9cf69a29-7e35-4e50-ad72-1a8fb343d27e.png)
  - 바코드 인식 오류 페이지로 해당 식품의 정보, 의견에 대해 남길 수 있는 폼 

### 3. 제품 리스트 화면
![프레젠테이션2](https://user-images.githubusercontent.com/76260153/145686223-9c0e2f7a-fe91-4f70-9741-a84744f17600.png)
- 식품의 정보를 가져오는 HACCP API의 식품 데이터 중 제품 이미지, 제조사, 제품명을 리스트 형식으로 표현
- 제품 클릭 시 해당 식품의 상세 페이지로 넘어가도록 구현

#### 1. 식품 상세 페이지
![슬라이드18](https://user-images.githubusercontent.com/76260153/145686312-fa4d24c8-c7e1-4012-bb0d-d15b41cd4002.PNG)
- 식품 상세 페이지의 우측 상단에는 해당 식품을 즐겨찾기 할 수 있는 버튼 배치
- 제품 이미지, 제조사, 제품명을 볼 수 있음 
- 식품첨가물은 리스트 형식으로 구현
- 식품첨가물 클릭시 해당 식품첨가물의 정보를 팝업창으로 확인 가능
  - 식품첨가물 팝업창
    ![슬라이드20](https://user-images.githubusercontent.com/76260153/145686492-47e15cf1-96c4-4f61-a51a-4fa7329ac80a.PNG)
 
![슬라이드19](https://user-images.githubusercontent.com/76260153/145686535-9a1ad6a2-430b-421b-b05e-76cd1506e3b5.PNG)
- 식품의 원재료, 영양정보, 알레르기를 볼 수 있음
- 영양정보는 g당 %를 확인 할 수 있도록 그래프 형식으로 표현
- 해당 식품에 알레르기 유발물질이 포함된다면 알레르기 정보가 뜨도록 구현

### 4. 검색 화면
![슬라이드21](https://user-images.githubusercontent.com/76260153/145686633-3ce76a79-3791-4857-b945-d7b9d8e84adb.PNG)
- 검색창에 식품 이름 검색시 해당 검색어가 포함된 식품들을 볼 수 있음
- 식품 선택시 해당 식품의 상세페이지(3-1 식품 상세 페이지)로 넘어감

### 5. 마이페이지 
![슬라이드22](https://user-images.githubusercontent.com/76260153/145686698-b62f4b5f-a70e-4097-9628-f7cc73b94418.PNG)
- 아이디와 사용자의 알레르기 보유 갯수를 보여줌
- 알레르기 섹션의 우측 + 버튼 클릭시 알레르기 관리를 할 수 있음

#### 1. 알레르기 관리
![슬라이드23](https://user-images.githubusercontent.com/76260153/145686766-0080b53e-cc07-485b-b6b2-88d037167f48.PNG)
- 체크박스를 통해 알레르기를 관리 할 수 있음

#### 2. 즐겨찾기 페이지
![슬라이드24](https://user-images.githubusercontent.com/76260153/145686784-536e7bc3-9528-47f6-97ca-8375514c2c47.PNG)
- 3-1의 식품 상세 페이지에서 즐겨찾기를 한 식품들을 리스트 형식으로 구현
- 식품 선택시 해당 식품의 상세 페이지로 넘어감

## 프로젝트 결과물
프로젝트 영상: https://youtu.be/9LeQqFQrNEA

# CODE GYM

(홈페이지 혹은 로고 이미지 첨부)

## 📖 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [팀소개](#팀소개)
3. [프로젝트 계기](#프로젝트-계기)
4. [주요기능](#주요기능)
5. [적용 기술 및 기술적 의사결정](#적용-기술-및-기술적-의사결정)
6. [개발기간](#개발기간)
7. [기술스택](#기술스택)
8. [와이어프레임](#와이어프레임)
9. [ERD](#ERD)
10. [프로젝트 파일 구조](#프로젝트-파일-구조)
11. [Trouble Shooting](#trouble-shooting)

## 👨‍🏫 프로젝트 소개

코딩 문제 풀이를 공유하고 소통할 수 있는 알고리즘 풀이 뉴스피드입니다.

> ### "구글링 대신, 한곳에서 다양한 풀이를!!"

알고리즘 풀이를 찾고 공유하는 과정을 간소화하여, 효율적인 학습과 소통을 돕는 플랫폼을 구현했습니다.

## 팀소개

- 👑 악랄한 팀장 **박민준**

- 🎨 편해진 세상에 적응 못한 디자이너 **김문식**

- 💣 버전 핵폭탄 팀원 **김은지**

- 🥔 스타일과 친하지 않은 감자 **박채현**

- 🍠 감자 파트너 고구마 **이지원**

## 프로젝트 계기

알고리즘 풀이를 찾는 데 소요되는 시간을 줄이고, 다양한 관점을 손쉽게 접할 수 있는 커뮤니티를 만들고자 시작한 프로젝트입니다. React와 Vite로 구성된 프론트엔드, Supabase로 관리되는 데이터베이스를 활용해 효율적인 사용자 경험을 제공하고자 합니다.

## 주요기능

### 🛡 Supabase 회원가입 및 로그인

- Supabase를 이용한 간편한 회원가입 및 로그인 기능을 제공합니다.
- 회원가입: 닉네임, 이메일, 비밀번호를 입력하여 간단히 계정을 생성할 수 있습니다.
- 로그인: 기존에 가입한 이메일과 비밀번호로 안전하게 로그인할 수 있습니다.

<details>
<summary>미리보기</summary>
<div markdown="1">

* 회원가입
![회원 가입 기능](https://github.com/user-attachments/assets/d28bffa7-b741-4640-9c4e-efebcaaec4ee)

* 로그인
![로그인 기능](https://github.com/user-attachments/assets/9c1af48b-a2af-47c4-bebc-d0dc02cec830)


<br>
</div>
</details>

### 📝 회원 정보 수정

- 회원은 프로필 관리 페이지에서 이메일 변경과 프로필 사진 업데이트가 가능합니다.
- 프로필 사진은 로컬에서 이미지를 업로드하거나 기본 이미지로 설정할 수 있습니다.
- 개인정보는 Supabase의 보안 정책을 따르며 안전하게 처리됩니다.

### 🖋 풀이 포스트 CRUD

- Create: 로그인 상태에서 알고리즘 문제와 언어별 풀이를 작성하여 포스트를 업로드할 수 있습니다.
- Read: 포스트 카드를 클릭하면 디테일 페이지에서 게시글 내용을 확인할 수 있습니다.
- Update: 작성자는 "수정하기" 기능을 통해 포스트 내용을 수정할 수 있습니다.
- Delete: 작성자는 "삭제하기" 기능을 통해 포스트를 삭제할 수 있습니다.

### 🔍 포스트 검색

- Supabase.textSearch()를 활용해 키워드를 입력하여 포스트를 검색할 수 있습니다.
- 태그 필터를 이용해 특정 언어(예: Python, Java, JavaScript, C++, C#)별로 포스트를 검색할 수 있습니다.

## 적용 기술 및 기술적 의사결정

### Redux Toolkit

모든 팀원의 동의하에 여러 컴포넌트에서 공유되는 상태 관리를 위해 **Redux Toolkit (RTK)**을 적용하기로 결정했습니다. 각 공유 상태마다 **slice 파일**을 생성하고, 그 안에 관련된 리듀서 함수를 작성해 체계적으로 관리했습니다. 이를 통해 코드의 가독성을 높이고 상태 관리의 복잡성을 줄였습니다.

### Custom Hook 활용

**포스트 가져오기**, **로그인 상태 관리** 등 반복적으로 사용되는 로직을 **Custom Hook**으로 분리하여 구현했습니다.  이 접근 방식을 통해 코드의 재사용성을 높이고, 컴포넌트의 로직을 단순화하여 유지보수를 용이하게 만들었습니다.

### react-markdown 라이브러리 사용

포스트에서 **코드를 언어별로 구분하여 깔끔하게 표시**할 필요가 있었습니다. 이 요구를 충족하기 위해 **react-markdown** 라이브러리를 도입하여 **다양한 프로그래밍 언어의 문법을 지원**하는 기능을 구현했습니다. 이를 통해 사용자 경험을 개선하고, 코드 가독성을 높였습니다.

### Supabase Database 사용

**회원가입, 로그인, 로그아웃** 등 인증과 유저 데이터 관리를 위해 **Supabase Database**를 활용했습니다. Supabase의 간단한 API와 실시간 데이터베이스 기능을 통해 빠르고 효율적인 개발이 가능했습니다. 데이터 보안과 안정성 측면에서도 Supabase가 적합하다고 판단했습니다.

### toastify와 sweetalert2

**유저 알림** 기능에서 깔끔하고 직관적인 UI를 제공하기 위해 **toastify**와 **sweetalert2** 라이브러리를 적용했습니다. toastify는 간단한 알림 메시지를 표시하는 데 사용되었으며, sweetalert2는 사용자 입력과 관련된 알림창에서 유용하게 활용되었습니다. 이 두 가지 라이브러리를 통해 알림 경험을 한층 더 세련되게 만들었습니다.

## ⏲️ 개발기간

- 2024.11.15(금) ~ 2024.11.21(목)

## 📚️ 기술스택

### ✔️ Language

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### ✔️ Version Control

![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

### ✔️ IDE

![VSCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

### ✔️ Framework / Library

`react": ^18.3.1` ,
`react-dom: ^18.3.1` ,
`react-icons: ^5.3.0` ,
`react-markdown: ^9.0.1` ,
`react-redux: ^9.1.2` ,
`react-router-dom: ^6.28.0` ,
`react-sweetalert2: ^0.6.0` ,
`react-toastify: ^10.0.6` ,
`redux: ^5.0.1`,
`rehype-highlight: ^7.0.1` ,
`styled-components: ^6.1.13` ,
`styled-reset: ^4.5.2`,
`sweetalert2: ^11.14.5` ,
`uuid: ^11.0.3`,
`@reduxjs/toolkit: ^2.3.0` ,
`@supabase/supabase-js: ^2.46.1` ,
`@emotion/react: ^11.13.3` ,
`@emotion/styled: ^11.13.0` ,
`@mui/icons-material: "^6.1.7` ,
`@mui/material: ^6.1.7`

### ✔️ Deploy

![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### ✔️ Database Manage System

![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)

## 와이어프레임
### 전체 와이어프레임
![image](https://github.com/user-attachments/assets/46abacf7-da30-42c9-b101-c5362b75a7b9)

<details>
<summary>회원가입 & 로그인</summary>
<div markdown="1">

![SignUpLogin](https://github.com/user-attachments/assets/ee7c4346-0064-4725-818d-653611bf265e)

<br>
</div>
</details>

<details>
<summary>홈 페이지</summary>
<div markdown="1">

![Home](https://github.com/user-attachments/assets/3635df14-1b5e-43ae-a583-f52ea371a4eb)

<br>
</div>
</details>

<details>
<summary>마이 포스트</summary>
<div markdown="1">

![MyPage](https://github.com/user-attachments/assets/ad05645f-5f36-4618-96bc-4938d778873a)

<br>
</div>
</details>

<details>
<summary>디테일 페이지</summary>
<div markdown="1">

![Details](https://github.com/user-attachments/assets/b629823f-2e98-465e-ad25-d6040aab6ed4)

<br>
</div>
</details>

<details>
<summary>마이 페이지</summary>
<div markdown="1">

![MyPage](https://github.com/user-attachments/assets/e9f2ac62-7255-4843-a4a9-bb0a9e2e1eb5)

<br>
</div>
</details>

<details>
<summary>글 쓰기 페이지</summary>
<div markdown="1">

![Write](https://github.com/user-attachments/assets/728b8a95-86e8-4db5-82eb-d788038f474a)

<br>
</div>
</details>

<details>
<summary>글 수정 페이지</summary>
<div markdown="1">

![Update](https://github.com/user-attachments/assets/b701779b-618b-4dc0-a18d-bbac1b8efc08)

<br>
</div>
</details>

## ERD

![Code-Gym-ERD](https://github.com/user-attachments/assets/96f00c96-126e-4915-b422-d28078fa2271)

## 프로젝트 파일 구조

```
team_code_gym
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── api
│   ├── assets
│   ├── components
│   │   ├── button
│   │   ├── detail
│   │   ├── header
│   │   ├── home
│   │   ├── markdown
│   │   ├── my_page
│   │   ├── my_post
│   │   ├── postCards
│   │   ├── signup_login
│   │   └── write
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── redux
│   │   ├── config
│   │   └── slices
│   ├── shared
│   ├── styles
│   │   └── ...
│   └── util
└── public
    ├── fonts
    └── images

```

## Trouble Shooting

### yarn 버전 문제

#### ⚙️ 문제 상황 및 원인 분석

프로젝트를 로컬에서 실행하기 위해 yarn 명령어를 사용했지만 팀원들끼리 Yarn 버전 차이로 인해 의존성 설치 과정에서 문제가 발생했습니다. 일부 팀원은 Yarn 3.x (Berry)를 사용하고 있었지만, 다른 팀원들은 Yarn 1.x를 사용하고 있었습니다.

Yarn 3.x는 **PnP(Plug'n'Play)**라는 새로운 기능을 기본적으로 사용하며, 기존 Yarn 1.x의 node_modules 디렉토리 기반 방식과 호환되지 않기 때문에 발생하는 문제입니다.

#### 🚀 Yarn 버전 통일의 중요성

서로 다른 Yarn 버전에서 생성된 yarn.lock 파일은 의존성 충돌의 원인이 될 수 있기 때문에 팀원 간 환경 차이를 맞추는 것이 중요합니다

### Supabase 이미지 업로드 과정

#### ⚙️ 문제 상황 및 원인 분석

Supabase의 storage에 이미지를 올리고 해당 URL을 가져와서 관련 항목이 있는 필드에 넣으려고 하였으나 storage에 넣는 것부터 문제가 발생하였고 이미지를 넣은 후에도 URL을 가져오는데 계속적인 권한 문제가 발생하였습니다. 

#### 🚀 Supabase의 권한 관리의 중요성

Supabase는 각 테이블 및 스토리지별로 권한을 설정 할 수 있으며 이 권한 설정 부분이 코드 작성 이전에 선행되어야 이미지 업로드등에 수월한 작업을 할 수 있습니다. 

### Redux를 통한 로그인 상태 관리

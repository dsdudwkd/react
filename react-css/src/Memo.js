/* 
리액트에서는 css를 이용하는 방법이 다양하게 있다 (2가지 이상 섞어 쓰지x)


리액트 특징
1. 리액트는 파일이 컴포넌트 단위로 쪼개져 있다
2. 컴포넌트마다 하나의 css 파일을 생성해서 관리하는 방법을 많이 사용한다, bem 방식을 사용하지 않기 때문(선택자 겹쳐도 됨)
    * bem방식: 클래스 이름을 체계적으로 작성하는 방식(block, element, modifier을 기준으로) -> 하나의 css로 전체를 관리할 때
3. 클래스가 class가 아닌 className으로 바뀌어서 사용


리액트에서 사용하는 css의 종류 (1, 2번은 같이 사용하는 편)
1. 기본 css - 일반적으로 사용하는 css 방법(선택자를 이용하거나 컴포넌트명-작성하고자하는 이름을 활용하여 네이밍)

2. css module 사용하기(css의 발전 형태, 일반 css와 구별을 위해 파일명에 .module을 붙여서 사용)
ex) App.module.css

- 클래스명의 충돌을 방지
- 컴포넌트 단위의 스타일을 적용할 때
- 같은 클래스명을 사용하면서 컴포넌트 단위로 다른 값을 줘야할 때(=컴포넌트로 나눠서) 사용하는 css 기법

3. sass(scss) 사용
- yarn add node-sass와 yarn add sass로 설치

4. style-component 라이브러리 사용하기
- 내장형이 아니기 때문에 별도의 설치 필요(yarn add styled-components 명령어로 설치)
- css파일을 별도로 관리하지 않고 스크립트 파일 안에 작성하는 방식
- 별도의 클래스를 필요로 하지 않는다 (컴포넌트 방식으로 사용)
- 지역 스타일 방식이기 때문에 reset.css파일 같은 전역 스타일을 줘야하는 상황에서는 컴포넌트 내부의 다른 방식을 사용해야 한다
- 컴포넌트명이 다른 곳에서 쓰는거랑 겹쳐도 컴파일 되면서 클래스명이 알 수 없는 문자로 바뀌기 때문에 중복에 대한 걱정은 x
- 컴포넌트 내부에서 자동완성 확장 프로그램 설치 필요(vscode-styled-components)

5. tailwind 라이브러리 이용 (yarn add tailwindcss)

yarn add -D package = 패키지 설치
yarn tailwind init -p = tailwind config 파일 생성

- 별도의 파일이 필요없고 클래스명을 찾아서 작성하는 타입
- 코드 자체를 깨끗하게 사용할 수 있다
- 필요한 클래스를 직접 찾아서 작성해야 하기 때문에
- 글로벌 css나 최상위 css를 css 파일에 (보통 index.css) 아래의 구문 사용해서 라이브러리 가져옴(import)
@tailwind base;
@tailwind components;
@tailwind utilities;



*/
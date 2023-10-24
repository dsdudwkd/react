import axios from 'axios';
/* 
Axois
Node.js에서 백엔드와 통신하기 위해서 만들어진 http 비동기 통신 라이브러리

yarn add axios 설치
*/

const API_KEY = '65a975b7364407d56c55fae65c76b654'; //계정마다 발급 받는 api 키를 변수에 저장
const BASE_URL = 'https://api.themoviedb.org/3'; //정보를 받아올 URL의 공통 주소를 변수화

const instance = axios.create({
    baseURL : BASE_URL,
    params : {
        api_key : API_KEY,
        language : 'ko-KR'
    }
})

export default instance;
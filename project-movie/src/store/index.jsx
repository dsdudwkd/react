import axios from 'axios';

export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';

const API_KEY = '65a975b7364407d56c55fae65c76b654'; //계정마다 발급 받는 api 키를 변수에 저장
const BASE_URL = 'https://api.themoviedb.org/3'; //정보를 받아올 URL의 공통 주소를 변수화

export const fetchActionData = (data)=>{
    return {
        type : FETCH_ACTION_MOVIES, data
    }
}

/* 
영화 장르별 아이디
액션 : 28
어드벤쳐 : 12
코미디 : 35
*/

export const fetchActionMovies = () => {
    return(dispatch)=>{
        //dispatch: 외부에서 데이터를 가져올 때 사용하는 reducer의 기능으로 useState의 대체용

        return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`)
                    .then(res=>{
                        //.then=>axios에서 콜백함수를 대체하는 return과 같은 구문
                        dispatch(fetchActionData(res.data))
                    })
    }
}
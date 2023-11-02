import axios from 'axios';

export const FETCH_ACTION_MOVIES = 'FETCH_ACTION_MOVIES';
export const FETCH_COMEDY_MOVIES = 'FETCH_COMEDY_MOVIES';

const API_KEY = '65a975b7364407d56c55fae65c76b654'; //계정마다 발급 받는 api 키를 변수에 저장
const BASE_URL = 'https://api.themoviedb.org/3'; //정보를 받아올 URL의 공통 주소를 변수화

//액션
export const fetchActionData = (data)=>{
    return {
        type : FETCH_ACTION_MOVIES, data
    }
}

//코미디
export const fetchComedyData = (data) => {
    return {
        type : FETCH_COMEDY_MOVIES, data
    }
}

/* 
영화 장르별 아이디
// 0
// : 
// {id: 28, name: 'Action'}
// 1
// : 
// {id: 12, name: 'Adventure'}
// 2
// : 
// {id: 16, name: 'Animation'}
// 3
// : 
// {id: 35, name: 'Comedy'}
// 4
// : 
// {id: 80, name: 'Crime'}
// 5
// : 
// {id: 99, name: 'Documentary'}
// 6
// : 
// {id: 18, name: 'Drama'}
// 7
// : 
// {id: 10751, name: 'Family'}
// 8
// : 
// {id: 14, name: 'Fantasy'}
// 9
// : 
// {id: 36, name: 'History'}
// 10
// : 
// {id: 27, name: 'Horror'}
// 11
// : 
// {id: 10402, name: 'Music'}
// 12
// : 
// {id: 9648, name: 'Mystery'}
// 13
// : 
// {id: 10749, name: 'Romance'}
// 14
// : 
// {id: 878, name: 'Science Fiction'}
// 15
// : 
// {id: 10770, name: 'TV Movie'}
// 16
// : 
// {id: 53, name: 'Thriller'}
// 17
// : 
// {id: 10752, name: 'War'}
// 18
// : 
// {id: 37, name: 'Western'}
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

export const fetchComedyMovies = () => {
    return(dispatch)=>{
        //dispatch: 외부에서 데이터를 가져올 때 사용하는 reducer의 기능으로 useState의 대체용

        return axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`)
                    .then(res=>{
                        //.then=>axios에서 콜백함수를 대체하는 return과 같은 구문
                        dispatch(fetchComedyData(res.data))
                    })
    }
}
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchActionMovies } from '../store/index';
import styled from 'styled-components';


/* 
슬라이드 라이브러리 사용
yarn add swiper
*/

function MovieList(props) {

    const dispatch = useDispatch() //state에 접근

    useEffect(()=>{
        dispatch(fetchActionMovies());
    }, [])

    //useSelector() =  store의 상태값을 변경
    const actionData = useSelector((state)=>state.action.movie, []) || [];
    console.log(actionData.results);
    return (
        <div>
            <MovieListWrapper>
                <div className='movieWrapper'>
                    {actionData.results && actionData.results.map((movie, index)=>(
                        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
                    ))}
                </div>
            </MovieListWrapper>
        </div>
    );
}

const MovieListWrapper = styled.div`
    margin-bottom: 50px;
    .movieWrapper{
        display: flex;
        gap: 30px;
        img{
            display: block;
            width: 100%;
            max-width: 200px;
        }
    }
`

export default MovieList;
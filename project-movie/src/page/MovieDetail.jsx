import axios from '../api/axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

function MovieDetail() {
    //경로를 구성하는 url값을 추출
    const {movieId} = useParams();
    const [movie, setMovie] = useState({});

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(
                `/movie/${movieId}`
            )
            setMovie(request.data);
        }
        fetchData();
    },[movieId])
    return (
        <DetailWrap className='detail'>
            {movie.title}
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="영화 이미지" />

        </DetailWrap>
    );
}

export default MovieDetail;

const DetailWrap = styled.div`
    width: 100%;
    img{
        width: 100%;
        object-fit: cover;
        display: block;
    }
`
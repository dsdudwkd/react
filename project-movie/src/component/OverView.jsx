import React from 'react';
import { MdClose } from 'react-icons/md';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function OverView({title, overview, setIsClick, backdrop_path, movieId}) {
    return (
        <HoverWrap className='hoverItem'>
            <HoverCloseBtn onClick={()=>setIsClick(false)}>
                <MdClose className='close'/>
            </HoverCloseBtn>

            <Link to={`/movie/${movieId}`}>
                <ImgWrap>
                    <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="영화 이미지" />
                </ImgWrap>
            </Link>
            <h2>{title}</h2>
            <p>{overview}</p>
        </HoverWrap>
    );
}

export default OverView;

const HoverWrap = styled.div`
    width: 500px;
    height: 500px;
    background-color: gray;
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 99;
`
const HoverCloseBtn = styled.button`
    width: 30px;
    height: 30px;
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(58, 58, 58, 0.5);
    border-radius: 100%;

    .close{
        font-size: 24px;
        color: #ffffff;
        
    }
`

const ImgWrap = styled.div`
    width: 100%;
    overflow: hidden;
    img{
        width:100%
    }

`
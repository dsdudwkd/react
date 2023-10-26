import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComedyMovies } from '../store/index';
import styled from 'styled-components';
import OverView from './OverView';

//스와이퍼를 적용할 때 필수 import 요소
import { Swiper, SwiperSlide } from 'swiper/react'; //스와이퍼 적용 임포트
import 'swiper/css'; //스와이퍼 기본 css 적용 임포트
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/navigation'; //스와이퍼 좌우 버튼 기본 css
import 'swiper/css/pagination'; //스와이퍼 도트 리스트 기본 css
import '../style/swiperCustom.css'; //스와이퍼 커스텀(js,jsx 외에는 확장자명을 작성해야 함)


/* 
슬라이드(swiper) 라이브러리 사용
yarn add swiper
*/

function Comedy(props) {

    const dispatch = useDispatch() //state에 접근
    const [isClick, setIsClick] = useState(false); //클릭한 인덱스
    const [isSelect, setIsSelect] = useState({}); //클릭한 인덱스의 영화의 정보

    useEffect(() => {
        dispatch(fetchComedyMovies());
    }, [])

    //useSelector() =  store의 상태값을 변경
    const comedyData = useSelector((state) => state.comedy.movies, []) || [];
    console.log(comedyData.results);

    /* 내가 클릭하면 그게 몇 번째 영화인지와 그 영화의 정보 가져오기 */
    const overViewEvent = (movie, index) => {
        setIsClick(index);
        setIsSelect(movie);
        // console.log(isClick, isSelect);
    }

    const overViewClose = () => {
        setIsClick(null);
    }

    return (
        <div>
            <MovieContainer>{/* MovieContainer는 스타일 컴포넌트 */}
                <MovieTitle>코미디</MovieTitle>
                <Swiper
                    spaceBetween={5} // 슬라이드와 슬라이드 사이 여백(gap)
                    slidesPerView={6} //한 번에 보여질 슬라이드의 갯수
                    slidesPerGroup={6} //슬라이드 시 한 번에 움직일 슬라이드 갯수
                    loop //마지막 페이지에서 다시 처음의 데이터들이 뒤에 붙어서 데이터가 계속 있는 듯한 느낌
                    modules={[Navigation, Pagination]} //모듈 적용, Navigation은 슬라이드 좌우 버튼 , Pagination이 도트모양
                    navigation
                    pagination = {{clickable : true}} //clickable: 클릭하면 페이지가 넘어가는 속성
                >
                    <div className='movieWrapper'>
                        {comedyData.results && comedyData.results.map((movie, index) => (
                            <SwiperSlide>{/* 액션 데이터를 이미지로 가져온 것을 swiper의 div로 감싸라 */}
                                <MovieItem onClick={()=>overViewEvent(movie, index)}>
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} /> 
                                </MovieItem>
                                {isClick === index && (
                                    <OverView {...isSelect} movieId={movie.id} setIsClick={overViewClose} />
                                )}
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </MovieContainer>
        </div>
    );
}

const MovieContainer = styled.div`
    box-sizing: border-box;
    margin-bottom: 50px;
    transform: translateY(-100px);
`

const MovieTitle = styled.h2`
    color: #ffffff;
    font-size: 40px;
    font-weight: bold;
`

const MovieItem = styled.div`
        img{
            display: block;
            width: 100%;
        }
`

export default Comedy;
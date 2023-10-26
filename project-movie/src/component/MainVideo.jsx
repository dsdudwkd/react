import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import request from '../api/request';
import {styled} from 'styled-components';
function MainVideo(props) {

    const [movie, setMovie] = useState(null); //영화가 있음을 반환
    const [videoKey, setVideoKey] = useState(null); //동영상을 연결할 아이디 반환
    const [showImg, setShowImage] = useState(true); //맨 처음 이미지를 보여줄 이미지 상태 값, 처음부터 보여지기 때문에 true로 설정

    useEffect(() => {
        fetchData();
    },[]);

    useEffect(()=>{
        if(videoKey && showImg){
            changeVideo();
        }
        
    },[videoKey]);

    //async = 비동기식으로 데이터에 접근하는 메서드
    const fetchData = async () => {
        try {
            const res = await axios.get(request.fetchNowPlayMovie);
            const movieId = res.data.results[
                Math.floor(Math.random() * res.data.results.length )  
            ].id

            const {data : movieDetail} = await axios.get(`movie/${movieId}`,{
                params : {append_to_response : 'videos'},
            })
            if(movieDetail.videos && movieDetail.videos.results.length > 0){
                setMovie(movieDetail);
                setVideoKey(movieDetail.videos.results[0].key)

                setTimeout(()=>{
                    setShowImage(false);
                },2000)
            }
            // console.log(res);
        }catch(error){
            console.log(error);
        }
    }

    

    const changeVideo = () => {
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.innerHTML = '';

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${videoKey}?controls=0&autoplay=1&mute=1&loop=1&playlist=${videoKey}`; //비디오 설정값
        iframe.width = '100%';
        iframe.height = '100%';
        videoContainer.appendChild(iframe);
    }

    
    return (
        <div>
            {showImg && movie && (
                //backdrop_path: 각각의 이미지 경로 주소
                <MainVideoWrapper img={movie.backdrop_path}> 
                    {/* <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt="영상 시작 전 보여지는 이미지" /> */}
                </MainVideoWrapper> 
            )}
            <VideoWrapper id='videoContainer'></VideoWrapper>
        </div>
    );
}
const MainVideoWrapper = styled.div`
    background: url(https://image.tmdb.org/t/p/original/${(props)=>props.img}) no-repeat center center / cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9;
`
const VideoWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`

export default MainVideo;

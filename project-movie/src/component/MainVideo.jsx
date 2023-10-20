import React, { useEffect, useState } from 'react';
import {axios} from '../api/axios';
import request from '../api/request';
import { Await } from 'react-router-dom';

function MainVideo(props) {

    const [movie, setMovie] = useState(null); //영화가 있음을 반환
    const [videoKey, setVideoKey] = useState(null); //동영상을 연결할 아이디 반환

    //async = 비동기식으로 데이터에 접근하는 메서드
    const fetchData = async = () => {
        try {
            const res = await axios.get(request.fetchNowPlayMovie);
            const movieId = res.data.result[
                Math.floor(Math.random() * res.data.result.length )  
            ].id

            const {data : movieDetail} = await axios.get(`movie/${movieId}`,{
                params : {append_to_response : 'videos'},
            })
            if(movieDetail.videos && movieDetail.videos.result.length > 0){
                setMovie(movieDetail);
                setVideoKey(movieDetail.videos.result[0].key)
            }
            console.log(res);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    },[])

    
    return (
        <div>
            
        </div>
    );
}

export default MainVideo;
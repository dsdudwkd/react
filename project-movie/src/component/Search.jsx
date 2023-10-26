import React, { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import axios from 'axios';
function Search(props) {

    const [visible, setVisible] = useState(false);
    const [clearBtn, setClearBtn] = useState(false); //검색창에 값이 입력됐을 때 나오는 버튼
    const [text, setText] = useState('');

    const [list, setList] = useState(false); //검색어를 입력했을 때의 상태값을 저장해서 검색 결과창인 container를 생성
    const [movieList, setMovieList] = useState([]); //검색 결과 리스트

    /* 
    useRef() = DOM에 직접 접근하는 hook
    current로 값을 전달
    */
    const searchFormRef = useRef();

    const data = []; //data에 영화리스트를 받아올 배열
    const API_KEY = '65a975b7364407d56c55fae65c76b654';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&sort_by=&include_adult=false&query=${text}&language=ko-KR&page=1`;

    const toggleInputOpen = (e) => {
        // 리액트에서는 기본 동작이 기본적으로 중지되지 않으므로 명시적으로 항상 e.preventDefault()를 추가해야 한다
        e.preventDefault();
        setVisible(true);
        console.log(visible);
    }

    const fetch = async () => {
        const res = await axios.get(url);
        const data = res.data.results || [];
        setMovieList(data);
    }

    const onClear = (e) => {
        e.preventDefault();
        setText('');
        setClearBtn(false);
    }

    useEffect(() => {
        const onClose = (e) => {
            if (searchFormRef.current && !searchFormRef.current.contains(e.target)) {
                setVisible(false);
                setText('');
                setClearBtn(false);
            }
        }
        document.addEventListener('click', onClose);

        return () => {
            document.removeEventListener('click', onClose);
        }
    }, [])

    return (
        <>
            <SearchForm visible={`${visible}`} className={visible ? 'on' : null} ref={searchFormRef}>
                {/* 돋보기 버튼 눌렀을 때 입력창 나오게 */}
                <button onClick={toggleInputOpen}>
                    <BiSearch className='search-btn' />
                </button>

                {visible && (
                    <input type='text'
                        placeholder='제목, 사람, 장르'
                        value={text}
                        onChange={(e) => {
                            // 앞 뒤의 공백을 모두 제거해서 빈 문자열인지 검사
                            setClearBtn(e.target.value.trim() != '');
                            setText(e.target.value); //input창에 입력값이 보이게
                            setList(true); //검색어가 들어온 것을 이벤트로 받아와서 state의 값을 변경
                            fetch(setMovieList());
                        }} />
                )}

                {clearBtn && (
                    <button className='close-btn' onClick={onClear}>
                        <MdClose />
                    </button>
                )}
            </SearchForm>

            <ResultContainer className={(list ? 'on' : null)}>
                <div className='searchList'>
                    <p className='resultText'>{text}로 검색한 결과입니다.</p>
                    {list? (
                        <div className='listWrapper'>
                            {movieList && movieList.map(movie => (
                                <List props={movie} key={movie.id} />
                            ))}
                        </div>
                    ) : (<p>리스트를 받아오지 못했습니다.</p>)}
                </div>
            </ResultContainer>
        </>
    );
}

const List = (props) =>{
    const {backdrop_path, title} = props.props;
    const imgUrl = backdrop_path;

    return(
        <div className='listItem'>
            <img src={`https://image.tmdb.org/t/p/original/${imgUrl}`} alt={title}  />
        </div>
    )
}

export default Search;

const SearchForm = styled.form`
    display: flex;
    margin-left: auto;
    width: 30px;
    position: relative;
    .search-btn{
        font-size: 24px;
        color: #ffffff;
    }
    &.on{
        width: 300px; //위에서 고정으로 너비가 지정되어있으니 너비 늘려줘야함
        transition: 500ms;
        border: 1px solid #ffffff;
    }
    input{
        width: ${({ visible }) => (visible ? '250px' : '0px')};
        color: #ffffff;
        outline: none;
    }
    .close-btn{
        color: #ffffff;
        top: 0;
        right: 0;
        display: flex;
        align-items: center;
        margin-left: auto;
    }
`

const ResultContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333333;
    display: none;
    z-index: -1;
    overflow-y: scroll;
    &.on{
        display: block;
    }

    .searchList{
        width: 100%;
        height: 100%;
        position: relative;
        top: 0;
        left: 0;
        padding-top: 100px;
        .resultText{
            color: #ffffff;
            margin-bottom: 36px;
            text-align: center;
            font-weight: bold;
        }
        .listWrapper{
            width: 100%;
            height: 100%;
            display: flex;
            gap: 24px;
            justify-content: center;
            flex-wrap: wrap;
            .listItem{
                width: 350px;
                img{
                    width: 100%;
                }
            }
        }
    }
`
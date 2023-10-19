import React, { useEffect, useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
function Search(props) {

    const [visible,setVisible] = useState(false); 
    const [clearBtn, setClearBtn] = useState(false); //검색창에 값이 입력됐을 때 나오는 버튼
    const [text, setText] = useState('');
    
    /* 
    useRef() = DOM에 직접 접근하는 hook
    current로 값을 전달
    */
    const searchFormRef = useRef();

    const toggleInputOpen = (e) => {
        // 리액트에서는 기본 동작이 기본적으로 중지되지 않으므로 명시적으로 항상 e.preventDefault()를 추가해야 한다
        e.preventDefault();
        setVisible(true);
        console.log(visible);
        
    }

    const onClear = (e) => {
        e.preventDefault();
        setText('');
        setClearBtn(false);
    }

    useEffect(() => {
        const onClose = (e) => {
            if(searchFormRef.current && !searchFormRef.current.contains(e.target)){
                setVisible(false);
                setText('');
                setClearBtn(false);
            }
        }
        document.addEventListener('click', onClose);

        return () => {
            document.removeEventListener('click', onClose);
        }
    },[])

    return (
        <>
            <SearchForm visible={`${visible}`} className={visible? 'on' : null} ref={searchFormRef}>
                {/* 돋보기 버튼 눌렀을 때 입력창 나오게 */}
                <button onClick={toggleInputOpen}>
                    <BiSearch className='search-btn' />
                </button>

                {visible && (
                    <input type='text' 
                    placeholder='제목, 사람, 장르'
                    value={text}
                    onChange={(e)=>{
                        // 앞 뒤의 공백을 모두 제거해서 빈 문자열인지 검사
                        setClearBtn(e.target.value.trim() != '');
                        setText(e.target.value); //input창에 입력값이 보이게
                    }} />
                )}

                {clearBtn && (
                    <button className='close-btn' onClick={onClear}>
                        <MdClose />
                    </button>
                )}
            </SearchForm>
        </>
    );
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
        width: ${({visible})=> (visible? '250px' : '0px')};
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
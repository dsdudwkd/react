import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import {Link} from 'react-router-dom';
import {RiNetflixFill} from 'react-icons/ri';
import Navigation from './Navigation';
import Search from './Search';

function Header(props) {

    const [show, setShow] = useState(false); //header의 background의 보여지는 것에 대한 상태(class명에 on 유무에 따라)
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                console.log(window.scrollY, show);
                setShow(true);
            } else {
                setShow(false);
            }
        })
    },[])

    return (
        <div>
            {/* HeaderContainer: 외부에서 불러오는 게 아니고 스타일을 만들어주는 컴포넌트 */}
            <HeaderContainer className={`${show && 'on'}`}> {/* show가 true이면 on을 붙인다 */}
                <Link to='/'>
                    <h1 className='logo'><RiNetflixFill /></h1>
                </Link>
                <Navigation/>
                <Search />
            </HeaderContainer>
        </div>
    );
}

export default Header;

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100vw;
    padding: 20px 30px;
    background: rgb(0, 0, 0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
    align-items: center;
    z-index: 9999;
    gap: 30px;
    transition: 400ms;
    box-sizing: border-box;
    &.on{
        background-color: #333333;
    }
    .logo{
        color: red;
        font-size: 24px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
    }
`
import React from 'react';
import { BiSearch } from 'react-icons/bi';
import styled from 'styled-components';
function Search(props) {

    const toggleInputOpen = () => {

    }

    return (
        <>
            <SearchForm>
                <button onClick={toggleInputOpen}>
                    <BiSearch className='search-btn' />
                </button>
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
`
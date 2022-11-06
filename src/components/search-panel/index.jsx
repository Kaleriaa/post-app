import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const SearchPanel = ({ onUpdateTerm }) => {
    const [value, setValue] = useState('')
    return (
        <StyledSearch
            className='form-control'
            type='text'
            placeholder='Поиск по записям'
            onChange={(e) => {
                setValue(e.target.value)
                onUpdateTerm(e.target.value)
            }}
            value={value}
        />
    )
}

const StyledSearch = styled.input`
    width: auto;
    flex-grow: 1;
    margin-right: 3px;
`

export default SearchPanel
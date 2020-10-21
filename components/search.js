import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';


const customStyles = {
    placeholder: (defaultStyles) => {
        return {
            ...defaultStyles,
            fontSize: 14,
            fontWeight: 300
        }
    }
}

const options = [
    { value: '1', label: 'Grün' },
    { value: '2', label: 'Gelb' },
    { value: '3', label: 'Orange' },
    { value: '4', label: 'Rot' }
  ]

const SearchBox = styled.input`
width: 20%;
margin-right: 20px;
height: 38px;
    border-radius: 3px;
    border: 1px solid #ccc;
    padding: 10px;
    font-weight: 400;
    font-size: 14px;
    &::placeholder{
        color: hsl(0,0%,50%);
    }
`;

const SearchWrapper = styled.div`
max-width: 1200px;
margin: 0 auto;
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: start;
margin: 50px auto;
`;

const SelectWrapper = styled.div`
width: 20%;
margin-left: 20px;

`;

export default function Search({ handleChange, searchTerm, filter, isDisabled}){

    return(
      <SearchWrapper>
        <SearchBox onChange={handleChange} value={searchTerm} placeholder="Nach Ort suchen..." disabled={ isDisabled ? 'disabled' : ''}/> 
        <SelectWrapper>
        <Select options={options} instanceId="color-select" onChange={filter} isClearable={true} placeholder="Nach Farbe wählen..."  styles={customStyles}/>
        </SelectWrapper>
      </SearchWrapper>
    )
}
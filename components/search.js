import React from 'react';
import styled from 'styled-components';


const SearchBox = styled.input`
width: 50%;
margin: 20px auto;
`;


export default function Search({ handleChange, searchTerm}){
    return(
      <SearchBox onChange={handleChange} value={searchTerm}  /> 
    )
}
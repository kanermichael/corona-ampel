import React from "react";
import Item from "../components/item";
import styled from 'styled-components';
import Search from '../components/search';

const Wrapper = styled.ul`
font-family: 'Rubik', sans-serif;
font-size: 1em;
display: flex;
flex-direction: row;
flex-wrap: wrap;
max-width: 1200px;
margin: 0 auto;
list-style: none;
`;

const Header = styled.section`
text-align: center;
font-family: 'Rubik', sans-serif;
margin-top: 50px;
`;


export default function Home({trafficLightData}) {

  const trafficData = [...trafficLightData[0].Warnstufen]

  const [data, setData] = React.useState(trafficData)
  const [searchTerm, setSearchTerm ] = React.useState('')
 
  React.useEffect(()=>{

    const filteredItems = trafficData.filter( 
      dataItem => dataItem.Name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setData(filteredItems)
  }, [searchTerm])
 
  
  return (

  <React.Fragment> 
  <Header>
  <h1>COVID-19 Ampel</h1>
  <Search data={data} handleChange={e => setSearchTerm(e.target.value)} searchTerm={searchTerm}/>
  </Header>

  <Wrapper>
       {data.map((entryData, i) => (
         <Item key={i} {...entryData}/>
       ))}
   </Wrapper>
  </React.Fragment>   
  )
}



export async function getStaticProps() {
 
    const res = await fetch('https://corona-ampel.gv.at/sites/corona-ampel.gv.at/files/assets/Warnstufen_Corona_Ampel_aktuell.json')
    const trafficLightData = await res.json()
    
    return {
      props: {
        trafficLightData,
      },
    }
}
  



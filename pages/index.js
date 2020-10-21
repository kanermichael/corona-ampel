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
padding: 0;
justify-content: space-between;
`;

const Header = styled.section`
text-align: center;
font-family: 'Rubik', sans-serif;
margin: 50px auto;
`;


export default function Home({trafficLightData}) {

  const trafficData = [...trafficLightData[0].Warnstufen]

  const [data, setData] = React.useState(trafficData)
  const [searchTerm, setSearchTerm ] = React.useState('')
  const [filter, setFilter] = React.useState(null)
  const [searchable, setSearchable] = React.useState(false)

  React.useEffect(()=>{
    
    if(filter){
      const filteredItems = trafficData.filter( 
        dataItem => dataItem.Warnstufe.includes(filter)
      )
      setData(filteredItems)
      setSearchable(true)

    }else{
      setSearchable(false)
      const searchItems = trafficData.filter( 
        dataItem => dataItem.Name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setData(searchItems)
    }
   
  }, [searchTerm, filter])
 
  function handleFilter(e){

    e ? setFilter(e.value) : setFilter(null)
   
   
  }
  return (

  <React.Fragment> 

  <Header>
    <h1>COVID-19 Ampel</h1>
    <Search data={data} handleChange={e => setSearchTerm(e.target.value)} searchTerm={searchTerm} filter={handleFilter} isDisabled={searchable}/>
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
  

 import styled from 'styled-components';
 import VanillaTilt from 'vanilla-tilt'

 const handleWithHashMap = color => {
    const colors = {
    1: "#7ea04d",
    2: "#ffe05d",
    3: "#ff9642",
    4: "#ea5455",
    base:"fff" 
 }
 
 return colors[color] || colors.base;

}
 
 const Region = styled.h2`
 font-size: 1em;
 font-weight: 300;
`;

const WarningLevel = styled.h3`
font-size: 1.5em;
font-weight: 600;
`;

const Card = styled.li`
background: ${ ({color}) => handleWithHashMap(color)};
box-shadow: 10px 10px 30px -20px rgba(0,0,0,0.75);
border-radius: 10px;
margin-bottom: 20px;
flex: 1 1 23%;
height: auto;
margin: 4px;
padding: 20px 0;
width: auto;
min-width: 250px;
text-align: center;
color: #212121;
`;

function entry({ Name, Warnstufe }) {

    const tiltRef = React.useRef()

    React.useEffect(()=> {

     const tiltNode = tiltRef.current

     VanillaTilt.init(tiltNode, {
       max: 25,
       speed: 400,
       glare: true,
       'max-glare': 0.5,
     })
     return function cleanup() {tiltNode.vanillaTilt.destroy() };
    }, [])
   

     return (
         <Card color={Warnstufe} ref={tiltRef}>
         <Region>{Name}</Region>
         <WarningLevel>{Warnstufe}</WarningLevel>
         </Card>
     )
}

export default entry;

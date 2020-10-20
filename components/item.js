 import styled from 'styled-components';
 import VanillaTilt from 'vanilla-tilt'

 const handleColorType = color => {
    switch (color) {
      case "1":
        return "#7ea04d";
      case "2":
        return "#ffe05d";
      case "3":
        return "#ff9642";
      case "4":
        return "#ea5455";
      default:
        return "#fff";
    }
  };
  

 const Region = styled.h2`
 font-size: 1em;
 font-weight: 300;
`;

const WarningLevel = styled.h3`
font-size: 1.5em;
font-weight: 600;
`;

const Card = styled.li`
background: ${ ({color}) => handleColorType(color)};
box-shadow: 10px 10px 30px -20px rgba(0,0,0,0.75);
border-radius: 10px;
margin-bottom: 20px;
flex:1;
padding: 20px;
margin: 20px;
min-width: calc(25% - 40px);
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

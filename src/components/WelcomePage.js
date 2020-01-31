import React from "react";
import styled from 'styled-components';




const HomePage = styled.div`
flex:1;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
font-size:3rem;
color:azure;
`;


const Greet = styled.address`
flex:1;
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
-webkit-text-stroke:1px #000;
text-shadow:0 0 10px #000;
text-align:center;
`;


const Az = styled.a`
cursor:pointer;
color:azure;
       
`;


const Par = styled.p`
font-size:2rem; 
-webkit-text-stroke:1px #000;
text-shadow:0 0 10px azure;
`;


const Par2 = styled.p`
font-size:3rem; 
-webkit-text-stroke:1px #000;
text-shadow:0 0 30px #000;
`;

const Title = styled.h1`
color:azure;
-webkit-text-stroke:1px #000;
text-shadow:0 0 10px azure;
`;


const rick = {
 borderRadius:"100%" ,
 border:"double 5px azure",
 boxShadow:"0 0 10px azure"
}


export default function WelcomePage() {
  return (
    <section className="welcome-page">
     
      <HomePage>
             <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
          style={rick}
        />
      </header>
            <Greet>
                <h1>Created by Lord Guy</h1>
                <h3>Student at <Az href="https://lambdaschool.com">LambdaSchool</Az>.</h3>
                <Par>
                Yea I just did this in a chill way forreal....because not enough time &#128348;
 
                 </Par>
 
            </Greet>
 
 
 
            <Greet className="abt"> 
 
                <Title>About This..</Title>
                <Par2>
                Sprint Challenge I told My Self I WILL!!! GET A 3 ON. 
 
 
                 </Par2>
 
            </Greet>
 
 
 
 
             
             
             </HomePage>
   

    </section>
  );
}

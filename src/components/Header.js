import React from "react";
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';



export default function Header(props){
    console.log(props);
    
let Nav = styled.nav`
flex:1;
width:100%;
height:100%;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
font-size:4rem;
padding:30px 10px;
-webkit-text-fill-color:azure;
color:azure;
text-decoration:none;
background-color:rgba(0,0,0,.3);


@import url('https://fonts.googleapis.com/css?family=Lemonada|Press+Start+2P&display=swap');
font-family: 'Press Start 2P', cursive;
font-family: 'Lemonada', cursive;

`;




        

    return(

        <div>
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        <Nav className='naviola'>
             

                 <NavLink to='/' exact activeStyle={{color:'red',textShadow:"0 0 20px #000",border:"none",animation:"activeLink 2s linear infinite"}} style={{textDecoration:'none',listStyle:"none"}}>Home</NavLink>
             
                 <NavLink to='/CharacterList' activeStyle={{color:'red',textShadow:"0 0 20px #000",border:"none",animation:"activeLink 2s linear infinite"}} style={{textDecoration:'none',}}>Character List</NavLink>
    
   
        </Nav>
        </div>
       


       
    )
    }
import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import {Route,Link} from 'react-router-dom';





const Frame = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
width:100%;
height:100%;
`;




const Row = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: double 7px azure;
	width: 100%;
	height: 100%;
	border-radius: 20px;
	box-shadow: 0 0 10px azure;
    color:azure;
    background-color:rgba(0,0,0,.7)
`

const Name = styled.h2`
	text-shadow: 0 0 10px red;
	flex: 1;
  font-size: 3rem;
  
`

const ConSkill = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1.5rem;
	text-align:center;
`

const Con = styled.span`
	text-shadow: 0 0 10px blue;
	text-align:center;
	flex: 1;
`

const Skill = styled.span`
	text-shadow: 0 0 10px blue;
	flex: 1;
  text-align:center;
  overflow:scroll;
  -webkit-text-fill-color:azure;
`

const Remove = styled.button`
	flex: 0.6;
	color: red;
	border: double red;
	background-color: rgba(250, 250, 250, 0.2);
  font-size:2rem;
  text-shadow:0 0 10px azure;
	box-shadow:0 0 10px azure;
	padding:5px 10px;
`


const Btn = styled.button`
	flex: 0.6;
	color: green;
	border: double 4px azure;
	background-color: #000;
	padding:5px 10px;
	font-size:2rem;
	text-shadow:0 0 10px azure;
	box-shadow:0 0 10px azure;
	-webkit-text-stroke:.8px azure;
	cursor:pointer;
`


const immg = {
  width:"100px",
  height:"100px",
  borderRadius:'100%',
}


const list = {
  flex:"1",
  display:"flex",
  gridGap:"100px",
}

const secCS = {
  flexDirection:"column",
  overflowY:"hidden",
  overflowX:"scroll",
}

const inpy = {
  fontSize:"2rem",
  height:"40px",
  padding:"3px",
  
}


function fresh(){
  window.location.reload()
}


function BB (e){
  console.log(e.target.value)
}

// function CardChoice (){
//   return(

//   )
// }

function showCardChoice (e){
console.log(e.target.value);

document.querySelectorAll(".TheCardz .card .nme").forEach(el=>{
  console.log(el.textContent);

  if(e.target.value===el.textContent){
   return true
  }else{
    el.parentNode.parentNode.parentNode.remove()
  }
  
})
//   ReactDOM.render(
// <div>ok</div>
//   ,document.querySelector(".TheCard"))

  

}



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
let [characters,setcharacters] = useState([])



  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

      axios.get("https://rickandmortyapi.com/api/character/")

          .then(res=>{
            setcharacters(characters = res.data.results)
            console.log(res.data.results);
            
               }).catch(err=>{
            throw Error(err)
          })


  }, []);

  return (

    
      
      
      <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
     

      <div>
      <label htmlFor="charSearch">Search Your Character:</label>
<input style={inpy} list="chars" id="charSearch" name="charSearch" placeholder="Type Here" onChange={BB} onBlur={showCardChoice}/>
<Btn>Choose Card</Btn><Remove onClick={fresh}>ReSearch</Remove>
           <datalist id="chars">
        {   characters.map(char=>{
                return(
                  <option value={char.name}  />
                )
           })}
           <option value="" />
            </datalist>
         </div>
       <div className='TheCardz'>  
        
     
          {


          characters.map(each=>{


            return (
                <div className="card">
          
                <Card key={each.id}>
                <ConSkill>
                  <img src={each.image} style={immg}/>
                  <Name>Name: <Con className="nme">{each.name}</Con></Name>
                  <Name>Gender: <Con>{each.gender}</Con></Name>
                  <Name>Specie: <Con>{each.species}</Con></Name>
                  <Name>Status: <Con>{each.status}</Con></Name>
                </ConSkill>


                    <ConSkill style={secCS}>
                      <Con>Episodes</Con>
                      <Skill>
                        <ol style={list}>
                       {
                         each.episode.map((eps, i)=>{
                           return (
                           <li key={Math.floor(Math.random() * 134482)}><a href={eps}>Episode {i}</a></li>
                           )
                         })
                       }
                        </ol>
                      </Skill>
                    </ConSkill>
                </Card>



                </div>
            )
            
          })


          

      }
    </div>
      </section>
  );
}

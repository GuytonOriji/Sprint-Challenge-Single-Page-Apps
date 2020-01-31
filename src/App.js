import React from "react";
import {Route} from 'react-router-dom'
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import Home from './components/WelcomePage';



export default function App() {
  return (
    <main>
      <Header />

      <Route exact path='/' component={Home}/>
   <Route exact path='/CharacterList' component={CharacterList}/>




    </main>
  );
}

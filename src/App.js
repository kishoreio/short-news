import React from 'react';
import Header from './Components/Header';
import NavList from './Components/NavList';
import Post from './Components/Post';
import { HashRouter, Route } from 'react-router-dom';
import Footer from './Components/Footer';
 
const App = () =>{
  return(
    <HashRouter>
      <div>
        <Header />
        <NavList />
        <Route exact path='/' component={Post} />
        <Route path='/health' component={Post}/>
        <Route path='/science' component={Post}/>
        <Route path='/sports' component={Post}/>
        <Route path='/technology' component={Post}/>  
        <Footer />
      </div>
    </HashRouter>
  )
}
export default App;

import React from 'react'
import './App.css';
import Container from '@material-ui/core/Container';
import Search from '../Search'
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import ImageInfo from '../ImageInfo';

function App (){
  return (
    //need this for useNavigate to get to another component
    <Container  maxWidth="sm" className="App">
    <BrowserRouter> 
        <Routes>
                <Route path="/" exact={true} element={<Search/>}/>
                <Route path="/*" exact={true} element={<ImageInfo/>}/>
        </Routes>
</BrowserRouter> 
</Container>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { Container } from '@material-ui/core';
import Header from './component/Header/Header';
import SimpleBottomNavigation from "./component/MainNav";
import Trending from './pages/Trending/Trending'
import Movies from './pages/Movies/Movies';
import Series from './pages/Series/Series';
import Search from './pages/Search/Search';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          {/* <Switch> */}
          <Routes>
            
            <Route path='/' element={<Trending/>} exact />
            <Route path='/movies' element={<Movies/>} />
            <Route path='/Series' element={<Series/>} />
            <Route path='/Search' element={<Search/>} />
          </Routes>
          {/* </Switch> */}

        </Container>
      </div>

      <SimpleBottomNavigation />
    </BrowserRouter>

  );

}

export default App;

import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar';
import BannerHeader from './components/BannerHeader';
import Test from './components/Test';
import MapBody from './components/MapBody';
import TitleBody from './components/TitleBody';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Blog from './components/Blog';

function App() {
  return (
    <>
    
     {/* <HeaderBar/>
     <BannerHeader/>
     <MapBody/>
     <TitleBody/> */}

    <HeaderBar/>
     

      <BrowserRouter>
      
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/blog' element={<Blog/>}/>
        </Routes>
      
      </BrowserRouter>

    </>
  );
}

export default App;

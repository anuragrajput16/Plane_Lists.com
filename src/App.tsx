import './App.css';
import './Assets/css/custom.css';
import './Assets/css/footer.min.css';
import './Assets/css/hero_video.css';
import './Assets/css/nav_global.css';
import './Assets/css/slick.css';
import './Assets/css/sr-base.css';
import './Assets/css/stat2.css';
import './Assets/css/style.css';


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './app/Components/HomePage/HomePage';
import { AboutUsPage } from './app/Components/AboutUs/AboutUsPage';
import HeaderPage from './app/Components/Header/HeaderPage';

function App() {
  return (
    <>
    <div
        id="hs_cos_wrapper_main_flexible_column"
        className="hs_cos_wrapper hs_cos_wrapper_widget_container hs_cos_wrapper_type_widget_container"
        style={{}}
        data-hs-cos-general-type="widget_container"
        data-hs-cos-type="widget_container"
      >
        
    

    <HeaderPage/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about-us" element={<AboutUsPage/>} />     
        </Routes>
      </BrowserRouter>
     
      </div>
    </>
  );
}

export default App;

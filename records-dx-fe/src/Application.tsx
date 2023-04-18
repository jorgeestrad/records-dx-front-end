import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import LayoutComponent from './components/Layout';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
          <Routes>
             <Route path='/' element={<HomePage/>}/>
             <Route path='about' element={<AboutPage/>}/>
             <Route path='layout' element={<LayoutComponent />}>
                <Route index element= {<AboutPage />} />
                <Route path='about' element={<AboutPage/>}/>
             </Route>
          </Routes>
        </BrowserRouter>
    );

}

export default Application;
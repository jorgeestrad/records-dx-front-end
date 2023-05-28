import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import AboutPage from './pages/About';
import LayoutComponent from './components/Layout';
import DirectoryPage from './pages/directory';
import NewsPage from './pages/news';
import BlogPage from './pages/blog';
import MyGoalsPage from './pages/myGoals';
import AudioPage from './pages/audio';
import BooksPage from './pages/books';
import ExchangePage from './pages/exchanges';
import OthersPage from './pages/others';
import SuppliesPage from './pages/supplies';
import VideoPage from './pages/video';
import LogInPage from './pages/LogIn';
import RegisterPage from './pages/Register';

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter>
          <Routes>
             <Route path='/' element={<HomePage/>}/>
             <Route path='profile' element={<ProfilePage/>}/>
             <Route path='audio' element={<AudioPage/>}/>
             <Route path='video' element={<VideoPage/>}/>
             <Route path='about' element={<AboutPage/>}/>
             <Route path='books' element={<BooksPage/>}/>
             <Route path='layout' element={<LayoutComponent/>}/>
             <Route path='directory' element={<DirectoryPage/>}/>
             <Route path='exchanges' element={<ExchangePage/>}/>
             <Route path='news' element={<NewsPage/>}/>
             <Route path='blog' element={<BlogPage/>}/>
             <Route path='others' element={<OthersPage/>}/>
             <Route path='mygoals' element={<MyGoalsPage/>}/>
             <Route path='supplies' element={<SuppliesPage/>}/>
             <Route path='login' element={<LogInPage/>}/>
             <Route path='register' element={<RegisterPage/>}/>
          </Routes>
        </BrowserRouter>
    );

}

export default Application;
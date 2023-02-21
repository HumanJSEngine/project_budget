import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Auth from './pages/Auth';
import Calendar from './pages/Calendar';
import GalleryList from './pages/GalleryList';
import List from './pages/List';
import Login from './pages/Login';
import Post from './pages/Post';
import Register from './pages/Register';
import Setting from './pages/Setting';
import Stats from './pages/Stats';
import Write from './pages/Write';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const setting = useSelector((state) => state.setting);
  const { listType } = setting;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        {isLogin && (
          <Route
            index
            element={listType === 'default' ? <List /> : <GalleryList />}
          />
        )}
        {!isLogin && <Route index element={<Auth />} />}
        <Route path={'/list'} element={<Navigate to='/' />} />
        <Route path={'/gallery'} element={<Navigate to='/' />} />
        <Route path={'/gallerylist'} element={<GalleryList />} />
        <Route path={'/auth'} element={<Auth />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/calendar'} element={<Calendar />} />
        <Route path={'/stats'} element={<Stats />} />
        <Route path={'/setting'} element={<Setting />} />
        <Route path={'/post'} element={<Post />} />
        <Route path={'/write'} element={<Write />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

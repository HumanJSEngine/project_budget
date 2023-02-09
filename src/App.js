import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import GlobalStyle from './styles/GlobalStyle';
import Main from './Main';
import { useState } from 'react';
import List from './pages/List';
import Auth from './pages/Auth';
import Register from './pages/Register';
import Login from './pages/Login';
import Calendar from './pages/Calendar';
import Stats from './pages/Stats';
import Setting from './pages/Setting';
import Post from './pages/Post';
import Write from './pages/Write';
import GalleryList from './pages/GalleryList';
import { useSelector } from 'react-redux';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const setting = useSelector((state) => state.setting);
  const { listType } = setting;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        {isLogin && <Route index element={listType === 'gallery' ? <GalleryList /> : <List />} />}
        {!isLogin && <Route index element={<Auth />} />}
        <Route path={'/register'} element={<Register />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/calender'} element={<Calendar />} />
        <Route path={'/stats'} element={<Stats />} />
        <Route path={'/setting'} element={<Setting />} />
        <Route path={'/post'} element={<Post />} />
        <Route path={'/write'} element={<Write />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

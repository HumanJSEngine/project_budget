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
import SetCategory from './pages/SetCategory';
import SettingCdclist from './components/setting/SettingCdclist';

}

export default App;

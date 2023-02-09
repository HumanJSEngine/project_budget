import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';

import GlobalStyle from './styles/GlobalStyle';
import Main from './Main';

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
                        element={
                            listType === 'gallery' ? <GalleryList /> : <List />
                        }
                    />
                )}
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

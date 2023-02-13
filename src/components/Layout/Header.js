import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';

import HeaderBackButton from '../ui/HeaderBackButton';
import HeaderFrontButton from '../ui/HeaderFrontButton';
import Search from '../ui/Search';

import Monthwrapper from './Monthwrapper';
const Block = styled.header`
    display: flex;
    max-width: 360px;
    width: 100%;
    height: 44px;
    justify-content: space-between;
`;

const Month = styled.p`
    color: ${colors.gray900};
`;

const Header = () => {
    return (
        <Block>
            <Monthwrapper>
                <HeaderBackButton />
                <Month>2월</Month>
                <HeaderFrontButton />
            </Monthwrapper>
            <Search/>
        </Block>
    );
};

export default Header;

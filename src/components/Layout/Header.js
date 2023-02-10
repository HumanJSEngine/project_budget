import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';

import HeaderBackButton from '../ui/HeaderBackButton';

import Monthwrapper from './Monthwrapper';
const Block = styled.header`
    display: flex;
    max-width: 360px;
    height: 44px;
`;

const Header = () => {
    return (
        <Block>
            <Monthwrapper>
                <HeaderBackButton />
            </Monthwrapper>
        </Block>
    );
};

export default Header;

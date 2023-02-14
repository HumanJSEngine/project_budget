import React from 'react';
import styled from 'styled-components';
import IconBox from '../../styles/IconBox';
import { SlArrowRight } from 'react-icons/sl';
import colors from '../../styles/Theme';

const Rightlist = ({ price }) => {
    return (
        <Rightlists>
            <span className='price'>{price.toLocaleString()}원</span>
            <IconBox>
                <button>
                    <SlArrowRight />
                </button>
            </IconBox>
        </Rightlists>
    );
};

const Rightlists = styled.div`
    display: flex;
    gap: 0 5px;
    button {
        border: none;
        color: ${colors.gray500};
        background: none;
    }
`;
export default Rightlist;

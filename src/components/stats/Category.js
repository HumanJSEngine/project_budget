import React from 'react';
import styled from 'styled-components';

const Category = ({ children }) => {
    return <Cate>{children}</Cate>;
};

const Cate = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px 0;
`;

export default Category;

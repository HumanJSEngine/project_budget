import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';

const Header = ({ title, HeaderLeft, HeaderRight }) => {
  return (
    <Block>
      {HeaderLeft && HeaderLeft}
      {title && <HeaderTitle>{title}</HeaderTitle>}
      {HeaderRight && HeaderRight}
    </Block>
  );
};

const Block = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 4px;
`;

const HeaderTitle = styled.span`
  color: ${colors.gray900};
  font: ${fonts.score15Regular};
  line-height: 15px;
`;

export default Header;

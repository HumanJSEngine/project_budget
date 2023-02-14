import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';

const Header = ({ title, titlePosition, border, HeaderLeft, HeaderRight }) => {
  return (
    <Block titlePosition={titlePosition} border={border}>
      {HeaderLeft && <HeaderSide position={'left'}>{HeaderLeft}</HeaderSide>}
      {title && <HeaderTitle>{title}</HeaderTitle>}
      {HeaderRight && <HeaderSide position={'right'}>{HeaderRight}</HeaderSide>}
    </Block>
  );
};

const Block = styled.header`
  position: relative;
  display: flex;
  justify-content: ${({ titlePosition }) => (titlePosition ? titlePosition : 'center')};
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 4px;
  color: ${colors.gray900};
  border-bottom: ${({ border }) => (border ? `1px solid ${colors.gray200}` : '')};
`;

const HeaderTitle = styled.span`
  padding: 0 12px;
  color: ${colors.gray900};
  font: ${fonts.score15Regular};
  line-height: 15px;
`;

const HeaderSide = styled.div`
  position: absolute;
  left: ${({ position }) => (position === 'left' ? '4px' : 'auto')};
  right: ${({ position }) => (position === 'right' ? '4px' : 'auto')};
  top: 0;
`;

export default Header;

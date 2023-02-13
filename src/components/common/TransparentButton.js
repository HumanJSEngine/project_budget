import styled from 'styled-components';
import colors from '../../styles/Theme';

const TransparentButton = ({ children }) => {
  return <Button>{children}</Button>;
};

const Button = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  color: ${colors.primary};
  background: transparent;
`;

export default TransparentButton;

import styled from 'styled-components';

const HeaderButton = ({ children, event }) => {
  return <Button onClick={event}>{children}</Button>;
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding: 12px;
  border: 0;
  background: transparent;
`;

export default HeaderButton;

import styled from 'styled-components';

const HeaderButton = ({ children, position, event }) => {
  return (
    <Button position={position} onClick={() => event()}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  position: absolute;
  left: ${({ position }) => (position === 'left' ? '4px' : 'auto')};
  right: ${({ position }) => (position === 'right' ? '4px' : 'auto')};
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding: 12px;
  border: 0;
  background: transparent;
`;

export default HeaderButton;

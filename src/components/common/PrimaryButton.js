import styled from 'styled-components';
import colors from '../../styles/Theme';

const PrimaryButton = ({ children, event }) => {
  return <Button onClick={event && event()}>{children}</Button>;
};

const Button = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  color: ${colors.white};
  background: ${colors.primary};
  border-radius: 8px;
`;

export default PrimaryButton;

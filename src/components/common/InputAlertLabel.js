import styled from 'styled-components';
import colors from '../../styles/Theme';

const InputAlertLabel = styled.span`
  width: 100%;
  color: ${({ state }) => (state === 'success' ? colors.success : colors.error)};
  font-size: 12px;
  font-weight: 500;
`;

export default InputAlertLabel;

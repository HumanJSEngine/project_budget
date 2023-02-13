import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';

const InputAlertLabel = styled.span`
  width: 100%;
  color: ${({ state }) => (state === 'success' ? colors.success : colors.error)};
  font: ${fonts.score12Medium};
`;

export default InputAlertLabel;

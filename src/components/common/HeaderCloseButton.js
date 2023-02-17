import useGoBack from '../../hooks/useGoBack';
import HeaderButton from './HeaderButton';
import IconBox from '../../styles/IconBox';
import { TfiClose } from 'react-icons/tfi';

const HeaderCloseButton = ({ event }) => {
  const goBack = useGoBack();
  return (
    <HeaderButton onClick={event ? event : goBack}>
      <IconBox>
        <TfiClose size={16} />
      </IconBox>
    </HeaderButton>
  );
};

export default HeaderCloseButton;

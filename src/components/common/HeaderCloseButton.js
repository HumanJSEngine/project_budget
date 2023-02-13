import useGoBack from '../../utils/useGoBack';
import HeaderButton from './HeaderButton';
import IconBox from '../../styles/IconBox';
import { TfiClose } from 'react-icons/tfi';

const HeaderCloseButton = ({ position }) => {
  const { goBack } = useGoBack();
  return (
    <HeaderButton position={position} event={goBack}>
      <IconBox>
        <TfiClose size={16} />
      </IconBox>
    </HeaderButton>
  );
};

export default HeaderCloseButton;

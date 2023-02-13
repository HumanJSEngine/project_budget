import useGoBack from '../../utils/useGoBack';
import HeaderButton from './HeaderButton';
import IconBox from '../../styles/IconBox';
import { TfiArrowLeft } from 'react-icons/tfi';

const HeaderGoBackButton = ({ position }) => {
  const { goBack } = useGoBack();
  return (
    <HeaderButton position={position} event={goBack}>
      <IconBox>{<TfiArrowLeft size={16} />}</IconBox>
    </HeaderButton>
  );
};

export default HeaderGoBackButton;

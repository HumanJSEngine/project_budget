import { useRef, useState } from 'react';

const usePopup = () => {
  const popupMessage = useRef(null);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const openPopup = (message) => {
    popupMessage.current = message;
    setIsOpenPopup(true);
  };
  const closePopup = () => {
    popupMessage.current = null;
    setIsOpenPopup(false);
  };
  return { isOpenPopup, popupMessage, openPopup, closePopup };
};

export default usePopup;

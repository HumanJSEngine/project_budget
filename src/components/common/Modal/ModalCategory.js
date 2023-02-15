import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCategory, getDetailCategory } from '../../../api/categoryApi';
import Header from '../Header';
import HeaderCloseButton from '../HeaderCloseButton';
import ModalListBack from './ModalListBack';
import ModalListItem from './ModalListItem';

const ModalCategory = ({ closeModal }) => {
  const [categoryView, switchCategoryView] = useState('default');
  const [categoryList, setCategoryList] = useState([]);
  const getCategoryList = async () => {
    try {
      const res = await getCategory();
      const { cclist, message, status } = res;
      console.log(res);
      if (!status) {
        return console.log(message);
      }
      setCategoryList(cclist);
    } catch (err) {
      console.log(err);
    }
  };
  const getDetailCategoryList = async (categorySeq) => {
    try {
      const res = await getDetailCategory(categorySeq);
      const { cdclist, message, status } = res;
      if (!status) {
        return console.log(message);
      }
      setCategoryList(cdclist);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategoryList();
  }, []);
  const list = categoryList.map(({ ccSeq, ccName }) => (
    <ModalListItem
      key={ccSeq}
      seq={ccSeq}
      name={ccName}
      hasDetail={true}
      selectEvent={getDetailCategoryList}
    />
  ));

  return (
    <Box>
      <Header
        title={'카테고리'}
        titlePosition={'left'}
        HeaderRight={<HeaderCloseButton event={closeModal} />}
        border={true}
      />
      <ModalContents>
        <ModalList>{list}</ModalList>
      </ModalContents>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ModalContents = styled.div`
  width: 100%;
  height: 240px;
  padding: 0 16px;
  overflow-y: auto;
`;
const ModalList = styled.ul`
  width: 100%;
  height: 100%;
`;

export default ModalCategory;

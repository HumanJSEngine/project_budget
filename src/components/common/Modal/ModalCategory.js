import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getCategory, getDetailCategory } from '../../../api/categoryApi';
import Header from '../Header';
import HeaderCloseButton from '../HeaderCloseButton';
import ModalListBack from './ModalListBack';
import ModalListItem from './ModalListItem';

const ModalCategory = ({ closeModal, setCategory }) => {
  const [categoryView, switchCategoryView] = useState('default');
  const [categoryList, setCategoryList] = useState([]);
  const [detailCategoryList, setDetailCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const getCategoryList = async () => {
    switchCategoryView('default');
    try {
      const res = await getCategory();
      const { cclist, message, status } = res;
      if (!status) {
        return console.log(message);
      }
      setCategoryList(cclist);
    } catch (err) {
      console.log(err);
    }
  };
  const getDetailCategoryList = async (categorySeq, categoryName) => {
    setSelectedCategory({ categorySeq, categoryName });
    switchCategoryView('detail');
    try {
      const res = await getDetailCategory(categorySeq);
      const { cdclist, message, status } = res;
      if (!status) {
        return console.log(message);
      }
      setDetailCategoryList(cdclist);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCategoryList();
  }, []);
  const selectCategoryHandler = (categorySeq, categoryName) => {
    const categoryInfo = {
      categorySeq: selectedCategory.categorySeq,
      categoryName: selectedCategory.categoryName,
      detailCategorySeq: categorySeq,
      detailCategoryName: categoryName,
    };
    setCategory(categoryInfo);
    closeModal();
  };
  const backCategory = () => {
    setDetailCategoryList([]);
    switchCategoryView('default');
  };
  const list = categoryList.map(({ ccSeq, ccName }) => (
    <ModalListItem
      key={ccSeq}
      seq={ccSeq}
      name={ccName}
      hasDetail={true}
      selectEvent={getDetailCategoryList}
    />
  ));
  const detailList = detailCategoryList.map(({ cdcSeq, cdcName }) => (
    <ModalListItem key={cdcSeq} seq={cdcSeq} name={cdcName} selectEvent={selectCategoryHandler} />
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
        {categoryView === 'default' && <ModalList>{list}</ModalList>}
        {categoryView === 'detail' && (
          <ModalList>
            <ModalListBack name={selectedCategory.categoryName} backEvent={backCategory} />
            {detailList}
          </ModalList>
        )}
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

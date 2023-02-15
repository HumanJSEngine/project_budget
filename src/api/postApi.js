import apiClient from './apiClient';

export const addPost = async (postData) => {
  const {
    title,
    date,
    paymentSeq,
    price,
    storeName,
    location,
    balance,
    categorySeq,
    detailCategorySeq,
    content,
  } = postData;
  const params = {
    ehTitle: title,
    ehDate: date,
    ehPiSeq: paymentSeq,
    ehPrice: price,
    ehStoreName: storeName,
    ehLocation: location,
    ehBalance: balance,
    ehCcSeq: categorySeq,
    ehCdcSeq: detailCategorySeq,
    ehContent: content,
  };
  const res = await apiClient.post('/api/expense/add', { params });
  return res.data;
};

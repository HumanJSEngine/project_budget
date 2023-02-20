import apiClient from './apiClient';

export const addPost = async (postData) => {
  const {
    title,
    date,
    paymentSeq,
    price,
    storeName,
    location,
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
    ehCcSeq: categorySeq,
    ehCdcSeq: detailCategorySeq,
    ehContent: content,
  };
  console.log(params);
  const res = await apiClient.post('/api/expense/add', { params });
  return res.data;
};

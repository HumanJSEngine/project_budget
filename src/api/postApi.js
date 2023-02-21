import apiClient from './apiClient';

export const addPost = async (formData) => {
  // const {
  //   title,
  //   date,
  //   paymentSeq,
  //   price,
  //   storeName,
  //   location,
  //   categorySeq,
  //   detailCategorySeq,
  //   content,
  // } = postData;
  // const params = {
  //   ehTitle: title,
  //   ehDate: date,
  //   ehPiSeq: paymentSeq,
  //   ehPrice: price,
  //   ehStoreName: storeName,
  //   ehLocation: location,
  //   ehCcSeq: categorySeq,
  //   ehCdcSeq: detailCategorySeq,
  //   ehContent: content,
  // };
  // console.log(params);
  console.log(formData);
  // const res = await apiClient.post(
  //   '/api/expense/add',
  //   { params },
  //   {
  //     headers: { 'Content-Type': `multipart/form-data` },
  //   }
  // );
  // return res.data;
};

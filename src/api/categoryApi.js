import apiClient from './apiClient';

export const getCategory = async () => {
  const res = await apiClient.get('/api/category/list');
  return res.data;
};

export const addCategory = async (categoryName) => {
  const params = {
    ccName: categoryName,
  };
  const res = await apiClient.put('/api/category/input', { params });
  return res.data;
};

export const editCategory = async (categorySeq, categoryName) => {
  const params = {
    no: categorySeq,
    name: categoryName,
  };
  const res = await apiClient.post('/api/category/update', { params });
  return res.data;
};

export const deleteCategory = async (categorySeq) => {
  const params = {
    no: categorySeq,
  };
  const res = await apiClient.get('/api/category/delete', { params });
  return res.data;
};

export const getDetailCategory = async (categorySeq) => {
  const params = {
    no: categorySeq,
  };
  const res = await apiClient.get('/api/category/detail/list', { params });
  return res.data;
};

export const addDetailCategory = async (detailCategoryName) => {
  const params = {
    name: detailCategoryName,
  };
  const res = await apiClient.put('/api/category/detail/input', { params });
  return res.data;
};

export const editDetailCategory = async (detailCategorySeq, detailCategoryName) => {
  const params = {
    no: detailCategorySeq,
    name: detailCategoryName,
  };
  const res = await apiClient.post('/api/category/detail/update', { params });
  return res.data;
};

export const deleteDetailCategory = async (detailCategorySeq) => {
  const params = {
    no: detailCategorySeq,
  };
  const res = await apiClient.get('/api/category/detail/delete', { params });
  return res.data;
};

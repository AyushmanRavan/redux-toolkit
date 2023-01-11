import axiosInstance from "../redux/api"
  
  const getAll = (url) => {
    return axiosInstance.get(url);
  };
  
  const getById = (url,id) => {
    return axiosInstance.get(`${url}/${id}`);
  };
  
  const create = (url,data) => {
    return axiosInstance.post(url, data);
  };
  
  const update = (id, data) => {
    return axiosInstance.put(`${url}/${id}`, data);
  };
  
  const removeById = (url,id) => {
    return axiosInstance.delete(`${url}/${id}`);
  };
  
  const removeAll = (url) => {
    return axiosInstance.delete(url);
  };
  
  const findByTitle = (url,title) => {
    return axiosInstance.get(`${url}?title=${title}`);
  };
  
  const tutorialService = { getAll, getById, create, update, removeById, removeAll, findByTitle };
  
  export default tutorialService;
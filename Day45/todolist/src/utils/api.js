import api from "../plugins/axios.js";

export const getMethod = async (endpoint) => {
  try {
    const { data } = await api.get(endpoint);
    return data;
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu: ", error);
  }
};

export const postMethod = async (endpoint, payload) => {
  try {
    const { data } = await api.post(endpoint, payload);
    return data;
  } catch (error) {
    console.error("Lỗi khi gửi dữ liệu: ", error);
  }
};

export const putMethod = async (endpoint, payload) => {
  try {
    const { data } = await api.put(endpoint, payload);
    return data;
  } catch (error) {
    console.error("Lỗi khi gửi dữ liệu: ", error);
  }
};

export const deleteMethod = async (endpoint) => {
  try {
    const { data } = await api.delete(endpoint);
    return data;
  } catch (error) {
    console.error("Lỗi khi gửi dữ liệu: ", error);
  }
};

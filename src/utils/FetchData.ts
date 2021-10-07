import axios from 'axios'

export const postAPI = async (url: string, post: Object, token?: string) => {
  return await axios.post(`/api/${url}`, post, {
    headers: {Authorization: `Bearer ${token}` || ""}
  });
}

export const getAPI = async (url: string, token?: string) => {
  return await axios.get(`/api/${url}`, {
    headers: {Authorization: `Bearer ${token}` || ""}
  })
}
export const patchAPI = async (url: string, post: object, token?: string) => {
  return await axios.patch(`/api/${url}`, post, {
    headers: {Authorization: `Bearer ${token}` || ""}
  });
}

export const putAPI = async (url: string, post: object, token?:string) => {
  return await axios.put(`/api/${url}`, post, {
    headers: {Authorization: `Bearer ${token}` || ""}
  });
}

export const deleteAPI = async (url: string, token?: string) => {
  return await axios.delete(`/api/${url}`, {
    headers: {Authorization: `Bearer ${token}` || ""}
  });
}

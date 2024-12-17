import {axiosClient} from "./axios";

const AdminApi = {
    login: async (data) => axiosClient.post('/admin/login', data),
    checkAuth: async (data) => axiosClient.get('/admin/checkAuth', data),
    getUsers: async () => axiosClient.get('/admin/users'),
    createUser: async (data) => axiosClient.post('/admin/users/create', data),
    updatePermissions: async (data,id) => axiosClient.put(`/admin/users/${id}/permissions`, data),
    deleteUser: async (id) => axiosClient.delete(`/clients/${id}`),
    changeJobStatus: async (id,data) => await axiosClient.put(`/admin/jobs/${id}/change-status`,data),
    deleteJob: async (id) => await axiosClient.delete(`/admin/jobs/${id}/delete`),
    createCategory: async (data) => await axiosClient.post(`/categories`, data),
    updateCategory: async (id,data) => await axiosClient.put(`/categories/${id}`, data),
    deleteCategory: async (id) => await axiosClient.delete(`/categories/${id}`),
    editRole: async (id,data) => await axiosClient.post(`/admin/users/${id}/change-role`, data),
}

export default AdminApi

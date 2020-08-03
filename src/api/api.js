import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:
        {"API-KEY": "5070f7f4-f4c5-4dd3-aa9c-d2a3705cadaa"}
});

export const usersAPI = {
    getUsers (currentPage, elemOnPage) {
        return instance.get(`users?page=${currentPage}&count=${elemOnPage}`)
            .then(response => {
                return response.data})
    },
    follow (id) {
        return instance.post(`follow/${id}`);
    },
    unfollow (id) {
        return instance.delete(`follow/${id}`);
    },
    getProfile (userId) {
        return instance.get(`profile/${userId}`);
    }
}
//
export const authAPI = {
    registrate () {
        return instance.get(`auth/me`)
    }
}



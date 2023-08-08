import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '2ef50cd7-ba26-4780-8408-c2ded1414559'
    }
})


export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    getFollow: (id) => {
        return instance.post(`follow/${id}`, {})
    },
    getUnfollow: (id) => {
        return instance.delete(`follow/${id}`)
    },
}

export const mainAPI = {
    getMain: (userId) => {
        return instance.get(`profile/${userId ? userId : 29458}`)
    },
    getStatus: (userId) => {
        return instance.get(`profile/status/${userId ? userId : 29458 }`)
    },
    updateStatus: (status) => {
        return instance.put(`profile/status/`, {status: status})
    },
    savePhoto: (file) => {
        let formData = new FormData();
        formData.append('image', file)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        } )
    },
    saveInfo: (profile) => {
        return instance.put('profile/', profile )
    }
}

export const headerAPI = {
    getAuth: () => {
        return instance.get(`auth/me`)
    },
    getLogIn: (email, password, rememberMe = false) => {
        return instance.post(`auth/login` , {email, password, rememberMe})
    },
    getLogOut: () => {
        return instance.delete(`auth/login`)
    }
}

export const secureAPI = {
    getCaptcha: () => {
        return instance.get('security/get-captcha-url')
    }
}

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
        return instance.get(`profile/${userId ? userId : 29457}`)
    }
}

export const headerAPI = {
    getAuth: () => {
        return instance.get(`auth/me`)
    }
}

// export const getUsers = (currentPage, pageSize) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(Response => Response.data)
// }

// export const getFollow = (id) => {
//     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
//         headers: {
//             'API-KEY': '2ef50cd7-ba26-4780-8408-c2ded1414559'
//         },
//         withCredentials: true
//     })
// }

// export const getUnfollow = (id) => {
//     axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
//         headers: {
//             'API-KEY': '2ef50cd7-ba26-4780-8408-c2ded1414559'
//         },
//         withCredentials: true
//     })

// }

// export const getMain = (param) => {
//     axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${param['*'] ? param['*'] : 29457}`)
//     .then(Response => Response.data)
// }
import axios from 'axios'
import deepParseJson from '../utils/deepParseJson'

const unauthorizedCode = [401]

// const BaseService = axios.create({
//     timeout: 60000,
//     baseURL: "http://localhost:8001/api/v1/" ,
// })



const BaseService = axios.create({
    timeout: 60000,
    baseURL: "http://antonymwangig.site/api/v1/" ,
})




BaseService.interceptors.request.use(
    (config) => {
        try{
        let accessToken =    localStorage.getItem('auth_token');


        if (accessToken) {
            config.headers[
                'Authorization'
            ] = `Bearer ${accessToken}`
        }
    }catch(e){}
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

BaseService.interceptors.response.use(
    (response) => response,
    (error) => {
        const { response } = error

        if (response && unauthorizedCode.includes(response.status)) {
            //store.dispatch(signOutSuccess())
        }

        return Promise.reject(error)
    }
)

export default BaseService

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/auth-guard/AuthContext';
import BaseService from './BaseService'
import type { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

const ApiService = {
    fetchData<Response = unknown, Request = Record<string, unknown>>(
        param: AxiosRequestConfig<Request>
    ) {

        
        return new Promise<AxiosResponse<Response>>((resolve, reject) => {
            BaseService(param)
                .then((response: AxiosResponse<Response>) => {
                    
                    resolve(response)
                })
                .catch((errors: AxiosError) => {
                    if(errors.status==401){
                        localStorage.removeItem('auth_token');
                        var nav=useNavigate();
                        nav("/signin-account");
                    }
                    reject(errors)
                })
        })
    },
}

export default ApiService

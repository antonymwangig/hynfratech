import ApiService from './ApiService'


export async function userLogin(data: any) {
    return ApiService.fetchData<any>({
        url: '/login/',
        method: 'post',
        data,
    })
}

export async function googleLoginToken(data: any) {
    return ApiService.fetchData<any>({
        url: '/google-login/',
        method: 'post',
        data,
    })
}
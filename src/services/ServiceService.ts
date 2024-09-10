import ApiService from './ApiService'


export async function googleLogin(data: any) {
    return ApiService.fetchData<any>({
        url: '/google-login/',
        method: 'post',
        data,
    })
}
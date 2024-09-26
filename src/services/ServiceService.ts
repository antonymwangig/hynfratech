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


export async function getMyPermissions() {
    return ApiService.fetchData<any>({
        url: '/pms/',
        method: 'get',
    
    })
}


export async function getServicePlans() {
    return ApiService.fetchData<any>({
        url: '/service-plans/',
        method: 'get',
    
    })
}



export async function getPaymentMethod() {
    return ApiService.fetchData<any>({
        url: '/payment-method/',
        method: 'get',
        
    
    })
}

export async function createVirtualMachine(data: any) {
    return ApiService.fetchData<any>({
        url: '/create-virtual-machine/',
        method: 'post',
        data
    
    })
}


export async function getVirtualMachines(query: string) {
    return ApiService.fetchData<any>({
        url: '/virtual-machines/'+query,
        method: 'get',
        
    
    })
}


export async function getVMState(data: any) {
    return ApiService.fetchData<any>({
        url: '/vm-state/',
        method: 'post',
        data
        
    
    })
}
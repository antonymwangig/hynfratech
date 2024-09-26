import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getPaymentMethod } from '../../services/ServiceService';

interface PaymentFormData {
  full_name: string;
  card_number: string;
  expiration: string;
  cvv: string;
  card_type: string;
}

interface TypePaymentMethod {
  id: string;
  card_number: string;
  card_type: string;
}



const PaymentForm = (props:{plan: any,submit: any, data: any}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<PaymentFormData>();

  const[PaymentMethod, setPaymentMethod]=useState<TypePaymentMethod>()
  const cardPatterns = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/, // Visa: Starts with 4, 13 or 16 digits
    mastercard: /^5[1-5][0-9]{14}$/, // Mastercard: Starts with 51-55, 16 digits
    amex: /^3[47][0-9]{13}$/, // American Express: Starts with 34 or 37, 15 digits
  };

  // Validate card number against the different patterns
  const validateCardNumber = (value: string) => {
    if (cardPatterns.visa.test(value)) {
      setValue("card_type","VISA")
      return true
    };
    if (cardPatterns.mastercard.test(value)) {
      setValue("card_type","MC")
      return true;}
    if (cardPatterns.amex.test(value)){ 
      setValue("card_type","AMEX")
      return true;}
    return "Invalid card number. Enter a valid Visa, Mastercard, or American Express card.";
  };

  const onSubmit = (data: PaymentFormData) => {
    props.submit(data)
  };

  const getPaymentMethodFunc = async() => {
    var resp = await getPaymentMethod();
    setPaymentMethod(resp.data)
  }


  useEffect(()=>{

      
        setValue("full_name", "Antony Mwangi Njoroge");
        setValue("card_number", "343892842342394");
        setValue("expiration", "12/28");
        setValue("card_type", "VISA");
        setValue("cvv", "234");
      
    
      setValue
      getPaymentMethodFunc()
  },[])

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Payment Information</h2>

          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8"
            >
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="full_name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full name (as displayed on card)*
                  </label>
                  <input
                    {...register('full_name', { required: 'Full name is required' })}
                    type="text"
                    id="full_name"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="Bonnie Green"
                  />
                  {errors.full_name && (
                    <span className="text-red-500 text-sm">{errors.full_name.message}</span>
                  )}
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="card-number-input"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Card number*
                  </label>
                  <input
                    {...register('card_number', { required: 'Card number is required', validate: validateCardNumber})}
                    type="text"
                    id="card-number-input"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="xxxx-xxxx-xxxx-xxxx"
                  />
                  {errors.card_number && (
                    <span className="text-red-500 text-sm">{errors.card_number.message}</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="card-expiration-input"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Card expiration*
                  </label>
                  <input
                    {...register('expiration', { required: 'Expiration date is required', pattern:{
                      value :/^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                      message:"Invalid Date"

                    } })}
                    type="text"
                    id="card-expiration-input"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="12/23"
                  />
                  {errors.expiration && (
                    <span className="text-red-500 text-sm">{errors.expiration.message}</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="cvv-input"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    CVV*
                  </label>
                  <input
                    {...register('cvv', { required: 'CVV is required',pattern:{
                      value :/^([0-9]{3})$/,
                      message:"Invalid CVV"

                    }})}
                    type="text"
                    id="cvv-input"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    placeholder="•••"
                  />
                  {errors.cvv && (
                    <span className="text-red-500 text-sm">{errors.cvv.message}</span>
                  )}
                </div>
              </div>


              <button
                type="submit"
                className="flex w-full items-center  bg-blue-500 justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-600  transform active:scale-x-75 transition-transform"
              >
                Pay now
              </button>
              
            </form>
            

            <div className="mt-6 grow sm:mt-8 lg:mt-0">
          <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Original price</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">${props.plan.price}</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Savings</dt>
                <dd className="text-base font-medium text-green-500">10% Discount</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Discounted Price</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">${(props.plan.price)*0.9}</dd>
              </dl>

              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Tax</dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">${(props.plan.price)*0.9*0.2}</dd>
              </dl>
            </div>

            <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base font-bold text-gray-900 dark:text-white">Total</dt>
              <dd className="text-base font-bold text-gray-900 dark:text-white">${((props.plan.price)*0.9)+((props.plan.price)*0.9*0.2)}</dd>
            </dl>
          </div>

          <div className="mt-6 flex items-center justify-center gap-8">
            
          <svg  className="h-8 w-auto" width="96" height="32" viewBox="0 0 96 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_66_11401)">
            <path d="M35.475 8.51457H30.2249C29.8656 8.51457 29.5601 8.77558 29.5041 9.13024L27.3807 22.593C27.3384 22.8586 27.5442 23.0981 27.8136 23.0981H30.3201C30.6794 23.0981 30.9849 22.8371 31.041 22.4817L31.6136 18.8506C31.6689 18.4951 31.9752 18.2341 32.3337 18.2341H33.9957C37.4541 18.2341 39.4501 16.5606 39.9713 13.2442C40.2062 11.7933 39.9813 10.6533 39.3019 9.85493C38.5557 8.97824 37.2323 8.51457 35.475 8.51457ZM36.0807 13.4315C35.7936 15.3154 34.3542 15.3154 32.9624 15.3154H32.1702L32.726 11.7972C32.759 11.5845 32.9433 11.4279 33.1582 11.4279H33.5213C34.4694 11.4279 35.3637 11.4279 35.8259 11.9683C36.1015 12.2908 36.1859 12.7698 36.0807 13.4315Z" fill="#253B80"/>
            <path d="M51.1688 13.3709H48.6546C48.4405 13.3709 48.2555 13.5275 48.2224 13.7401L48.1111 14.4433L47.9353 14.1885C47.3911 13.3985 46.1774 13.1344 44.966 13.1344C42.1877 13.1344 39.8149 15.2386 39.3527 18.1904C39.1124 19.6628 39.454 21.0707 40.2893 22.0525C41.0554 22.9553 42.1517 23.3315 43.4559 23.3315C45.6945 23.3315 46.9358 21.8921 46.9358 21.8921L46.8237 22.5907C46.7815 22.8578 46.9873 23.0973 47.2552 23.0973H49.5198C49.8799 23.0973 50.1839 22.8363 50.2407 22.4809L51.5994 13.876C51.6424 13.6112 51.4375 13.3709 51.1688 13.3709ZM47.6643 18.2641C47.4218 19.7004 46.2818 20.6646 44.8278 20.6646C44.0977 20.6646 43.5143 20.4304 43.1397 19.9867C42.7681 19.5461 42.6269 18.9189 42.7451 18.2203C42.9715 16.7963 44.1307 15.8006 45.5624 15.8006C46.2764 15.8006 46.8567 16.0378 47.2391 16.4853C47.6221 16.9375 47.7741 17.5685 47.6643 18.2641Z" fill="#253B80"/>
            <path d="M64.5586 13.3708H62.0322C61.7911 13.3708 61.5646 13.4906 61.428 13.691L57.9435 18.8237L56.4665 13.8913C56.3736 13.5827 56.0888 13.3708 55.7664 13.3708H53.2837C52.982 13.3708 52.7724 13.6656 52.8684 13.9497L55.6512 22.1162L53.035 25.8095C52.8292 26.1005 53.0365 26.5004 53.3919 26.5004H55.9153C56.1548 26.5004 56.379 26.3837 56.5149 26.1872L64.9178 14.0579C65.119 13.7677 64.9125 13.3708 64.5586 13.3708Z" fill="#253B80"/>
            <path d="M72.9231 8.51457H67.6722C67.3137 8.51457 67.0082 8.77558 66.9521 9.13024L64.8287 22.593C64.7865 22.8586 64.9923 23.0981 65.2602 23.0981H67.9547C68.205 23.0981 68.4192 22.9154 68.4583 22.6667L69.0609 18.8506C69.1162 18.4951 69.4225 18.2341 69.781 18.2341H71.4423C74.9014 18.2341 76.8966 16.5606 77.4186 13.2442C77.6543 11.7933 77.4279 10.6533 76.7485 9.85493C76.003 8.97824 74.6803 8.51457 72.9231 8.51457ZM73.5288 13.4315C73.2425 15.3154 71.8031 15.3154 70.4105 15.3154H69.619L70.1756 11.7972C70.2086 11.5845 70.3913 11.4279 70.607 11.4279H70.9702C71.9175 11.4279 72.8126 11.4279 73.2747 11.9683C73.5503 12.2908 73.634 12.7698 73.5288 13.4315Z" fill="#253B80"/>
            <path d="M88.616 13.3709H86.1034C85.8877 13.3709 85.7042 13.5275 85.672 13.7401L85.5607 14.4433L85.3841 14.1885C84.8398 13.3985 83.6269 13.1344 82.4155 13.1344C79.6373 13.1344 77.2652 15.2386 76.803 18.1904C76.5635 19.6628 76.9036 21.0707 77.7388 22.0525C78.5065 22.9553 79.6012 23.3315 80.9055 23.3315C83.144 23.3315 84.3854 21.8921 84.3854 21.8921L84.2733 22.5907C84.2311 22.8578 84.4368 23.0973 84.7062 23.0973H86.9701C87.3286 23.0973 87.6342 22.8363 87.6902 22.4809L89.0498 13.876C89.0912 13.6112 88.8855 13.3709 88.616 13.3709ZM85.1116 18.2641C84.8705 19.7004 83.729 20.6646 82.275 20.6646C81.5465 20.6646 80.9615 20.4304 80.5869 19.9867C80.2153 19.5461 80.0756 18.9189 80.1923 18.2203C80.4203 16.7963 81.578 15.8006 83.0097 15.8006C83.7236 15.8006 84.304 16.0378 84.6863 16.4853C85.0709 16.9375 85.2229 17.5685 85.1116 18.2641Z" fill="#253B80"/>
            <path d="M91.58 8.88377L89.4251 22.5929C89.3829 22.8586 89.5886 23.0981 89.8565 23.0981H92.0229C92.383 23.0981 92.6885 22.8371 92.7438 22.4816L94.8687 9.01965C94.9109 8.75404 94.7052 8.51375 94.4372 8.51375H92.0114C91.7972 8.51452 91.613 8.67113 91.58 8.88377Z" fill="#253B80"/>
            <path d="M5.57789 25.7144L5.97938 23.1642L5.08504 23.1434H0.814453L3.78229 4.32537C3.7915 4.26856 3.82144 4.21559 3.8652 4.17797C3.90896 4.14036 3.965 4.11963 4.02334 4.11963H11.2241C13.6147 4.11963 15.2644 4.61708 16.1258 5.59894C16.5296 6.05955 16.7867 6.54088 16.9111 7.07058C17.0416 7.62638 17.0439 8.29042 16.9165 9.10032L16.9073 9.15943V9.67838L17.3111 9.90714C17.6511 10.0875 17.9214 10.2941 18.1286 10.5305C18.4741 10.9243 18.6975 11.4248 18.7919 12.0183C18.8894 12.6286 18.8572 13.3548 18.6975 14.177C18.5132 15.1227 18.2154 15.9465 17.8131 16.6205C17.4431 17.2415 16.9717 17.7566 16.4121 18.1558C15.8778 18.5351 15.2429 18.8229 14.5252 19.0072C13.8296 19.1884 13.0366 19.2797 12.1669 19.2797H11.6064C11.2057 19.2797 10.8165 19.424 10.511 19.6827C10.2047 19.9468 10.002 20.3076 9.93982 20.7022L9.8976 20.9318L9.18827 25.4265L9.15603 25.5915C9.14758 25.6438 9.133 25.6699 9.1115 25.6875C9.09231 25.7036 9.06467 25.7144 9.0378 25.7144H5.57789Z" fill="#253B80"/>
            <path d="M17.6934 9.21924C17.6719 9.35665 17.6474 9.49714 17.6197 9.64146C16.6701 14.517 13.4213 16.2013 9.27201 16.2013H7.15936C6.65193 16.2013 6.22433 16.5697 6.14526 17.0703L5.06361 23.9302L4.7573 25.8748C4.70587 26.2033 4.9592 26.4996 5.29084 26.4996H9.03787C9.48159 26.4996 9.85851 26.1772 9.92837 25.7396L9.96522 25.5493L10.6707 21.0722L10.716 20.8265C10.7851 20.3874 11.1628 20.065 11.6065 20.065H12.1669C15.7973 20.065 18.6392 18.591 19.4698 14.3258C19.8168 12.544 19.6372 11.0563 18.719 10.0099C18.4411 9.69443 18.0965 9.43265 17.6934 9.21924Z" fill="#179BD7"/>
            <path d="M16.7 8.82319C16.5549 8.78097 16.4052 8.74258 16.2516 8.70804C16.0973 8.67426 15.9392 8.64432 15.7765 8.61822C15.2068 8.5261 14.5827 8.48234 13.9141 8.48234H8.27011C8.13116 8.48234 7.99912 8.51382 7.8809 8.57062C7.62066 8.69575 7.4272 8.94218 7.38037 9.24388L6.17973 16.8485L6.14526 17.0703C6.22433 16.5697 6.65193 16.2013 7.15936 16.2013H9.27201C13.4213 16.2013 16.6701 14.5162 17.6197 9.64146C17.6481 9.49714 17.6719 9.35665 17.6934 9.21924C17.4531 9.0918 17.1928 8.98287 16.9126 8.88998C16.8435 8.86695 16.7721 8.84468 16.7 8.82319Z" fill="#222D65"/>
            <path d="M7.38037 9.24388C7.4272 8.94218 7.62072 8.69572 7.88096 8.57135C7.99995 8.51455 8.13122 8.48307 8.27017 8.48307H13.9141C14.5828 8.48307 15.2069 8.52683 15.7765 8.61895C15.9393 8.64505 16.0974 8.67499 16.2517 8.70877C16.4052 8.74331 16.5549 8.7817 16.7 8.82392C16.7722 8.84542 16.8436 8.86768 16.9134 8.88994C17.1936 8.98283 17.4539 9.09261 17.6942 9.21927C17.9767 7.41754 17.6919 6.19079 16.7177 5.07996C15.6437 3.85705 13.7053 3.3335 11.225 3.3335H4.02415C3.51749 3.3335 3.08528 3.70198 3.00698 4.20327L0.00766819 23.2148C-0.0514429 23.591 0.238739 23.9303 0.617971 23.9303L5.06361 23.9302L6.17973 16.8485L7.38037 9.24388Z" fill="#253B80"/>
            </g>
            <defs>
            <clipPath id="clip0_66_11401">
            <rect width="95.3333" height="32" fill="white"/>
            </clipPath>
            </defs>
            </svg>

            <svg  className="h-8 w-auto" width="88" height="48" viewBox="0 0 88 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M56.9919 10C50.7791 10 45.227 13.1804 45.227 19.0565C45.227 25.7951 55.0738 26.2605 55.0738 29.6459C55.0738 31.0713 53.4198 32.3473 50.5949 32.3473C46.5857 32.3473 43.5893 30.5644 43.5893 30.5644L42.3072 36.494C42.3072 36.494 45.759 38 50.3419 38C57.1345 38 62.4795 34.6634 62.4795 28.687C62.4795 21.5663 52.5917 21.1147 52.5917 17.9726C52.5917 16.8558 53.9494 15.6324 56.7663 15.6324C59.9445 15.6324 62.5376 16.9291 62.5376 16.9291L63.7924 11.2021C63.7924 11.2021 60.9709 10 56.9919 10ZM0.150475 10.4323L0 11.2967C0 11.2967 2.61379 11.7691 4.96788 12.7116C7.99894 13.7922 8.21493 14.4213 8.72539 16.3753L14.2881 37.5542H21.7451L33.2331 10.4323H25.7932L18.4115 28.8726L15.3994 13.2417C15.1231 11.4528 13.7238 10.4323 12.0111 10.4323H0.150475V10.4323ZM36.2247 10.4323L30.3884 37.5542H37.4829L43.2987 10.4322H36.2247V10.4323ZM75.7932 10.4323C74.0825 10.4323 73.1761 11.3368 72.511 12.9175L62.117 37.5542H69.5569L70.9963 33.448H80.0601L80.9355 37.5542H87.5L81.7731 10.4323H75.7932V10.4323ZM76.7608 17.7598L78.9661 27.9372H73.0579L76.7608 17.7598Z" fill="#1434CB"/>
            </svg>
            <svg  className="h-8 w-auto" width="156" height="96" viewBox="0 0 156 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M98.6625 10.2627H56.6626V85.7378H98.6625V10.2627Z" fill="#FF5F00"/>
                <path d="M59.3294 47.9999C59.3227 40.7311 60.9699 33.5561 64.1461 27.018C67.3224 20.4799 71.9445 14.7501 77.6625 10.2624C70.5815 4.69659 62.0775 1.2353 53.1223 0.274141C44.1672 -0.687021 35.1223 0.890695 27.0215 4.82703C18.9206 8.76336 12.0907 14.8995 7.31232 22.534C2.53396 30.1685 0 38.9934 0 47.9999C0 57.0065 2.53396 65.8314 7.31232 73.4659C12.0907 81.1004 18.9206 87.2365 27.0215 91.1728C35.1223 95.1091 44.1672 96.6869 53.1223 95.7257C62.0775 94.7645 70.5815 91.3033 77.6625 85.7374C71.9445 81.2497 67.3225 75.5199 64.1462 68.9818C60.97 62.4437 59.3228 55.2687 59.3294 47.9999Z" fill="#EB001B"/>
                <path d="M155.323 47.9999C155.323 57.0064 152.789 65.8312 148.011 73.4657C143.233 81.1002 136.403 87.2363 128.303 91.1727C120.202 95.1091 111.157 96.6868 102.202 95.7257C93.2473 94.7645 84.7434 91.3032 77.6626 85.7374C83.3756 81.2452 87.9941 75.5145 91.1698 68.9774C94.3455 62.4403 95.9957 55.2676 95.9957 47.9999C95.9957 40.7323 94.3455 33.5595 91.1698 27.0224C87.9941 20.4853 83.3756 14.7546 77.6626 10.2624C84.7434 4.69657 93.2473 1.23528 102.202 0.274128C111.157 -0.687022 120.202 0.890764 128.303 4.82714C136.403 8.76351 143.233 14.8996 148.011 22.5341C152.789 30.1686 155.323 38.9935 155.323 47.9999Z" fill="#F79E1B"/>
                </svg>

           </div>
           </div>
      

        
          </div>
          
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
            <div className='w-full lg:max-w-xl'>
              <div className="mb-6">
              
              { PaymentMethod?.card_number &&(
                <>
                <p className="mt-4 text-center text-gray-600 dark:text-gray-400">Pay with</p>
                                  
                  <a href="#" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600" onClick={()=>{props.submit(PaymentMethod)}}>
                      { PaymentMethod.card_type=="VISA" &&(
                        <svg  className="h-8 w-auto" width="88" height="48" viewBox="0 0 88 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.9919 10C50.7791 10 45.227 13.1804 45.227 19.0565C45.227 25.7951 55.0738 26.2605 55.0738 29.6459C55.0738 31.0713 53.4198 32.3473 50.5949 32.3473C46.5857 32.3473 43.5893 30.5644 43.5893 30.5644L42.3072 36.494C42.3072 36.494 45.759 38 50.3419 38C57.1345 38 62.4795 34.6634 62.4795 28.687C62.4795 21.5663 52.5917 21.1147 52.5917 17.9726C52.5917 16.8558 53.9494 15.6324 56.7663 15.6324C59.9445 15.6324 62.5376 16.9291 62.5376 16.9291L63.7924 11.2021C63.7924 11.2021 60.9709 10 56.9919 10ZM0.150475 10.4323L0 11.2967C0 11.2967 2.61379 11.7691 4.96788 12.7116C7.99894 13.7922 8.21493 14.4213 8.72539 16.3753L14.2881 37.5542H21.7451L33.2331 10.4323H25.7932L18.4115 28.8726L15.3994 13.2417C15.1231 11.4528 13.7238 10.4323 12.0111 10.4323H0.150475V10.4323ZM36.2247 10.4323L30.3884 37.5542H37.4829L43.2987 10.4322H36.2247V10.4323ZM75.7932 10.4323C74.0825 10.4323 73.1761 11.3368 72.511 12.9175L62.117 37.5542H69.5569L70.9963 33.448H80.0601L80.9355 37.5542H87.5L81.7731 10.4323H75.7932V10.4323ZM76.7608 17.7598L78.9661 27.9372H73.0579L76.7608 17.7598Z" fill="#1434CB"/>
                        </svg>
                        
                        )} {  PaymentMethod.card_type=="MC" &&( 
                          <svg  className="h-8 w-auto" width="156" height="96" viewBox="0 0 156 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M98.6625 10.2627H56.6626V85.7378H98.6625V10.2627Z" fill="#FF5F00"/>
                          <path d="M59.3294 47.9999C59.3227 40.7311 60.9699 33.5561 64.1461 27.018C67.3224 20.4799 71.9445 14.7501 77.6625 10.2624C70.5815 4.69659 62.0775 1.2353 53.1223 0.274141C44.1672 -0.687021 35.1223 0.890695 27.0215 4.82703C18.9206 8.76336 12.0907 14.8995 7.31232 22.534C2.53396 30.1685 0 38.9934 0 47.9999C0 57.0065 2.53396 65.8314 7.31232 73.4659C12.0907 81.1004 18.9206 87.2365 27.0215 91.1728C35.1223 95.1091 44.1672 96.6869 53.1223 95.7257C62.0775 94.7645 70.5815 91.3033 77.6625 85.7374C71.9445 81.2497 67.3225 75.5199 64.1462 68.9818C60.97 62.4437 59.3228 55.2687 59.3294 47.9999Z" fill="#EB001B"/>
                          <path d="M155.323 47.9999C155.323 57.0064 152.789 65.8312 148.011 73.4657C143.233 81.1002 136.403 87.2363 128.303 91.1727C120.202 95.1091 111.157 96.6868 102.202 95.7257C93.2473 94.7645 84.7434 91.3032 77.6626 85.7374C83.3756 81.2452 87.9941 75.5145 91.1698 68.9774C94.3455 62.4403 95.9957 55.2676 95.9957 47.9999C95.9957 40.7323 94.3455 33.5595 91.1698 27.0224C87.9941 20.4853 83.3756 14.7546 77.6626 10.2624C84.7434 4.69657 93.2473 1.23528 102.202 0.274128C111.157 -0.687022 120.202 0.890764 128.303 4.82714C136.403 8.76351 143.233 14.8996 148.011 22.5341C152.789 30.1686 155.323 38.9935 155.323 47.9999Z" fill="#F79E1B"/>
                          </svg>
          
                                )}        <span className="mx-2">{PaymentMethod.card_number}</span>
                      </a> 
                      </>
                  )}
              </div>
                           
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaymentForm;

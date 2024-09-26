import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { WebHeader } from '../../components/header'
import { Logo } from '../../components/logo';
import {  useGoogleLogin } from '@react-oauth/google';
import { userLogin,googleLoginToken } from '../../services/ServiceService';
import { useForm } from "react-hook-form"
import { useAuth } from '../../components/auth-guard';
import Art from '../../components/art/Art';


const SignIn= () => {

  const [error, setError] =useState(null);
  const navigate=useNavigate();
  const {register,handleSubmit,formState: { errors }} = useForm();  
  const { login ,logout } = useAuth();


  useEffect(()=>{logout();},[])
 
  const onSubmit = async(data: any) => {
    let resp= await userLogin(data);
    if(resp.data.access_token){
        login(resp.data.access_token)
        navigate("/console");
      }
      if(resp.data.error){
      setError(resp.data.error)
      }
      
  }
  

  

  const googleloginClick = useGoogleLogin({
    onSuccess: (codeResponse: any) => {
      googleLoginTokenFunc({"access_token":codeResponse.access_token})

    },
    onError: (error) => console.log('Login Failed:', error)
});

  

  const googleLoginTokenFunc=async(data: any)=>{
    let resp =await googleLoginToken(data);

    login(resp.data.access_token)
    navigate("/console");


  }

   
  return (
    
    <div
      className={
        'relative mx-auto my-0 flex min-h-screen flex-col overflow-hidden bg-white shadow-2xl'
       }
    >
      <WebHeader />
      <main className="flex-shrink-0 flex-grow items-center lg:flex">

        <section className={'text-center lg:w-full lg:py-20 lg:text-left'}>
          <div className="hero mx-auto w-full max-w-6xl px-6">
            <div className="hero-inner relative lg:flex">
              <div className="hero-copy pb-16 pt-1 lg:min-w-[40rem] lg:pr-20 lg:pt-1 -mt-5">
                <div className="mx-auto w-full max-w-3xl">
                  


                  <section className="bg-white dark:bg-gray-900">
                      <div className="container flex flex-col items-center  min-h-screen px-6 mx-auto">
                          
                          <h1 className="mt-4 text-2xl font-semibold w-full max-w-md mx-auto tracking-wide text-left text-gray-800 capitalize md:text-3xl dark:text-white">
                              sign In 
                          </h1>

                          
                          <div className="w-full max-w-md mx-auto mt-6">
                              <form onSubmit={handleSubmit(onSubmit)}>
                            
                              <div>
                                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                                      <input {...register("email", {
                                          required: "Email is required",
                                          maxLength: 50,
                                           pattern: {
                                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                          message: "Enter a valid email address"
                                        } })}  type="email" placeholder="Enter your email address" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                 
                                 {errors.email && <p>{errors.email.message?.toString()}</p>}
                                  </div>

                                  <div>
                                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                      <input {...register("password",{required:true,maxLength: 50 })}  type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                  </div>


                                  <a href="#" className="inline-block mt-4 text-blue-500 capitalize hover:underline dark:text-blue-400">
                                      reset password?
                                  </a>


                                  {error &&(<p className="mt-4 text-center text-red-600 dark:text-gray-400">{error}</p>)}
                                 
                                  <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform active:scale-x-75 transition-transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                      Sign in
                                  </button>

                                  <p className="mt-4 text-center text-gray-600 dark:text-gray-400">or sign in with</p>
                                     

                                   <a href="#" className="flex items-center justify-center px-6 py-3 mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600" onClick={()=>{googleloginClick()}}>
                                    <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                        <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                        <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                        <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                                    </svg>

                                    <span className="mx-2">Sign in with Google</span>
                                </a> 

                                  <div className="mt-6 text-center">
                                      <a href="/create-account" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                          Don’t have an account yet? Sign up
                                      </a>
                                  </div>

                                  
                              </form>
                          </div>
                      </div>
                  </section>
                                    
                </div>
              </div>

                <div><Art/></div>
            </div>
          </div>
        </section>
        
      </main>
    </div>

  );
};

export default SignIn;

import { useEffect, useState } from 'react';
import PaymentForm from './PaymentForm';
import { createVirtualMachine, getServicePlans } from '../../services/ServiceService';
import { useForm } from 'react-hook-form';
import { FaInfo} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const NewVM = () => {
   const nav= useNavigate()
    
  const {register,setValue,handleSubmit,formState: { errors },trigger} = useForm();  
    const [step ,setStep]=useState(0);
    const [plan ,setPlan]=useState<any>({});

    const [plans ,setPlans]=useState([]);
    const [formData ,setFormData]=useState<any>({});    
    const [cardData ,setCardData]=useState<any>({});
    const [loadingPlans ,setloadingPlans]=useState<boolean>(false);
    const [isCompleted ,setIsCompleted]=useState<boolean>(false);


    const getServicePlansFunc = async () =>{
        setloadingPlans(true);
        var resp = await getServicePlans();
        setloadingPlans(false);
        console.log(resp.data);
        return setPlans(resp.data);
    }




    useEffect(()=>{
       getServicePlansFunc();
        
    },[])



    const onSubmit = (data: any) => {       
            setFormData(data as any)
            setStep(1)
    
    };

    const triggerSubmit = async (item: any) => {
        const isValid = await trigger(); 
           if (isValid) {
            setValue("plan",item.id)
            setPlan(item)
            handleSubmit(onSubmit)(); 
        }
        
    };


    const paymentInfo = async (info: any)=>{
        console.log(">>>",info);
            setCardData(info)
            setStep(2)
            create()
    }

    const create = async ()=>{
        let payload=formData;
        payload["card"]=cardData
        setIsCompleted(false)
        var resp= await createVirtualMachine(payload)
        console.log("sd",resp)
        if(resp.status){
            setIsCompleted(true)
        }else{
            setIsCompleted(false)
            setStep(1)

        }

  }
  return (
    <>
    <div className="flex flex-col gap-10">
        
            <div className='w-full 2xsm:pl-14 xsm:pl-14 md:pl-[20%] sm:pl-[10%] lg:pl-[20%] xl:pl-[22%]'>
            <ol className="flex items-center max-w-screen-lg">
                <li className={`flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b  ${step == 0 ? 'after:border-gray-100' :'after:border-blue-100'} after:border-4 after:inline-block dark:after:border-blue-800`}>
                    <span onClick={()=>{if(step>0)setStep(0)}} className={`flex items-center justify-center w-10 h-10 ${step == 0 ? 'bg-gray-100' :'bg-blue-100'}  rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0`}>
                        { step == 0 ? (<FaInfo className='text-gray-500'/>) :(
                        <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>)}
                    </span>
                </li>
                <li className={`flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b ${step < 2 ? 'after:border-gray-100' :'after:border-blue-100'} after:border-4 after:inline-block dark:after:border-gray-700`}>
                    <span  onClick={()=>{if(step>1)setStep(1)}} className={`flex items-center justify-center w-10 h-10 ${step < 2 ? 'bg-gray-100' :'bg-blue-100'} rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0`}>
                    { step < 2 ? (
                        <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                        </svg>
                    ):(
                        <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg> 
                    )}
                    </span>
                </li>
                <li className="flex items-center w-full">
                    <span  onClick={()=>{if(step>2)setStep(2)}} className={`flex items-center justify-center w-10 h-10 ${step < 3 ? 'bg-gray-100' :'bg-blue-100'} rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0`}>
                        { step < 3 ? (
                        <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                        </svg>
                        ):(
                            <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg> 
                        )}
                    </span>
                </li>
            </ol>
            </div>

                {/* Step one */}
            { step==0 && (
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    { loadingPlans ? (<>
                            <div className="  justify-center flex">
                                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading plans...</span>
                            </div>
                            </>):(<>    
                            <div className='max-w-screen-md p-8'>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Enter VM name</label>
                                    <input {...register("name", {
                                        required: "VM name is required",
                                        maxLength: 100,
                                        })}  type="text" placeholder="Enter VM name" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                               
                               {errors.name && <p className='text-danger'>{errors.name.message?.toString()}</p>}
                           </div>

                    <div className="flex flex-wrap p-4">
                       
                                {plans.map((item: any,index: number) => (
                                    <div key={item.name} className="max-w-sm w-full m-4 bg-white rounded-lg shadow-lg p-6">
                                        <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                                        <p className="text-xl text-gray-700 mb-4">${item.price} / month</p>
                                        <h3 className="text-lg font-semibold mb-2">Features:</h3>
                                        <ul className="list-disc list-inside mb-4">
                                            {item.features.map((feature: any, index: number) => (
                                                <li key={index} className="text-gray-600">{feature}</li>
                                            ))}
                                        </ul>
                                        <button onClick={()=>{triggerSubmit(item)}} className="w-full bg-blue-500 text-white py-3 text-md rounded hover:bg-blue-600  transform active:scale-x-75 transition-transform">
                                            Order
                                        </button>
                                    </div>
                                ))}
                            </div>
                            </>
                            )}
                            
                            </form>
                        </div>
                    )}

            { step==1 && (
                <div>
                    <PaymentForm plan={plan} submit={paymentInfo} />
                </div>
            
            )}

            { step==2 && (
                <div> 
                    <div className="h-[60vh] items-center justify-center flex w-full">
                       { !isCompleted ? (
                        <div className='block'>
                        <div className='flex w-full justify-center'>
                            <svg aria-hidden="true" className="w-24 h-24 lg:w-32 lg:h-32 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            </div>
                            <div className='flex w-full justify-center mt-2'>
                            <span className="item">Processing ...</span>
                             </div>
                        </div>
                        ):(
                        <div className='block'>
                        <div className='flex w-full justify-center'>
                            <span className="center text-blue-600 dark:text-blue-500">
                        <svg className="w-32 h-32 text-blue-600 lg:w-32 lg:h-32 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                        </span>
                        </div>
                            <div className='flex w-full justify-center mt-2'>
                            <span className="item text-title-md">Completed ...</span>
                             </div>

                             <div className='flex w-full justify-center mt-10'>
                             <button onClick={()=>{nav("/console/my-space")}} className="w-full bg-blue-500 text-white py-3 text-md rounded-full hover:bg-blue-600  transform active:scale-x-75 transition-transform">
                                            Continue
                                        </button>
                        </div>
                        </div>
                       

                        )
                        }
                    </div>
                    
                </div>
            
            )}
            </div>

    </>
  );
};

export default NewVM;

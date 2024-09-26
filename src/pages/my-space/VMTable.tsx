import { useEffect, useState } from "react";
import { getVirtualMachines, getVMState } from "../../services/ServiceService";







const VMTable = () => {

  const [items, setItems]= useState([]);


  const getMyVmsFunc= async(vm: any)=>{
   var resp= await getVMState(vm); 
  }
  const getMyVms = async(query: any)=>{
    var resp: any= await  getVirtualMachines(query);
    setItems(resp.data)
    items.forEach((vm: any)=>{
        getMyVmsFunc(vm)
     })

  }




  useEffect(()=>{
    getMyVms('');
  },[]);
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Resourses
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              CPU
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              MEMORY
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              DISK
            </h5>
          </div>
        </div>

        {items.map((item: any, key: any) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === items.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {item.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{item.vcpu_count}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${item.memory_size} KIB</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{item.disk_size}GB</p>
            </div>

            </div>
        ))}
      </div>
    </div>
  );
};

export default VMTable;

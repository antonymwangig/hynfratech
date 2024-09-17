import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the styles
const Plans = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    {
      "name": "Bronze",
      "price": "10",
      "features": ["1 Core", "2 GB RAM", "10 GB Storage", "500 GB Network Bandwidth", "Up to 2 backups/month"]
    },
    {
      "name": "Silver",
      "price": "25",
      "features": ["2 Cores", "4 GB RAM", "50 GB Storage", "1 TB Network Bandwidth", "Up to 4 backups/month"]
    },
    {
      "name": "Gold",
      "price": "50",
      "features": ["4 Cores", "8 GB RAM", "200 GB Storage", "5 TB Network Bandwidth", "Up to 10 backups/month"]
    },
    {
      "name": "Platinum",
      "price": "100",
      "features": ["8 Cores", "16 GB RAM", "1 TB Storage", "Unlimited Bandwidth", "Unlimited backups/month"]
    }
  ]);

  useEffect(() => {
    AOS.init({ duration: 3000 }); // Initialize AOS animation
  }, []);

  const planSelected = (plan: any) => {
    navigate("/signin-account");
  };

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto w-full max-w-7xl px-6 pt-4 pb-12 text-primary`}>
        <h1 className={`w-full my-2 text-5xl font-bold leading-tight text-center text-gray-600`}>Plans</h1>
        <div className={`w-full mb-4`}>
          <div className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}></div>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-2">
          {items.map((item, index) => (
            <div
              key={index}
              data-aos="flip-up"
              data-twe-animation-on-scroll="repeat"
              className="w-full max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-default sm:p-8 dark:bg-gray-800 dark:border-gray-700 plan-card"
            >
              <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{item.name}</h5>
              <div className="flex items-baseline text-gray-900 dark:text-white">
                <span className="text-3xl font-semibold">$</span>
                <span className="text-5xl font-extrabold tracking-tight">{item.price}</span>
                <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
              </div>
              <ul role="list" className="space-y-5 my-7">
                {item.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-blue-500 dark:text-blue-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-900 dark:text-gray-400 ms-3">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
                onClick={() => planSelected(item)}
              >
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;

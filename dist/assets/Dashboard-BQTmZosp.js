import{j as e}from"./index-CidQHROC.js";const r=[{name:"Google",visitors:3.5,revenues:"5,768",sales:590,conversion:4.8},{name:"Twitter",visitors:2.2,revenues:"4,635",sales:467,conversion:4.3},{name:"Github",visitors:2.1,revenues:"4,290",sales:420,conversion:3.7},{name:"Vimeo",visitors:1.5,revenues:"3,580",sales:389,conversion:2.5},{name:"Facebook",visitors:3.5,revenues:"6,768",sales:390,conversion:4.2}],a=()=>e.jsxs("div",{className:"rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1",children:[e.jsx("h4",{className:"mb-6 text-xl font-semibold text-black dark:text-white",children:"Top Channels"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5",children:[e.jsx("div",{className:"p-2.5 text-center xl:p-5",children:e.jsx("h5",{className:"text-sm font-medium uppercase xsm:text-base",children:"Visitors"})}),e.jsx("div",{className:"p-2.5 text-center xl:p-5",children:e.jsx("h5",{className:"text-sm font-medium uppercase xsm:text-base",children:"Revenues"})}),e.jsx("div",{className:"hidden p-2.5 text-center sm:block xl:p-5",children:e.jsx("h5",{className:"text-sm font-medium uppercase xsm:text-base",children:"Sales"})}),e.jsx("div",{className:"hidden p-2.5 text-center sm:block xl:p-5",children:e.jsx("h5",{className:"text-sm font-medium uppercase xsm:text-base",children:"Conversion"})})]}),r.map((s,t)=>e.jsxs("div",{className:`grid grid-cols-3 sm:grid-cols-5 ${t===r.length-1?"":"border-b border-stroke dark:border-strokedark"}`,children:[e.jsx("div",{className:"flex items-center gap-3 p-2.5 xl:p-5",children:e.jsx("p",{className:"hidden text-black dark:text-white sm:block",children:s.name})}),e.jsx("div",{className:"flex items-center justify-center p-2.5 xl:p-5",children:e.jsxs("p",{className:"text-black dark:text-white",children:[s.visitors,"K"]})}),e.jsx("div",{className:"flex items-center justify-center p-2.5 xl:p-5",children:e.jsxs("p",{className:"text-meta-3",children:["$",s.revenues]})}),e.jsx("div",{className:"hidden items-center justify-center p-2.5 sm:flex xl:p-5",children:e.jsx("p",{className:"text-black dark:text-white",children:s.sales})}),e.jsx("div",{className:"hidden items-center justify-center p-2.5 sm:flex xl:p-5",children:e.jsxs("p",{className:"text-meta-5",children:[s.conversion,"%"]})})]},t))]})]}),i=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"flex flex-col gap-10",children:e.jsx(a,{})})});export{i as default};

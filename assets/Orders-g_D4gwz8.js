import{r as x,S as c,j as e}from"./index-24f_J-Oz.js";import{T as m}from"./Title-CsCXNHbM.js";const n=()=>{const{products:a,currency:r}=x.useContext(c);return e.jsxs("div",{className:"border-t pt-16",children:[e.jsx("div",{className:"text-2xl",children:e.jsx(m,{text1:"MY",text2:"ORDERS"})}),a.slice(1,4).map((s,l)=>{const t=s.image&&Array.isArray(s.image)?s.image[0]:null;return e.jsxs("div",{className:"py-4 border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[e.jsxs("div",{className:"flex items-start gap-6 text-sm",children:[t?e.jsx("img",{className:"w-16 sm:w-20",src:t,alt:s.name}):e.jsx("div",{className:"w-16 sm:w-20 bg-gray-200"}),e.jsxs("div",{children:[e.jsx("p",{className:"sm:text-base font-medium",children:s.name}),e.jsxs("div",{className:"flex items-center gap-3 mt-2 text-base text-gray-700",children:[e.jsxs("p",{className:"text-lg",children:[r,s.price]}),e.jsx("p",{children:"Quantity:1"}),e.jsx("p",{children:"Size:M"})]}),e.jsxs("p",{children:["Date: ",e.jsx("span",{className:"text-gray-400",children:"24,jul,2024"})]})]})]}),e.jsxs("div",{className:"md:w-1/2 flex justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("p",{className:"min-w-2 h-2 rounded-full bg-green-500"}),e.jsx("p",{className:"text-sm md:text-base",children:"Ready to ship"})]}),e.jsx("button",{className:"border px-4 py-2 text-sm font-medium rounded-sm",children:"Track Order"})]})]},l)})]})};export{n as default};

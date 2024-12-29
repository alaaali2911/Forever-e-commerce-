import{r as o,S as g,j as e,a as p}from"./index-24f_J-Oz.js";import{T as c}from"./Title-CsCXNHbM.js";const v=()=>{const[r,m]=o.useState({firstName:"",lastName:"",email:"",street:"",city:"",state:"",zipcode:"",country:"",phone:""}),[t,n]=o.useState("cash-on-delivery"),{cartItems:u,currency:d,delivery_fee:i,navigate:h}=o.useContext(g),s=a=>{const{name:l,value:f}=a.target;m({...r,[l]:f})},x=()=>u.reduce((a,l)=>a+l.price*l.quantity,0),y=()=>x()+i,j=a=>{a.preventDefault(),console.log("Order placed:",r,t),alert("Order placed successfully!")};return e.jsxs("form",{className:"flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t",onSubmit:j,children:[e.jsxs("div",{className:"flex flex-col gap-4 w-full sm:max-w-[480px]",children:[e.jsx("div",{className:"text-xl sm:text-2xl my-3",children:e.jsx(c,{text1:"DELIVERY",text2:"INFORMATION"})}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("input",{required:!0,name:"firstName",className:"border border-gray-300 rounded py-1.5 px-3.5 w-full",type:"text",placeholder:"First name",value:r.firstName,onChange:s}),e.jsx("input",{required:!0,name:"lastName",className:"border border-gray-300 rounded py-1.5 px-3.5 w-full",type:"text",placeholder:"Last name",value:r.lastName,onChange:s})]}),e.jsx("input",{required:!0,name:"email",className:"border border-gray-300 rounded py-1.5 px-3.5 w-full",type:"email",placeholder:"Email address",value:r.email,onChange:s}),e.jsx("input",{required:!0,name:"street",className:"border border-gray-300 rounded py-1.5 px-3.5 w-full",type:"text",placeholder:"Street",value:r.street,onChange:s}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("input",{required:!0,name:"city",className:"border border-gray-300 rounded py-1.5 px-3.5 w-full",type:"text",placeholder:"City",value:r.city,onChange:s}),e.jsx("input",{name:"state",className:"border border-gray-300 rounded py-1.5 px-3.5 w-full",type:"text",placeholder:"State",value:r.state,onChange:s})]}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx("input",{required:!0,name:"zipcode",className:"border border-gray-300 rounded py-1.5 px-3.5 w-full",type:"number",placeholder:"Zipcode",value:r.zipcode,onChange:s}),e.jsx("input",{required:!0,name:"country",className:"border border-gray-300 rounded py-1.5 px-3.5 w-full",type:"text",placeholder:"Country",value:r.country,onChange:s})]}),e.jsx("input",{required:!0,name:"phone",className:"border border-gray-300 rounded py-1.5 px-3.5 w-full",type:"number",placeholder:"Phone",value:r.phone,onChange:s})]}),e.jsxs("div",{className:"w-full sm:max-w-[480px]",children:[e.jsx("div",{className:"text-2xl mt-8",children:e.jsx(c,{text1:"CART",text2:"TOTALS"})}),e.jsxs("div",{className:"flex flex-col gap-2 mt-2 text-sm",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("p",{children:"Subtotal"}),e.jsxs("p",{children:[d," ",x().toFixed(2)]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("p",{children:"Shipping Fee"}),e.jsxs("p",{children:[d," ",i.toFixed(2)]})]}),e.jsx("hr",{}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx("b",{children:"Total"}),e.jsxs("b",{children:[d," ",y().toFixed(2)]})]})]}),e.jsxs("div",{className:"mt-12",children:[e.jsx(c,{text1:"PAYMENT",text2:"METHOD"}),e.jsxs("div",{className:"flex gap-3 flex-col lg:flex-row mt-4",children:[e.jsxs("div",{className:"flex items-center gap-3 border p-2 px-3 cursor-pointer",onClick:()=>n("stripe"),children:[e.jsx("p",{className:`min-w-3.5 h-3.5 border rounded-full ${t==="stripe"?"bg-green-400":""}`}),e.jsx("img",{src:p.stripe_logo,className:"h-5 mx-4",alt:"Stripe"})]}),e.jsxs("div",{className:"flex items-center gap-3 border p-2 px-3 cursor-pointer",onClick:()=>n("razorpay"),children:[e.jsx("p",{className:`min-w-3.5 h-3.5 border rounded-full ${t==="razorpay"?"bg-green-400":""}`}),e.jsx("img",{src:p.razorpay_logo,className:"h-5 mx-4",alt:"Razorpay"})]}),e.jsxs("div",{className:"flex items-center gap-3 border p-2 px-3 cursor-pointer",onClick:()=>n("cash-on-delivery"),children:[e.jsx("p",{className:`min-w-3.5 h-3.5 border rounded-full ${t==="cash-on-delivery"?"bg-green-400":""}`}),e.jsx("p",{className:"text-gray-500 text-sm font-medium mx-4",children:"CASH ON DELIVERY"})]})]})]}),e.jsx("div",{className:"w-full text-end mt-8",children:e.jsx("button",{onClick:()=>h("/orders"),type:"submit",className:"bg-black text-white px-16 py-3 text-sm",children:"PLACE ORDER"})})]})]})};export{v as default};
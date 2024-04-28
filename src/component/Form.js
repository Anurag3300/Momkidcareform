import React from "react";
import { useState } from "react";

const Form = ({ data }) => {
    // console.log(data);
    const [enquiryValue, setEnquiryValue] = useState({service:[]});
    const noSelect = "Please Select";
  
    const onClickDropdownValue =(e)=>{
        // console.log("e ",typeof e.target.value);
        if(enquiryValue===null){
          setEnquiryValue(noSelect);
        }
        else{
          const arr = data.find((item)=>item.enquiry === e.target.value);
          setEnquiryValue(arr);
        }
        
    }
    
    // console.log("enquiryValue" ,enquiryValue.service);
  return (
    <div className="w-[266.93px] h-[550px]">
      <form>
        <div className="flex flex-col mt-0">
          <label>Are you a?</label>
          <select className="border border-gray-300 rounded-md p-2  bg-[#FFEBD9]"  onChange={(e)=>onClickDropdownValue(e)} placeholder="Please Select" >
            {/* <option value="volvo">Volvo</option> */}
            {
                data.map((item)=>{
                    {/* console.log(item); */}
                    return (<option  key={item.id} value={item.enquiry}>{item.enquiry}</option>)
                })
            }
          </select>
        </div>

        <div className="flex flex-col mt-0" >
          <label>Full Name</label>
          <input className="border border-gray-300 rounded-md p-2 bg-[#FFEBD9] " type="text" placeholder="Full Name" />
        </div>

        <div className="flex flex-col mt-0">
          <label>Email</label>
          <input className="border border-gray-300 rounded-md p-2  bg-[#FFEBD9]" type="email" placeholder="Email" />
        </div>
        <div className="flex flex-col mt-0">
          <label>contact</label>
          <input  className="border border-gray-300 rounded-md p-2  bg-[#FFEBD9]" type="number" placeholder="Mobile No" />
        </div>

        <div className="flex flex-col mt-0">
          <label>What's You Concern</label>
          <select className="w-[350px] border border-gray-300 rounded-md p-2  bg-[#FFEBD9]" placeholder="Please Select">
            {
                
                 enquiryValue && enquiryValue.service.map((item,index)=>{
                    {/* console.log("an",item); */}
    
                    return (<option key={index} >{item}</option>)
                })
            
            }
          </select>
        </div>
        <div className="flex flex-col mt-0">
          <label>Message</label>
          <input
            className="w-[350px] h-[100px] border border-gray-300 rounded-md p-2  bg-[#FFEBD9]"
            type="text"
            placeholder="Brief your Consern Please"
          />
        </div>
        <div className="mt-3 mb-1">
          <button className="bg-violet-400 hover:bg-violet-500 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;

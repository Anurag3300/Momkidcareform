import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

const ContactInformation = ()=>{
    return( 
        <div className=" flex flex-col w-[266.93px] h-[500px] bg-orange-500 rounded-md">
            <div className="m-3">
                <h1 className="font-bold text-2xl">Contact Information</h1>
            </div>
            <div className="m-3">
                <p className="text-white text-sm">Fill up this form,our Team will get back you within 24 Hrs</p>
            </div>
            <div className=" flex flex-row m-3 gap-4">
                <IoCallOutline/>
                <p className="text-white">011-43060808</p>
            </div>
            <div className="  flex flex-row m-3 gap-4">
                <IoIosMail/>
                <p className="text-white text-center">info@momkidcare.com</p>
            </div>
        </div>
    );
}
export default ContactInformation;
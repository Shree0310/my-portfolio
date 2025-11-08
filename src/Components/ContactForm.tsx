"use client"
import React, { useState } from "react";
import { toast } from 'sonner';


const ContactForm = async() => {
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       console.log("handle submit clicked"); 

       const { name, email, message} = formData;
       if(!name || !email || !message){
            toast.error("Plesae fill all the fields");
            return;
       }

       //Call your api here to submit the form
       const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("API call successful");
            }, 1000)
       });

       if(response){
            toast.success("Form Submitted successfully");
       }else{
        toast.error("Something went wrong");
       }
    }

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    };

    return <div>
        <form onSubmit={handleSubmit} className="py-10 fle flex-col gap-6 max-w-lg mx-auto"> 
            <div className="flex flex-col gap-2">
                <label className="pr-4 pt-2 text-sm font-medium tracking-tight text-neutral-600">Full Name:</label>
                <input
                    id="name" 
                    type="text" 
                    placeholder="John Doe" 
                    onChange={handleChange}
                    className="border border-neutral-300 h-8 rounded-lg shadow-aceternity px-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
                <label className="pr-4 pt-2 text-sm font-medium tracking-tight text-neutral-600">Email:</label>
                <input 
                    id="Email"
                    type="text" 
                    placeholder="john.doe@gmail.com"
                    onChange={handleChange} 
                    className="border border-neutral-300 h-8 rounded-lg shadow-aceternity px-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
                <label className="pr-4 pt-2 text-sm font-medium tracking-tight text-neutral-600">Message:</label>
                <textarea 
                    id="Message"
                    rows={5}
                    name="message"
                    onChange={handleChange}
                    placeholder="Write your crazy ideas here...."
                    className="border border-neutral-300 h-64 rounded-lg shadow-aceternity px-2 pt-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
            </div>
            <button type="submit" className="rounded-md bg-primary px-4 py-2 text-white my-4 w-full">
                Send Message
            </button>

        </form>
    </div>
}
export default ContactForm;
"use client"
import React, { useState } from "react";
import { toast } from 'sonner';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();
       console.log("handle submit clicked"); 

       const { name, email, message } = formData;
       if(!name || !email || !message){
            toast.error("Please fill all the fields");
            return;
       }

       //Call your api here to submit the form
       const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("API call successful");
            }, 1000)
       });

       if(response){
            toast.success("Form Submitted successfully");
            // Reset form after successful submission
            setFormData({ name: "", email: "", message: "" });
       }else{
            toast.error("Something went wrong");
       }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    };

    return <div>
        <form onSubmit={handleSubmit} className="py-10 flex flex-col gap-6 max-w-lg mx-auto"> 
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="pr-4 pt-2 text-sm font-medium tracking-tight text-neutral-600">Full Name:</label>
                <input
                    id="name"
                    name="name"
                    type="text" 
                    value={formData.name}
                    placeholder="John Doe" 
                    onChange={handleChange}
                    className="border border-neutral-300 h-8 rounded-lg shadow-aceternity px-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
                
                <label htmlFor="email" className="pr-4 pt-2 text-sm font-medium tracking-tight text-neutral-600">Email:</label>
                <input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder="john.doe@gmail.com"
                    onChange={handleChange} 
                    className="border border-neutral-300 h-8 rounded-lg shadow-aceternity px-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
                
                <label htmlFor="message" className="pr-4 pt-2 text-sm font-medium tracking-tight text-neutral-600">Message:</label>
                <textarea 
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your crazy ideas here...."
                    className="border border-neutral-300 h-64 rounded-lg shadow-aceternity px-2 pt-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
            </div>
            <button type="submit" className="rounded-md bg-primary dark:bg-secondary dark:text-neutral-200 px-4 py-2 text-white my-4 w-full cursor-pointer">
                Send Message
            </button>
        </form>
    </div>
}
export default ContactForm;
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

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2"
                >
                    Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    placeholder="John Doe"
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
            </div>

            {/* Email Field */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2"
                >
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder="john.doe@example.com"
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
            </div>

            {/* Message Field */}
            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-2"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 font-medium rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
                Send Message
            </button>
        </form>
    )
}

export default ContactForm;

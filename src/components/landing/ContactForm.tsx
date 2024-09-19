import React, { ChangeEvent, useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import Toast from '@/components/Toast';
import { ToastProps } from '@/types/index';

const ContactForm: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showToast, setShowToast] = useState<boolean>(false);
    const [toastProps, setToastProps] = useState<ToastProps | null>(null);

    const SERVICE_ID = "";
    const TEMPLATE_ID = "";
    const PUBLIC_KEY = "";

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        if (form.current) {
            emailjs
                .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
                .then(
                    () => {
                        setIsLoading(false);
                        setToastProps({
                            title: 'Success!',
                            description: 'Your message has been sent successfully.',
                            variant: 'default'
                        });
                        setShowToast(true);
                    },
                    (error) => {
                        setIsLoading(false);
                        setToastProps({
                            title: 'Error!',
                            description: "Failed to send message. Please try again.",
                            variant: 'destructive'
                        });
                        setShowToast(true);
                        console.log(error);
                    }
                );
        }
    };

    return (
        <>
            <form ref={form} onSubmit={sendEmail} className='lg:w-1/2 flex flex-col gap-y-4'>
                <input
                    onChange={handleChange}
                    type="text"
                    className='p-4 rounded placeholder:text-[#586152] placeholder:text-[12px] sm:placeholder:text-[16px] bg-black/5 outline-primary'
                    name='name'
                    placeholder="Your Name"
                    value={formData.name}
                    required
                />
                <input
                    onChange={handleChange}
                    type="email"
                    className='p-4 rounded placeholder:text-[#586152] placeholder:text-[12px] sm:placeholder:text-[16px] bg-black/5 outline-primary'
                    name='email'
                    placeholder="Your Email"
                    value={formData.email}
                    required
                />
                <textarea
                    onChange={handleChange}
                    className='p-4 rounded placeholder:text-[#586152] placeholder:text-[12px] sm:placeholder:text-[16px] bg-black/5 outline-primary'
                    rows={8}
                    name="message"
                    placeholder="Enter Your Message"
                    value={formData.message}
                    required
                ></textarea>
                <button
                    type="submit"
                    className={`bg-black text-white py-2 w-fit px-8 rounded mx-auto mb-4 text-sm${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isLoading}
                >
                    {isLoading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
            {showToast && toastProps && <Toast {...toastProps} />}
        </>
    );
};

export default ContactForm;
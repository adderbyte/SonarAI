import React from 'react';
import { Icon } from '@iconify/react';
import ContactForm from './ContactForm';

interface ContactInfo {
    icon: string;
    title: string;
    description: string;
}


const ContactInfoItem: React.FC<ContactInfo> = ({ icon, title, description }) => {
    const isPhoneNumber = title === "Phone Number" || title === "Whatsapp";
    const phoneNumber = description.replace(/[^0-9+]/g, '');

    return (
        <section className='flex items-center gap-x-3'>
            <div className='sm:w-[46px] w-[32px] sm:min-w-[46px] sm:h-[46px] h-[32px] rounded-full border-2 border-MainColor flex items-center justify-center text-[#63725A] text-[16px] sm:text-[18px]'>
                <Icon icon={icon} />
            </div>
            <div>
                <p className='text-[#1A2902] font-[500] leading-[20px] text-[12px] sm:text-[14px]'>{title} :</p>
                {isPhoneNumber ? (
                    <a
                        href={`https://wa.me/${phoneNumber}`}
                        className='text-[#343B29] text-[12px] sm:text-[14px] max-w-[210px] leading-[21px] font-[400]'
                    >
                        {description}
                    </a>
                ) : (
                    <p className='text-[#343B29] text-[12px] sm:text-[14px] max-w-[210px] leading-[21px] font-[400]'>{description}</p>
                )}
            </div>
        </section>
    );
};

const ContactUs: React.FC = () => {
    const contactInfo: ContactInfo[] = [
        { icon: "mdi:email-open", title: "Email Address", description: "example@gmail.com" },
        { icon: "solar:phone-outline", title: "Phone Number", description: "+250 700 000 000" },
        { icon: "formkit:whatsapp", title: "Whatsapp", description: "+250 700 000 000" },
        { icon: "ion:location-sharp", title: "Location", description: "Kigali-Rwanda, Kicukiro KK 15 Road" }
    ];

    return (
        <main className='contactus-section main-padding py-12 px-6 mx-auto mt-[3rem] phone:mt-[7rem]'>
            <div className="sm:col-span-3 min_phone:col-w-full sm:w-10/12 lg:w-fullspan-2 col-span-1">
                <span className="text-3xl font-semibold">Contact Us</span>
                <p className="">
                    Get in touch with us for any inquiries or support.
                </p>
            </div>
            <section className='mt-[2rem] phone:mt-[4rem] w-full flex flex-col lg:flex-row gap-12'>
                <ContactForm />
                <section className='lg:w-1/2'>
                    <div className='flex flex-col phone:grid grid-cols-2 grid-rows-2 gap-6'>
                        {contactInfo.map((info, index) => (
                            <ContactInfoItem key={index} {...info} />
                        ))}
                    </div>
                </section>
            </section>
        </main>
    );
};

export default ContactUs;
import React from 'react';
import { Icon } from '@iconify/react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-6">
            <div className="container mx-auto text-center">
                <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
                <div className="flex justify-center gap-4 mb-4">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <Icon icon="mdi:twitter" className="text-2xl" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <Icon icon="mdi:facebook" className="text-2xl" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <Icon icon="mdi:instagram" className="text-2xl" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <Icon icon="mdi:linkedin" className="text-2xl" />
                    </a>
                </div>
                <p className="mb-4">Company address or any additional information here.</p>
                <div className="text-sm">
                    &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
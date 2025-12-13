import React from 'react';
import blackfooter from '../assets/footerblack.jpg'
import orglogo from '../assets/orglogo.jpeg'

const Footer = () => {
    return (
        <footer
            className="w-full bg-cover bg-center pt-4 md:pt-8"
            style={{ backgroundImage: `url(${blackfooter})` }}
        >
            <div className="max-w-7xl mx-auto px-2">
                <div className="flex flex-col md:flex-row md:divide-x md:divide-white/10 gap-6 md:gap-0">
                    {/* Working Hours */}
                    <div className="flex-1 mb-4 md:mb-0 text-center md:text-left">
                        <div>
                            <h6 className="text-white font-serif font-semibold italic uppercase mb-3 md:mb-5">WORKING HOURS</h6>
                            <ul>
                                <li className="text-sm text-[#a4a4a4] leading-7">Monday - Friday: 10:00 am – 09:00 pm</li>
                                <li className="text-sm text-[#a4a4a4] leading-7">Saturday: 10:00 am – 10:00 pm</li>
                                <li className="text-sm text-[#a4a4a4] leading-7">Sunday: 10:00 am – 01:00 pm</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center mb-4 md:mb-0">
                        <a href="/">
                            <img
                                src={orglogo}
                                width={120}
                                height={40}
                                alt="Footer Logo"
                                className="rounded-full"
                            />
                        </a>
                        <p className="text-white font-serif italic text-2xl mt-2">Cake Fairy1</p>
                    </div>

                    <div className="flex-1"></div>



                </div>
            </div>
            {/* Copyright Section */}
            <div className="bg-black mt-4 py-2">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between px-4 items-center">
                    <p className="text-[#888888] text-sm mb-2 md:mb-0">
                        &copy; {new Date().getFullYear()} All rights reserved
                    </p>
                    <div>
                        <ul className="flex justify-end text-[#888888] text-sm space-x-6">
                            <li>
                                <a href="#" className="hover:text-white">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">Site Map</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

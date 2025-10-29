import React from 'react';
import footer from '../assets/footer.jpg'
import blackfooter from '../assets/footerblack.jpg'
import orglogo from '../assets/orglogo.jpeg'
import instagramIcon from '../assets/instagram.png'
const Footer = () => {
    return (
        <footer
            className="w-full bg-cover bg-center pt-16"
            style={{ backgroundImage: `url(${blackfooter})` }}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:divide-x md:divide-white/10 gap-8 md:gap-0">
                    {/* Working Hours */}
                    <div className="flex-1 mb-8 md:mb-0">
                        <div>
                            <h6 className="text-white font-serif font-semibold uppercase mb-5">WORKING HOURS</h6>
                            <ul>
                                <li className="text-sm text-[#a4a4a4] leading-9">Monday - Friday: 08:00 am – 08:30 pm</li>
                                <li className="text-sm text-[#a4a4a4] leading-9">Saturday: 10:00 am – 16:30 pm</li>
                                <li className="text-sm text-[#a4a4a4] leading-9">Sunday: 10:00 am – 16:30 pm</li>
                            </ul>
                        </div>
                    </div>
                    {/* About */}
                    <div className="flex-1 flex flex-col items-center text-center mb-8 md:mb-0 md:pl-8 md:pr-8">
                        <div className="mb-8">
                            <a href="/">
                                <img
                                    src={orglogo}
                                    width={120}
                                    height={40}
                                    alt="Footer Logo"
                                    className="mx-auto mb-6 rounded-full"
                                />
                            </a>
                        </div>

                        <p className="text-sm text-[#a4a4a4] leading-6 mb-6 max-w-xs">
                            Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore dolore magna aliqua.
                        </p>

                        <div className="flex gap-2 justify-center">
                            {/* <a
                                href="#"
                                className="bg-white/10 text-white h-[45px] w-[45px] rounded-full flex items-center justify-center hover:bg-[#f08632] transition"
                            >
                                <img src="/icons/facebook.png" alt="Facebook" className="h-6 w-6" />
                            </a> */}
                            {/* <a
                                href="#"
                                className="bg-white/10 text-white h-[45px] w-[45px] rounded-full flex items-center justify-center hover:bg-[#f08632] transition"
                            >
                                <img src="/icons/twitter.png" alt="Twitter" className="h-6 w-6" />
                            </a> */}
                            <a
                                href="https://www.instagram.com/cake__fairy1?igsh=MXI2bXI4cmJ3ejd4eQ=="
                                className="bg-white/10 text-white h-[45px] w-[45px] rounded-full flex items-center justify-center hover:scale-110 transition transform"
                            >
                                <img src={instagramIcon} alt="Instagram" className="h-9 w-9" />
                            </a>
                            {/* <a
                                href="#"
                                className="bg-white/10 text-white h-[45px] w-[45px] rounded-full flex items-center justify-center hover:bg-[#f08632] transition"
                            >
                                <img src="/icons/youtube.png" alt="YouTube" className="h-6 w-6" />
                            </a> */}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="flex-1 md:pl-8">
                        <div className='font-serif'>
                            <h6 className="text-white font-semibold uppercase mb-5">Subscribe</h6>
                            <p className="text-xl text-white leading-6 mb-6">Get latest updates and offers .</p>
                            <p className="text-xl text-[#a4a4a4] leading-6 mb-6"></p>

                            {/* <form action="#" className="relative">
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="h-[50px] w-full px-6 bg-white/10 border-none text-white text-sm placeholder-white rounded"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl text-[#f08632] bg-transparent border-none"
                                >
                                    <i className="fa fa-send-o" />
                                </button>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Copyright Section */}
            <div className="bg-black mt-10 py-4">
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

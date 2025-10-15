import React from 'react'

function NavBar() {
    return (
        <header className="bg-[#f08632]">
            {/* Top Header */}
            <div className="relative bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center h-[102px] pt-[38px]">
                        {/* Left side with currency, language, sign-in */}
                        <ul className="flex space-x-7 text-sm text-gray-900 cursor-pointer">
                            <li className="relative">
                                USD <span className="inline-block transform rotate-90">&#x25BE;</span>
                                <ul className="absolute left-0 top-[44px] bg-black text-white text-xs py-1 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity">
                                    <li className="px-4 py-1 hover:bg-gray-700">EUR</li>
                                    <li className="px-4 py-1 hover:bg-gray-700">USD</li>
                                </ul>
                            </li>
                            <li className="relative">
                                ENG <span className="inline-block transform rotate-90">&#x25BE;</span>
                                <ul className="absolute left-0 top-[44px] bg-black text-white text-xs py-1 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity">
                                    <li className="px-4 py-1 hover:bg-gray-700">Spanish</li>
                                    <li className="px-4 py-1 hover:bg-gray-700">ENG</li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900">Sign in</a>
                            </li>
                        </ul>

                        {/* Logo - centered absolutely */}
                        <div className="absolute left-1/2 top-[25px] -translate-x-1/2">
                            <a href="./index.html" className="inline-block">
                                <img src="img/logo.png" alt="Logo" />
                            </a>
                        </div>

                        {/* Right side icons */}
                        <div className="flex items-center space-x-6">
                            <div className="flex space-x-8">
                                <a href="#" className="relative inline-block">
                                    <img src="img/icon/search.png" alt="Search" />
                                </a>
                                <a href="#" className="relative inline-block">
                                    <img src="img/icon/heart.png" alt="Favorites" />
                                </a>
                            </div>
                            <div className="relative inline-block">
                                <a href="#" className="relative inline-block mr-1">
                                    <img src="img/icon/cart.png" alt="Cart" />
                                    <span className="absolute top-1 left-2 text-sm font-semibold text-gray-900">0</span>
                                </a>
                                <div className="inline-block text-gray-500 font-semibold text-sm relative top-1">
                                    Cart: <span className="text-gray-900">$0.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <div className="container mx-auto px-4">
                <nav className="text-center">
                    <ul className="inline-flex space-x-0 -mr-[5px]">
                        <li className="relative">
                            <a href="./index.html" className="block px-9 py-5 text-white text-lg font-semibold bg-black">Home</a>
                        </li>
                        <li className="relative">
                            <a href="./about.html" className="block px-9 py-5 text-white text-lg font-semibold hover:bg-black">About</a>
                        </li>
                        <li className="relative">
                            <a href="./shop.html" className="block px-9 py-5 text-white text-lg font-semibold hover:bg-black">Shop</a>
                        </li>
                        <li className="relative group">
                            <a href="#" className="block px-9 py-5 text-white text-lg font-semibold hover:bg-black">Pages</a>
                            <ul className="absolute left-0 top-[82px] w-[150px] bg-black text-left py-1 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity z-10">
                                <li><a href="./shop-details.html" className="block px-5 py-1 text-sm text-white capitalize hover:bg-gray-700">Shop Details</a></li>
                                <li><a href="./shoping-cart.html" className="block px-5 py-1 text-sm text-white capitalize hover:bg-gray-700">Shoping Cart</a></li>
                                <li><a href="./checkout.html" className="block px-5 py-1 text-sm text-white capitalize hover:bg-gray-700">Check Out</a></li>
                                <li><a href="./wisslist.html" className="block px-5 py-1 text-sm text-white capitalize hover:bg-gray-700">Wisslist</a></li>
                                <li><a href="./Class.html" className="block px-5 py-1 text-sm text-white capitalize hover:bg-gray-700">Class</a></li>
                                <li><a href="./blog-details.html" className="block px-5 py-1 text-sm text-white capitalize hover:bg-gray-700">Blog Details</a></li>
                            </ul>
                        </li>
                        <li className="relative">
                            <a href="./blog.html" className="block px-9 py-5 text-white text-lg font-semibold hover:bg-black">Blog</a>
                        </li>
                        <li className="relative">
                            <a href="./contact.html" className="block px-9 py-5 text-white text-lg font-semibold hover:bg-black">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile menu icon - not visible by default */}
            <div className="hidden">
                <button className="text-2xl"><i className="fa fa-bars"></i></button>
            </div>
        </header>

    );
}


export default NavBar;
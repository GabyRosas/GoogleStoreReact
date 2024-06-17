import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../customHooks/useCart";
import CartItemCount from '../cart/CartItemCount/CartItemCount'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const {cart} = useCart();

    return (
        <nav className="bg-white p-4 shadow-md">
            <div className="container mx-auto flex items-center justify-between">

                <div className="flex items-center">
                    <img src="/images/google-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
                </div>


                <div className="flex flex-grow justify-start">
                    <ul className="space-x-6 hidden md:flex">
                        <li>
                            <a href="#Phones" className=" hover:text-gray-500">Phones</a>
                        </li>
                        <li>
                            <Link to={'/'} className="hover:text-gray-500">Earbuds</Link>
                        </li>
                        <li>
                            <Link to={'/fitbit'} className="hover:text-gray-500">Watches</Link>
                        </li>
                        <li>
                            <a href="#Smart Home" className="hover:text-gray-500">Smart Home</a>
                        </li>
                        <li>
                            <a href="#Accessories" className="hover:text-gray-500">Accessories</a>
                        </li>
                        <li>
                            <a href="#Subscriptions" className="hover:text-gray-500">Subscriptions</a>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center space-x-4">
                    <a href="#search">
                        <img src="/images/icons/Search.svg" alt="Search" className="h-6 w-6 hover:opacity-75 cursor-pointer" />
                    </a>
                    <a href="#help">
                        <img src="/images/icons/Help.svg" alt="Help" className="h-6 w-6 hover:opacity-75 cursor-pointer" />
                    </a>
                    <Link to="cart" className="relative">
                        <img src="/images/icons/Cart.svg" alt="Cart" className="h-6 w-6 hover:opacity-75 cursor-pointer relative" />
                        {cart.length > 0 && <CartItemCount className=" text-white absolute top-[-8px] right-[-8px] bg-[color:var(--col-primary)]  px-[5px] rounded-[50%]"/>}
                    </Link>
                    <a href="#user">
                        <img src="/images/icons/Avatar.svg" alt="User" className="h-6 w-6 hover:opacity-75 cursor-pointer" />
                    </a>
                    {/* Div para el botón del menú hamburguesa, visible solo en pantallas pequeñas */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="hover:text-gray-500 focus:outline-none focus:text-gray-500"
                        >

                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú desplegable para pantallas pequeñas, visible solo cuando isOpen es verdadero */}
            <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col space-y-4 mt-4">
                    <li>
                        <a href="#Phones" className="hover:text-gray-500">Phones</a>
                    </li>
                    <li>
                        <Link to={'/'} className="hover:text-gray-500">Earbuds</Link>
                    </li>
                    <li>
                        <Link to={'/fitbit'} className="hover:text-gray-500">Watches</Link>
                    </li>
                    <li>
                        <a href="#Smart Home" className="hover:text-gray-500">Smart Home</a>
                    </li>
                    <li>
                        <a href="#Accessories" className="hover:text-gray-500">Accessories</a>
                    </li>
                    <li>
                        <a href="#Subscriptions" className="hover:text-gray-500">Subscriptions</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;




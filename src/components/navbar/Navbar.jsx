function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/images/google-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        </div>

        {/* Enlaces */}
        <div className="flex space-x-6">
          <a href="#Phones" className="text-white hover:text-gray-400">Phones</a>
          <a href="#Earbuds" className="text-white hover:text-gray-400">Earbuds</a>
          <a href="#Watches" className="text-white hover:text-gray-400">Watches</a>
          <a href="#Smart Home" className="text-white hover:text-gray-400">Smart Home</a>
          <a href="#Accessories" className="text-white hover:text-gray-400">Accessories</a>
          <a href="#Subscriptions" className="text-white hover:text-gray-400">Subscriptions</a>
        </div>

        {/* Iconos */}
        <div className="flex space-x-4">
          <a href="#search">
            <img src="/images/icons/Search.svg" alt="Search" className="h-6 w-6 hover:opacity-75 cursor-pointer" />
          </a>
          <a href="#help">
            <img src="/images/icons/Help.svg" alt="Help" className="h-6 w-6 hover:opacity-75 cursor-pointer" />
          </a>
          <a href="#cart">
            <img src="/images/icons/Cart.svg" alt="Cart" className="h-6 w-6 hover:opacity-75 cursor-pointer" />
          </a>
          <a href="#user">
            <img src="/images/icons/Avatar.svg" alt="User" className="h-6 w-6 hover:opacity-75 cursor-pointer" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

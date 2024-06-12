function Navbar() {
    return (
      <nav className="bg-white p-4 shadow-md"> 
        <div className="container mx-auto flex items-center justify-between">
         
          <div className="flex items-center">
            <img src="/images/google-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          </div>
  
          
          <div className="flex flex-grow justify-start">
          <ul className="flex space-x-6">
            <li>
            <a href="#Phones" className="text-gray-700 hover:text-gray-500">Phones</a>
            </li>
            <li>
            <a href="#Earbuds" className="text-gray-700 hover:text-gray-500">Earbuds</a>
            </li>
            <li>
            <a href="#Watches" className="text-gray-700 hover:text-gray-500">Watches</a>
            </li>
            <li>
            <a href="#Smart Home" className="text-gray-700 hover:text-gray-500">Smart Home</a>
            </li>
            <li>
            <a href="#Accessories" className="text-gray-700 hover:text-gray-500">Accessories</a>
            </li>
            <li>
            <a href="#Subscriptions" className="text-gray-700 hover:text-gray-500">Subscriptions</a>
            </li>
          </ul>
        </div>
  
      
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
  
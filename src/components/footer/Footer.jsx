function Footer() {
  return (
    <footer className="bg-gray-100 py-4 px-6 md:px-12 lg:px-24 xl:px-40 w-full mt-10 fixed bottom-0">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        {/* Redes Sociales */}
        <ul className="flex items-center gap-4 mb-4 md:mb-0">
          <li><a href="https://twitter.com/madebygoogle" target="_blank" rel="noopener noreferrer"><img src="/images/icons/SM-x.svg" alt="Twitter"/></a></li>
          <li><a href="https://www.instagram.com/madebygoogle/" target="_blank" rel="noopener noreferrer"><img src="/images/icons/SM-instagram.svg" alt="Instagram"/></a></li>
          <li><a href="https://facebook.com/madebygoogle" target="_blank" rel="noopener noreferrer"><img src="/images/icons/SM-facebook.svg" alt="Facebook"/></a></li>
          <li><a href="https://youtube.com/madebygoogle" target="_blank" rel="noopener noreferrer"><img src="/images/icons/SM-youtube.svg" alt="Youtube"/></a></li>
          <li><a href="https://www.tiktok.com/@googlepixel" target="_blank" rel="noopener noreferrer"><img src="/images/icons/SM-tiktok.svg" alt="Tiktok"/></a></li>
        </ul>
        
        {/* Enlaces de texto */}
        <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-6 mb-4 md:mb-0">
          
          <li><a href="#" className="text-sm">Privacy</a></li>
          <li><a href="#" className="text-sm">Google Nest Commitment to Privacy</a></li>
          <li><a href="#" className="text-sm">Sales Terms</a></li>
          <li><a href="#" className="text-sm">Terms of Service</a></li>
          <li className="md:-order-1">
          <a href="#" className= "flex justify-center gap-[5px] text-sm">Spain<img src="/images/icons/Spain.svg" alt="flag" className ="md:-order-1" /></a></li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;

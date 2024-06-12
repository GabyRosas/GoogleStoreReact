
function Footer() {
    return (
  <footer className="container mx-auto flex items-center place-content-between">
  <ul className="container mx-auto flex items-center space-between gap-4">
            <li><a href="#"><img src="/images/icons/SM-x.svg" alt="Twitter"/></a></li>
            <li><a href="#"><img src="/images/icons/SM-instagram.svg" alt="Instagram"/></a></li>
            <li><a href="#"><img src="/images/icons/SM-facebook.svg" alt="Facebook"/></a></li>
            <li><a href="#"><img src="/images/icons/SM-youtube.svg" alt="Youtube"/></a></li>
            <li><a href="#"><img src="/images/icons/SM-tiktok.svg" alt="Tiktok"/></a></li>
        </ul>
        <ul className="container mx-auto flex items-center gap-10">
            <li className="p-5 flex gap-2"><img src="/images/icons/Spain.svg" alt="bandera"/><a href="#">Spain</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Google Nest Commitment to Privacy</a></li>
            <li><a href="#">Sales Terms</a></li>
            <li><a href="#">Terms of Service</a></li>            
        </ul>
  </footer>
);
}
export default Footer;
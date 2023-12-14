import logo from '../../assets/logo.jpg'
import { FaSquareFacebook, FaWhatsapp } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <aside>
                <img className='w-24 h-24 object-cover rounded-lg' src={logo} alt="" />
                <p>The Artistic Engineering Ltd.<br />Providing reliable tech since 2023</p>
            </aside>
            <nav>
                <header className="footer-title">Social</header>
                <div className="flex justify-center gap-4 items-center">
                    <a className='text-2xl' target='_blank' href='https://www.facebook.com/the.artistic.engineering.ltd'><FaSquareFacebook />
                    </a>
                    <a className='text-2xl' href=""><FaWhatsapp></FaWhatsapp></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
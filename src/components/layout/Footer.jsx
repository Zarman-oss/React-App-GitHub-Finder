import { FaInstagram,  } from 'react-icons/fa';

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-9 bg-neutral text-neutral-content footer-center">
      <div>
        <p>
          <FaInstagram className="inline pr-2 text-4xl" />
           
          {footerYear} 
        </p>
      </div>
    </footer>
  );
}

export default Footer;

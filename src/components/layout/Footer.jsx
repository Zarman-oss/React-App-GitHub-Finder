import { FaGithub } from 'react-icons/fa';

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-9 bg-neutral text-neutral-content footer-center">
      <div>
        <p>
          <FaGithub className="inline pr-2 text-5xl" />
          <p> Copyright &copy; {footerYear}  </p>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

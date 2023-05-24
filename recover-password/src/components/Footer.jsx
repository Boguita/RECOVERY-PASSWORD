
import Logo from "../assets/logo-header.png";

const Footer = () => {
  return (
    <footer className="footer">      
     <img className="logo-footer" src={Logo} alt="" />
     <div className="links-footer">
      <ul>
        <li>
          <a href="https://www.osprera.org.ar/">OSPRERA</a>
        </li>
        <li>
          <a href="https://www.renatre.org.ar/">RENATRE</a>
        </li>
         <li>
          <a href="https://www.uatre.org.ar/empleadores/art">ART Rural</a>
        </li>
         <li>
          <a href="https://www.uatre.org.ar/legales">LEGALES</a>
        </li>
      </ul>
     </div>
    </footer>
  );
};

export default Footer;

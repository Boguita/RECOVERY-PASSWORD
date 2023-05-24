
// import { Link } from "react-router-dom";

import Logo from "../assets/logo-header.png";

const Navbar = () => {


  return (
    <div className="navbar">
      <div className="container">
        <div className="logo-header">
          {/* <Link to="/"> */}
          <img src={Logo} alt="" />
          {/* </Link> */}
        </div>
     
        
       
        </div>
      </div>
  
  );
};

export default Navbar;

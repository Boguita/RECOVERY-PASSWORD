import { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../assets/logo.png";
import '../css/auth.css';

const Login = () => {
  const [inputs, setInputs] = useState({
    password: "",
    repeatpassword: "",
  });
  const [err, setError] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const url = window.location.href;

    // Extrae el valor del parámetro 'token' de la URL
    const params = new URLSearchParams(new URL(url).search);
    const token = params.get('token');

    setToken(token);
  }, []);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputs.password === inputs.repeatpassword) {
      try {
        setIsLoading(true);

        await axios.post("https://uatre.net/auth/password/reset", {
          token: token,
          password: inputs.password
        });

        setIsLoading(false);
        setIsSuccess(true);
      } catch (err) {
        console.log(err);
        setError("Lo sentimos, intentalo más tarde");
        setIsLoading(false);
        setIsSuccess(false);
      }
    } else {
      setError("*Las contraseñas deben coincidir");
    }
  };

  return (
    <div className="form-bg">
      <div className="container-login">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="form-container">
              <div className="logo-login">
                <img src={Logo} alt="LOGO UATRE"></img>
              </div>
              <h3 className="title">¡Bienvenido!</h3>
              <form className="form-horizontal">
                <div className="form-group">
                  <input 
                    required
                    type="password"
                    placeholder="NUEVA CONTRASEÑA"
                    name="password"
                    onChange={handleChange}        
                    className="form-control"
                  />
                </div>
                <div className="form-group">                           
                  <input 
                    className="form-control" 
                    required
                    type="password"
                    placeholder="REPETIR CONTRASEÑA"
                    name="repeatpassword"
                    onChange={handleChange}
                  />
                </div>
                <button className="btn" onClick={handleSubmit}>
                  {  isLoading ? (
                    <div className="btn-loading" role="status" aria-hidden="true"></div>
                  ) : isSuccess ? (
                    <span>Contraseña restablecida</span>
                  ) : (
                    <span>Restablecer</span>
                  )}
                </button>
              
                {err && <p className="form-error">{err}</p>}
                <span className="forgot-password">
                  <a className="hi" href="https://www.uatre.org.ar/contacto-y-delegaciones">
                    Necesitas ayuda?
                  </a>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Login;

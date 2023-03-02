import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
// import { AuthContext } from "../../context/AuthContext";
import "./login.scss";
import logo from "../../pages/login/logo.png";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });

        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
<div className="login">
      <div className="lgContainer">
      <div><img className="logo" src={logo} alt="logo" /></div>
      <div class="brand-title">TeamTravel</div>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lgInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lgInput"
        />
        <button disabled={loading} onClick={handleClick} className="lgButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
        <div>
        </div>
      </div>
    </div>


    // <div className="login">
    //   <div className="lContainer">
    //     <input
    //       type="text"
    //       placeholder="username"
    //       id="username"
    //       onChange={handleChange}
    //       className="lInput"
    //     />
    //     <input
    //       type="password"
    //       placeholder="password"
    //       id="password"
    //       onChange={handleChange}
    //       className="lInput"
    //     />
    //     <button disabled={loading} onClick={handleClick} className="lButton">
    //       Login
    //     </button>
    //     {error && <span>{error.message}</span>}
    //   </div>
    // </div>
  );
};

export default Login;

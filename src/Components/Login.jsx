import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Home/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://192.168.1.3:8080/user/login", {
        email,
        password,
      });

      console.log(response);

      if (response.data) {
        localStorage.setItem("token", response.data);
        // alert("Login successful!");
        navigate("/");
      } else {
        alert("Login failed: No token received.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Please check your email and password.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-screen bg-[seagreen] flex">
        <div className="w-[38%] h-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://i.pinimg.com/564x/e1/04/b7/e104b7ba5937fa428b036581bc3876dc.jpg"
            alt="Background"
          />
        </div>
        <div className="w-[62%] h-full flex items-center justify-center">
          <div className="w-fit h-fit mb-24 mr-[60px]">
            <h1 className="text-[50px] font-bold mb-6 text-white">
              <span className="text-[#FEE3AE]">Welcome</span> to Riyawan Silver
            </h1>
            <div className="w-fit h-fit px-4 py-2 bg-[#FEE3AE] rounded-md mb-4 flex items-center gap-2">
              <i className="ri-google-fill"></i>
              <h1>Continue with Google</h1>
            </div>
            <h1 className="mb-4 text-white">or use your email account</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email"
                className="px-2 py-3 w-[400px] placeholder:text-black outline-none rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="px-2 py-3 w-[400px] placeholder:text-black outline-none rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex w-[400px] items-center mt-4 justify-between">
                <button
                  type="submit"
                  className="flex items-center justify-between px-2 py-1 bg-[#FEE3AE] rounded-md w-[100px]"
                >
                  <h1>Go</h1>
                  <h1>
                    <i className="ri-logout-circle-r-line"></i>
                  </h1>
                </button>
                <h1 className="text-white px-2 py-2 rounded-md">
                  Forgot your password?
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

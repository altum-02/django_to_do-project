import { useState } from "react";

import { loginUser }
from "../services/authService";

import { useNavigate }
from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      const data =
        await loginUser({
          username,
          password,
        });

      localStorage.setItem(
        "access",
        data.access
      );

      localStorage.setItem(
        "refresh",
        data.refresh
      );

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert("Login failed");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >

        <h1 className="text-3xl font-bold text-center">

          Login

        </h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border p-3 rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >

          Login

        </button>

      </form>

    </div>
  );
};

export default Login;
import { useState } from "react";

import {
  registerUser,
} from "../services/authService";


const Register = () => {

  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");


  const handleRegister = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    setLoading(true);

    setError("");

    setSuccess("");

    try {

      await registerUser({
        username,
        email,
        password,
      });

      setSuccess(
        "Registration successful"
      );

      setUsername("");
      setEmail("");
      setPassword("");

    } catch (err) {

      console.log(err);

      setError(
        "Registration failed"
      );

    } finally {

      setLoading(false);
    }
  };


  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-center mb-6">

          Register

        </h1>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 text-sm font-medium">

              Username

            </label>

            <input
              type="text"
              value={username}
              onChange={(e) =>
                setUsername(
                  e.target.value
                )
              }
              placeholder="Enter username"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>


          <div>

            <label className="block mb-2 text-sm font-medium">

              Email

            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              placeholder="Enter email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>


          <div>

            <label className="block mb-2 text-sm font-medium">

              Password

            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>


          {error && (

            <p className="text-red-500 text-sm">

              {error}

            </p>

          )}


          {success && (

            <p className="text-green-600 text-sm">

              {success}

            </p>

          )}


          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white py-3 rounded-lg font-semibold"
          >

            {loading
              ? "Registering..."
              : "Register"}

          </button>

        </form>

      </div>

    </div>
  );
};

export default Register;
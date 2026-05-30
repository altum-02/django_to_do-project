import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const token =
    localStorage.getItem("access");

  const logout = () => {

    localStorage.removeItem("access");

    localStorage.removeItem("refresh");

    navigate("/login");
  };

  return (

    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">
        Django Todo
      </h1>

      <div className="flex gap-6 items-center">

        <Link to="/">
          Home
        </Link>

        {!token ? (
          <>

            <Link to="/login">
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-600 px-4 py-2 rounded-lg"
            >
              Register
            </Link>

          </>
        ) : (
          <>

            <Link to="/dashboard">
              Dashboard
            </Link>

            <button
              onClick={logout}
              className="bg-red-500 px-4 py-2 rounded-lg"
            >
              Logout
            </button>

          </>
        )}

      </div>

    </nav>

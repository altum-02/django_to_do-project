import { Link } from "react-router-dom";

const Navbar = () => {

  const token =
    localStorage.getItem("access");

  const logout = () => {

    localStorage.removeItem("access");

    localStorage.removeItem("refresh");

    window.location.href = "/login";
  };

  return (

    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold">

        Django Todo

      </h1>

      <div className="space-x-4">

        <Link to="/">
          Home
        </Link>

        {!token ? (
          <>

            <Link to="/login">
              Login
            </Link>

            <Link to="/register">
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
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>

          </>
        )}

      </div>

    </nav>
  );
};

export default Navbar;
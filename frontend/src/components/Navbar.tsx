import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 shadow-lg">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center h-20">

          <h1 className="text-3xl font-bold text-blue-500">
            TaskFlow
          </h1>

          <div className="flex gap-8 text-white">

            <Link
              to="/"
              className="hover:text-blue-400 transition"
            >
              Home
            </Link>

            <Link
              to="/login"
              className="hover:text-blue-400 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </Link>

          </div>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
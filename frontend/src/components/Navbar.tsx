import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4">

      <div className="max-w-7xl mx-auto flex justify-between">

        <h1 className="text-2xl font-bold">
          Django Todo
        </h1>

        <div className="space-x-5">

          <Link to="/">Home</Link>

          <Link to="/login">Login</Link>

          <Link to="/register">Register</Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;
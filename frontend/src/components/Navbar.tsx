import { Link } from "react-router-dom";

const Home = () => {
  return (

    <div className="min-h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900">

      <section className="max-w-7xl mx-auto px-8 py-24 text-center">

        <h1 className="text-7xl font-bold text-white mb-8">
          Manage Your Tasks
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto">

          Stay productive, organize your work,
          and achieve your goals with our modern
          task management platform.

        </p>

        <div className="mt-10 flex justify-center gap-6">

          <Link
            to="/register"
            className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg hover:bg-blue-700 transition"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="border border-white text-white px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-black transition"
          >
            Login
          </Link>

        </div>

      </section>

      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-8">

        <div className="bg-white p-8 rounded-2xl shadow-xl">

          <h2 className="text-2xl font-bold mb-4">
            Create Tasks
          </h2>

          <p>
            Create and manage your daily tasks.
          </p>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">

          <h2 className="text-2xl font-bold mb-4">
            Organize Projects
          </h2>

          <p>
            Group tasks into organized projects.
          </p>

        </div>

        <div className="bg-white p-8 rounded-2xl shadow-xl">

          <h2 className="text-2xl font-bold mb-4">
            Track Progress
          </h2>

          <p>
            Monitor completed and pending work.
          </p>

        </div>

      </section>

    </div>
  );
};

export default Home;
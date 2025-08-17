import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <nav className="flex justify-between p-4 shadow bg-gray-100 dark:bg-gray-800">
      <div className="flex gap-4">
        <Link to="/" className="text-blue-600 dark:text-blue-300">
          Home
        </Link>
        <Link to="/register" className="text-blue-600 dark:text-blue-300">
          Register
        </Link>
      </div>
      <button
        onClick={() => setDark(!dark)}
        className="px-3 py-1 rounded bg-gray-300 dark:bg-gray-700"
      >
        {dark ? "Light" : "Dark"}
      </button>
    </nav>
  );
}

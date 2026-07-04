import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useAuth } from "../context/AuthContext";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/profile", label: "Profile" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? "text-primary-600"
        : "text-gray-600 hover:text-primary-600"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <nav className="section-container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-600 text-white font-bold">
            S
          </div>

          <span className="text-lg font-bold">SkillSync</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <span className="text-sm font-medium text-gray-700">
                Hi, {user?.name}
              </span>

              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>

              <Link to="/register">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          ☰
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t p-4 flex flex-col gap-3">

          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          {isAuthenticated ? (
            <>
              <p className="font-semibold">
                {user?.name}
              </p>

              <Button
                variant="outline"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button fullWidth>Login</Button>
              </Link>

              <Link to="/register">
                <Button fullWidth>Sign Up</Button>
              </Link>
            </>
          )}

        </div>
      )}
    </header>
  );
};

export default Navbar;
import { useState } from "react";
import {
  FiLogOut,
  FiMenu,
  FiShoppingCart,
  FiUser,
  FiX,
} from "react-icons/fi";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
];

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Logged out");
        setOpen(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header className="shadow bg-base-100">
      <nav className="container mx-auto h-16 flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          Urban Meth
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary font-semibold"
                    : "hover:text-primary transition"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-5">
          <Link to="/cart">
            <FiShoppingCart size={22} />
          </Link>
          
          {user ? (
            <Link to="/profile" className="flex gap-x-4">

              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "Profile"}
                  title={user.displayName || "User"}
                  className="w-10 h-10 rounded-full object-cover border"
                />
              ) : (
                <FiUser size={24} />
              )}

              <button
                onClick={handleLogout}
                className="hover:text-red-500 transition"
                title="Logout"
              >
                <FiLogOut size={22} />
              </button>
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-sm"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-base-100">
          <ul className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <li>
              <Link
                to="/cart"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2"
              >
                <FiShoppingCart size={20} />
                Cart
              </Link>
            </li>

            {user ? (
              <>
                <li className="flex items-center gap-3">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || "Profile"}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                  ) : (
                    <FiUser size={24} />
                  )}

                  <span>{user.displayName || "User"}</span>
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-red-500"
                  >
                    <FiLogOut size={20} />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
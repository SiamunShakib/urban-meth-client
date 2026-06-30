import { useState } from "react";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router";
// import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow bg">
      <nav className="container h-16 flex items-center justify-between">
        <div>
          <Link to="/" className="text-2xl font-bold text-primary">
            Urban Meth
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "text-primary font-semibold" : ""
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
            <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
          <div className="hidden md:flex items-center gap-5">
            <Link to="/cart">
              <FiShoppingCart size={22} />
            </Link>

            <Link to="/login">Login</Link>
          </div>
        </div>
      </nav>
      {open && (
        <ul className="md:hidden container py-4 space-y-3">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} onClick={() => setOpen(false)}>
                {link.name}
              </NavLink>
            </li>
          ))}

          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;

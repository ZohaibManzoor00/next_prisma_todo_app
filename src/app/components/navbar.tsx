import NavLink from "./nav-link";

export default function Navbar() {
  const navLinks = [
    { to: "/", name: "Home" },
    { to: "/todo", name: "Todo" },
    { to: "/new", name: "New" },
  ];

  return (
    <>
      <nav>
        <div className="flex justify-center text-xl pb-14">
          <ul className="flex w-full justify-evenly">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink {...link} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

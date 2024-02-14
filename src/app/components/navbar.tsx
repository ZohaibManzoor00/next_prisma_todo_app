import NavLink from "./nav-link";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className="flex justify-center text-xl pb-14">
          <ul className="flex w-full justify-evenly">
            <li>
              <NavLink to={"/"} name={"Home"} />
            </li>
            <li>
              <NavLink to={"/todo"} name={"Todo"} />
            </li>
            <li>
              <NavLink to={"/new"} name={"New"} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

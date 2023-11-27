import { navlinks } from "../utils/constant";
import img from "../assets/icons/mustache logo.svg";

const Navbar = () => {
  return (
    <header className="fixed h-[78px] py-8 w-full bg-[#3B3E33]/50">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img src="" alt="logo" />
        </a>
        <div className="grid-cols-4 px-10 space-x-11">
          {navlinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-bangers text-2xl text-white hover:text-[#D9C8A2]"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

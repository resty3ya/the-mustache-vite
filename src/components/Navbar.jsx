import { navlinks } from "../utils/constant";
import img from "../assets/icons/the-mustache-logo-white.svg";

const Navbar = () => {
  return (
    <header className="fixed h-[78px] w-full bg-[#3B3E33]/50">
      <nav className="flex justify-between">
        <a href="/">
          <img src={img} alt="logo" width={70} height={25} />
        </a>
        <div className="grid-cols-4 px-10 space-x-11 pt-10">
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

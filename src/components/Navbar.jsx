const Navbar = () => {
  return (
    <header className="fixed h-[78px] py-8 w-full bg-[#3B3E33]/50">
      <nav className="flex justify-between items-center">
        <a href="/">
          <img src="" alt="" />
          Logo
        </a>
        <div className="grid-cols-4 px-10 space-x-11">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Gallery</a>
          <a href="">Contact</a>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

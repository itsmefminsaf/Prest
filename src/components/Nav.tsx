import logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <nav className="fixed left-[5%] top-3 z-50 flex w-[90%] justify-between rounded-full border-8 border-black bg-aliceblue p-2">
      <div className="relative h-14 w-36">
        <img src={logo} alt="logo" className="absolute h-full w-full" />
      </div>
      <ul className="m-2 flex flex-col justify-around gap-2 md:flex-row">
        <li className="li-item">
          <a href="#home">Home</a>
        </li>
        <li className="li-item">
          <a href="#about">About</a>
        </li>
        <li className="li-item">
          <a href="#reviews">Reviews</a>
        </li>
        <li className="li-item">
          <a href="#pricing">Pricing</a>
        </li>
        <li className="li-item">
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <button className="rounded-full border-cyan-500 bg-black px-5 py-1 text-xl font-extrabold text-white hover:rounded-l-none hover:border-l-4 hover:pr-8">
        Book now!
      </button>
    </nav>
  );
};

export default Nav;

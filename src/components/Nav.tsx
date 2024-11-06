const Nav = () => {
  return (
    <nav className="fixed left-[5%] top-3 z-50 flex w-[90%] justify-between rounded-full border-8 border-black bg-aliceblue p-4">
      <div className="">Prest</div>
      <ul className="flex flex-col justify-around gap-2 md:flex-row">
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
    </nav>
  );
};

export default Nav;

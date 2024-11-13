import logo from "../assets/logo.svg";

import {
  motion,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";

const Nav = () => {
  const navAnimateCtrl = useAnimationControls();
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (pos) => {
    navAnimateCtrl.start("animate");
    if (pos == 0) {
      navAnimateCtrl.start("initial");
    }
  });
  return (
    <motion.nav
      className="fixed left-[5%] top-3 z-50 flex w-[90%] justify-between rounded-full border-8 border-black bg-aliceblue p-2"
      variants={{
        animate: {
          width: "100%",
          top: 0,
          left: "0%",
          borderRadius: 0,
          border: 0,
        },
        initial: {
          width: "90%",
          top: "0.75rem",
          left: "5%",
          borderRadius: "9999px",
          borderWidth: "8px",
        },
      }}
      animate={navAnimateCtrl}
      transition={{ duration: 0.1 }}
    >
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
    </motion.nav>
  );
};

export default Nav;

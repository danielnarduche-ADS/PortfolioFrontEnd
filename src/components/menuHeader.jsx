import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { motion, useMotionValueEvent, useScroll } from "motion/react";


const MenuHeaderPageAuth = ({ authState }) => {
  const { pathname } = useLocation();

  if (authState === "default" && "/authorization" !== pathname) {
    return (
      <>
        <li><Link to="/authorization/login" state={{ authState: "logIn" }} className="bg-blue-600 text-white p-2 md:p-4">Login</Link></li>
        <li><Link to="/authorization/sign-up" state={{ authState: "signUp" }} className="font-semibold hover:text-blue-600">SignUp</Link></li>
      </>
    )
  } else if (authState === "logIn") {
    return (
      <>
        <li><Link to="/authorization/sign-up" state={{ authState: "signUp" }} className="bg-blue-600 text-white p-2 md:p-4">SignUp</Link></li>
      </>
    )
  }

  return (
    <>
      <li><Link to="/authorization/login" state={{ authState: "logIn" }} className="bg-blue-600 text-white p-2 md:p-4">Login</Link></li>
    </>
  )
}

const MenuHeader = () => {
  const { state } = useLocation();
  const authState = state?.authState ?? "default";
  const [isVisible, setIsVisible] = useState(true);
  const { scrollY } = useScroll();
  const previousScrollY = useRef(0);
  const hideTimeout = useRef(null);

  useMotionValueEvent(scrollY, "change", (currentScrollY) => {
    const previous = previousScrollY.current;

    if (currentScrollY <= 0) {
      setIsVisible(true);
    } else if (currentScrollY > previous) {
      setIsVisible(false);
    } else if (currentScrollY < previous) {
      setIsVisible(true);
    }

    previousScrollY.current = currentScrollY;
    clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      if (scrollY.get() > 0) {
        setIsVisible(false);
      }
    }, 2000);
  });

  useEffect(() => () => clearTimeout(hideTimeout.current), []);

  return (
    <motion.header
      className="sticky top-0 z-50 flex flex-col gap-4 items-center bg-sky-100 p-3 md:flex-row"
      initial={false}
      animate={{ y: isVisible ? 0 : "-100%" }}
      transition={{ duration: 0.25 }}
      aria-hidden={!isVisible}
      inert={!isVisible}
    >
        <h1 className="font-sans font-bold text-3xl md:text-4xl"><span className="text-blue-600"><Link to="/">Dans</Link></span>Velopment</h1>

        <nav className="md:ml-auto">
            <ul className="flex flex-row-reverse gap-3 md:gap-8">
                <MenuHeaderPageAuth authState={authState} />
                <li><Link to="/features" className="hover:text-blue-600">Features</Link></li>
                <li><a href="https://github.com/danielnarduche-ADS" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">GitHub</a></li>
            </ul>
        </nav>
    </motion.header>
  )
}

export default MenuHeader
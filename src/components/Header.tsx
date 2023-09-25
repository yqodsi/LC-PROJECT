// import { useState } from "react";
import "../assets/header.css"; // Create a CSS file for your header styles
import { Link } from "react-router-dom";

function Header() {
  // const [isHeaderVisible, setHeaderVisible] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50 && isHeaderVisible) {
  //       setHeaderVisible(false);
  //     } else if (window.scrollY <= 50 && !isHeaderVisible) {
  //       setHeaderVisible(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [isHeaderVisible]);

  return (
    <header
      className={`fixed top-0 w-full  shadow-lg transition-transform duration-300 z-10 h-20  bg-[#011eb3]`}
    >
      <nav className="flex justify-between items-center p-4">
        <div>
          <img width={35} src="/logos/nero.png" alt="" className="mr-10" />
        </div>
        <ul className="flex items-center">
          <li className="mx-4">
            {/* <a href="#home">HOME</a> */}
            <Link to="/DDD">HOME</Link>
          </li>
          <li className="mx-4">
            <a href="#about">CHI SIAMO</a>
          </li>
          <li className="mx-4">
            <a href="#services">PROGETTI</a>
          </li>
          <li className="mx-4">
            <a href="#contact">CONTATTI</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

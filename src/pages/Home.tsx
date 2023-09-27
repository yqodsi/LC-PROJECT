import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import Hero from "../components/Hero";
// import Loader from "../components/Loader";
import { useRef } from "react";
import Projects from "../components/Projects";

function Home() {
  const heroSection = useRef(null);
  // const scrollDown = () => {
  //   const section = heroSection.current as HTMLElement | null;
  //   if (section) {
  //     const offsetTop = section.offsetTop;
  //     if (offsetTop !== undefined) {
  //       window.scrollTo({
  //         top: offsetTop,
  //         behavior: "smooth",
  //       });
  //     }
  //   }
  // };

  return (
    <>
      {/* <Header /> */}

      {/* <Loader duration={4000} /> */}
      <div className="containere">
        {/* <div
          className="scroll-down2 absolute z-10 "
          style={{
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
          }}
          onClick={scrollDown}
        ></div> */}
        <Hero />
        <Accordion />
        <Projects />
        <Footer />
      </div>
    </>
  );
}

export default Home;

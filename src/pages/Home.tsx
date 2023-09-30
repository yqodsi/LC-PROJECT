import "../App.css";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import Accordion from "../components/Accordion";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import Loader from "../components/Loader";
// import { useRef } from "react";
import Projects from "../components/Projects";
import { useEffect, useState } from "react";
import throttle from "lodash/throttle";
const navigation = [
  { name: "Home", href: "#" },
  { name: "Chi siamo", href: "#" },
  { name: "Progetti", href: "#" },
  { name: "Contatti", href: "#" },
  // { name: "Company", href: "#" },
];
function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (window.scrollY > 100) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }, 100); // Adjust the throttle delay as needed

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // const heroSection = useRef(null);
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
        <header
          className={`shadow hero-header-sticky text-gray-200 scrolled transition-all z-50 ${
            hasScrolled
              ? "bg-white text-gray-900  duration-600"
              : " duration-600 " // Apply the background color when scrolled
          }`}
        >
          <nav
            className="flex items-center justify-between  px-8 py-2"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                {hasScrolled ? (
                  <img className=" h-16" src="/logos/log-nero.png" alt="" />
                ) : (
                  <img className="h-16 " src="/logos/log.png" alt="" />
                )}
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm flex flex-col font-semibold leading-6"
              >
                <span>info@studioelettrotecnico</span>
                <span>+39 333 333 3333</span>
              </a>
            </div>
          </nav>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img className="h-8 w-auto" src="/logos/logo-of.png" alt="" />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        <HeroSection />
        <div
          className="relative"
          style={{
            top: "100vh",
            zIndex: 1,
          }}
        >
          <About />
          <Accordion />
          <Projects />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;

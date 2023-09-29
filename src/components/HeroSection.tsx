import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../assets/HeroSection.css";
// import { useEffect, useState } from "react";
// import { Dialog } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "../App.css";

// const navigation = [
//   { name: "Home", href: "#" },
//   { name: "Chi siamo", href: "#" },
//   { name: "Progetti", href: "#" },
//   { name: "Contatti", href: "#" },
//   // { name: "Company", href: "#" },
// ];
function HeroSection() {
  const images = [
    "/IMMSITO/Capannone/1.jpg",
    "/IMMSITO/Capannone/2.jpg",
    "/IMMSITO/Capannone/3.jpg",
  ];
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="hero-container fixed">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
        swipeable={true}
        showArrows={false}
        transitionTime={1000}
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-image">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className="hero-content">
        <div className="relative isolate px-6 pt-14 lg:px-8 ">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div> */}
            <div className="">
              <h1 className="text-3xl font-bold tracking-tighter text-gray-200 sm:text-5xl">
                Dall'Idea alla Realtà:
              </h1>
              <h1 className="text-2xl font-bold tracking-tighter text-gray-200 sm:text-4xl">
                Progettazione Elettrica
              </h1>
              <p className="mt-6 text-sm leading-7 text-gray-300">
                Benvenuti nel nostro studio di progettazione elettrica, un luogo
                dove l'energia prende vita e le idee si trasformano in realtà.
                Siamo un team giovane e dinamico, animato dalla passione per
                l'innovazione nell'ambito energetico. La nostra missione è
                plasmare un futuro in cui l'energia sia sostenibile e
                accessibile a tutti.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Scopri
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

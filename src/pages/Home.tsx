import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import Hero from "../components/Hero";
// import Loader from "../components/Loader";
import { useRef } from "react";

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
      <Header />

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

        <div className="img-accordion ">
          <div className="accordion-item">
            <img src="/residence.jpg" alt="" />

            <p className="flex flex-col">
              {" "}
              <img style={{ width: "30px" }} src="/logos/blu.png" alt="" />{" "}
              <span className="main_title">Residenziale</span>
              <div>PROGETTAZIONE DI IMPIANTI ELETTRICI RESIDENZIALI</div>
            </p>
          </div>
          <div className="accordion-item">
            <img src="/industry_11zon.jpg" alt="" />
            <p className="flex flex-col">
              {" "}
              <img
                style={{ width: "30px" }}
                src="/logos/gialli.png"
                alt=""
              />{" "}
              <span className="main_title">Industriale</span>
              <div>
                PROGETTAZIONE DI IMPIANTI ELETTRICI INDUSTRIALI/COMMERCIALI
              </div>
            </p>
          </div>
          {/* <div className=" accordion-item">
          <img src="/IMMSITO/Fotovoltaico/pexels-kelly-4320480_11zon.jpg" alt="" />
          <p>PROGETTAZIONE DI IMPIANTI FOTOVOLTAICI</p>
        </div> */}
          <div className="accordion-item">
            <img src="/fotovol_11zon.jpg" alt="" />
            <p className="flex flex-col">
              {" "}
              <img
                style={{ width: "30px" }}
                src="/logos/ROSSO.png"
                alt=""
              />{" "}
              <span className="main_title">Fotovoltaico</span>
              <div>PROGETTAZIONE DI IMPIANTI FOTOVOLTAICI</div>
            </p>
          </div>
          {/* <div className="accordion-item">
          <img
            src="/IMMSITO/Sicurezza/pexels-thomas-windisch-179993_11zon.jpg"
            alt=""
          />

          <p>PROGETTAZIONE DI IMPIANTI DI SICUREZZA</p>
        </div> */}

          <div className="accordion-item">
            <img src="/security_11zon.jpg" alt="" />
            <p className="flex flex-col">
              {" "}
              <img
                style={{ width: "30px" }}
                src="/logos/verde.png"
                alt=""
              />{" "}
              <span className="main_title">Sicurezza</span>
              <div>PROGETTAZIONE DI IMPIANTI DI SICUREZZA</div>
            </p>
          </div>
          {/* <div className="accordion-item">
          <img
            src="/IMMSITO/Incendio/istockphoto-1340874584-170667a_11zon.jpg"
            alt=""
          />
          <p>
            PROGETTAZIONE DI IMPIANTI DI RIVELAZIONE <br /> E ALLARME INCENDIO
          </p>
        </div> */}
          <div className="accordion-item">
            <img src="/incendie_11zon.jpg" alt="" />
            <p className="flex flex-col">
              {" "}
              <img
                style={{ width: "30px" }}
                src="/logos/nero.png"
                alt=""
              />{" "}
              <span className="main_title">Incendio</span>
              <div>
                {" "}
                PROGETTAZIONE DI IMPIANTI DI RIVELAZIONE E ALLARME INCENDIO
              </div>
            </p>
          </div>
        </div>
        <div className="hero  pt-5" ref={heroSection}>
          <div className="hero-content flex-col w-full">
            <span className="text-5xl flex justify-center">
              Dall'Idea alla Realtà:
            </span>
            <span className="text-5xl flex justify-center">
              Progettazione Elettrica
            </span>
            <div className="w-full flex justify-center items-center flex-col">
              <p className="py-6 text-center max-w-lg">
                Benvenuti nel nostro studio di progettazione elettrica, un luogo
                dove l'energia prende vita e le idee si trasformano in realtà.
                Siamo un team giovane e dinamico, animato dalla passione per
                l'innovazione nell'ambito energetico. La nostra missione é
                plasmare un futuro in cui l'energia sia sostenibile e
                accessibile a tutti.
              </p>
              <button className="btn">Scopri</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;

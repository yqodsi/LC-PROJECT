import "../App.css";
import Header from "../components/Header";
// import Hero from "../components/Hero";
// import Loader from "../components/Loader";
import { useRef } from "react";

function Home() {
  const heroSection = useRef(null);
  const scrollDown = () => {
    const section = heroSection.current as HTMLElement | null;
    if (section) {
      const offsetTop = section.offsetTop;
      if (offsetTop !== undefined) {
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <>
      <Header />

      {/* <Loader duration={4000} /> */}
      <div className="containere">
        <div
          className="scroll-down2 absolute z-10 "
          style={{
            top: "80%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
          }}
          onClick={scrollDown}
        ></div>

        <div className="img-accordion ">
          <div className="accordion-item">
            <img src="/residence.jpg" alt="" />

            <p className="flex flex-col">
              {" "}
              <img style={{ width: "50px" }} src="/logos/blu.png" alt="" />{" "}
              <span className="main_title">Residenziale</span>
              <div>PROGETTAZIONE DI IMPIANTI ELETTRICI RESIDENZIALI</div>
            </p>
          </div>
          <div className="accordion-item">
            <img src="/industry_11zon.jpg" alt="" />
            <p className="flex flex-col">
              {" "}
              <img
                style={{ width: "50px" }}
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
                style={{ width: "50px" }}
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
                style={{ width: "50px" }}
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
                style={{ width: "50px" }}
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
        <div className="hero min-h-screen bg-base-200" ref={heroSection}>
          <div className="hero-content flex-col lg:flex-row w-full">
            <span className="flex-1 text-5xl flex justify-center">
              CHE SIAMO
            </span>
            <div className="flex-1">
              <p className="py-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
                vero ipsa, architecto dicta porro minus facilis culpa error hic
                aliquam sequi. Natus veniam iusto atque veritatis accusantium
                provident fuga nisi culpa eligendi assumenda quos doloribus
                reprehenderit molestias, dolorum reiciendis eius. Reprehenderit
                ex veritatis ea temporibus incidunt earum at voluptate ab culpa
                repellendus. Modi saepe recusandae debitis quae impedit nisi
                fugiat voluptatum neque aliquid voluptas, porro non
                necessitatibus! Fugiat, nam quasi temporibus aperiam ea
                veritatis nulla a velit optio, ad exercitationem nisi molestiae
                iure possimus? Nemo, perspiciatis, eum animi aut alias facere
                accusantium molestiae, accusamus maxime qui nobis repellendus
                quia vel.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

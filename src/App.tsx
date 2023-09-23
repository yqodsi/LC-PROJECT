import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <div className="containere">
        <div className="img-accordion ">
          <div className="accordion-item">
            <img src="/residence.jpg" alt="" />

            <p className="flex flex-col">
              {" "}
              <img style={{ width: "50px" }} src="/Logo LC.png" alt="" />{" "}
              <span className="main_title">Residenziale</span>
              <div>PROGETTAZIONE DI IMPIANTI ELETTRICI RESIDENZIALI</div>
            </p>
          </div>
          <div className="accordion-item">
            <img src="/industry_11zon.jpg" alt="" />
            <p className="flex flex-col">
              {" "}
              <img style={{ width: "50px" }} src="/Logo LC.png" alt="" />{" "}
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
              <img style={{ width: "50px" }} src="/Logo LC.png" alt="" />{" "}
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
              <img style={{ width: "50px" }} src="/Logo LC.png" alt="" />{" "}
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
              <img style={{ width: "50px" }} src="/Logo LC.png" alt="" />{" "}
              <span className="main_title">Incendio</span>
              <div>
                {" "}
                PROGETTAZIONE DI IMPIANTI DI RIVELAZIONE E ALLARME INCENDIO
              </div>
            </p>
          </div>
        </div>
        {/* <div className="hero px-20 py-10">
          <div className="hero-content flex-col lg:flex-row h-full">
            <p className="flex-1 flex justify-start flex-col h-full  bg-[#F1F6F9]">
              <span className="font-[900] text-3xl">
                STUDIO ELETTROTRECNICO
              </span>
              <span className="font-[500] text-xl">
                Per. ind. Luca Cazzaniga
              </span>
            </p>
            <div className="flex-1 flex justify-start">
              <p className="">
                In un mondo guidato dall'elettricità, il cuore pulsante della
                civiltà moderna, il nostro impegno per l'eccellenza
                nell'ingegneria e nella pianificazione elettrica risplende più
                che mai. Benvenuti in [Nome della Vostra Azienda], dove
                innovazione, precisione e sostenibilità convergono per
                alimentare il futuro.
              </p>
            </div>
          </div>
        </div> */}
        <Hero />
      </div>
    </>
  );
}

export default App;

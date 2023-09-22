// import { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)
  // const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  // const handleScroll = () => {
  //   if (window.scrollY > 100) {
  //     setIsHeaderVisible(false); // Hide the header when scrolled down 100 pixels
  //   } else {
  //     setIsHeaderVisible(true); // Show the header when scrolled up
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div
        className="navbar bg-white text-black sticky z-10"
        style={{
          opacity: "0.4",
          width: "90%",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <a className="btn btn-ghost normal-case text-xl"></a>
      </div>
      {/* <img src="/IMMSITO/Casa/pexels-vecislavas-popa-1571463.jpg" alt="" /> */}
      <div className="img-accordion">
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
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="/Logo.png" className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Alimentare il Futuro: Eccellenza nell'Ingegneria e nella
              Pianificazione Elettrica
            </h1>
            <p className="py-6">
              In un mondo guidato dall'elettricità, il cuore pulsante della
              civiltà moderna, il nostro impegno per l'eccellenza
              nell'ingegneria e nella pianificazione elettrica risplende più che
              mai. Benvenuti in [Nome della Vostra Azienda], dove innovazione,
              precisione e sostenibilità convergono per alimentare il futuro.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

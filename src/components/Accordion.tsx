// import React from "react";

function Accordion() {
  return (
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
          <img style={{ width: "30px" }} src="/logos/gialli.png" alt="" />{" "}
          <span className="main_title">Industriale</span>
          <div>PROGETTAZIONE DI IMPIANTI ELETTRICI INDUSTRIALI/COMMERCIALI</div>
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
          <img style={{ width: "30px" }} src="/logos/ROSSO.png" alt="" />{" "}
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
          <img style={{ width: "30px" }} src="/logos/verde.png" alt="" />{" "}
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
          <img style={{ width: "30px" }} src="/logos/nero.png" alt="" />{" "}
          <span className="main_title">Incendio</span>
          <div>
            {" "}
            PROGETTAZIONE DI IMPIANTI DI RIVELAZIONE E ALLARME INCENDIO
          </div>
        </p>
      </div>
    </div>
  );
}

export default Accordion;

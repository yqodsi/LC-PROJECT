// import { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

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
<div className="navbar bg-white text-black sticky z-10" style={{opacity: "0.4", width: "90%", justifyContent: "center", display: "flex"}}>
  <a className="btn btn-ghost normal-case text-xl"></a>
</div>
      {/* <img src="/IMMSITO/Casa/pexels-vecislavas-popa-1571463.jpg" alt="" /> */}
<div className="img-accordion">
<div className="accordion-item">

<img src="/IMMSITO/Casa/pexels-vecislavas-popa-1571463.jpg" alt="" />

 <p className='flex flex-col'> <img style={{width: "50px"}} src="/Logo LC.png" alt="" /> <span className='main_title'>Residenziale</span><div>PROGETTAZIONE DI IMPIANTI ELETTRICI RESIDENZIALI</div></p>
</div>
    <div className="accordion-item">

           <img src="/IMMSITO/Capannone/pexels-pixabay-256297.jpg" alt="" />

            <p className='flex flex-col'> <img style={{width: "50px"}} src="/Logo LC.png" alt="" /> <span className='main_title'>Residenziale</span><div>PROGETTAZIONE DI IMPIANTI ELETTRICI <br/> INDUSTRIALI/COMMERCIALI</div></p>
        </div>
                <div className=" accordion-item">
      <img src="/IMMSITO/Fotovoltaico/pexels-kelly-4320480.jpg" alt="" />
      <p>PROGETTAZIONE DI IMPIANTI FOTOVOLTAICI</p>
    </div>
    <div className="accordion-item">
    <img src="/IMMSITO/Sicurezza/pexels-thomas-windisch-179993.jpg" alt="" />

      <p>PROGETTAZIONE DI IMPIANTI DI SICUREZZA</p>
    </div>
    <div className="accordion-item">
      <img src="/IMMSITO/Incendio/istockphoto-1340874584-170667a.jpg" alt="" />
      <p>PROGETTAZIONE DI IMPIANTI DI RIVELAZIONE <br/> E ALLARME INCENDIO</p>
    </div>
  </div>
  <h1>HERO SECTION</h1>


    </>
  )
}

export default App

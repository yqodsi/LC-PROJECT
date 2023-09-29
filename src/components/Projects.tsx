import "swiper/css";
import Slider from "./Slider";

function Projects() {
  return (
    <div className="flex flex-col gap-10 items-center py-10 px-[100px] bg-white">
      <p className="text-3xl font-semibold">ALCUNI NOSTRI PROGETTI</p>
      <Slider />
      <p className="text-3xl">E' TEMPO DI INIZIARE UN NUOVO PROGETTO?</p>
      <button className="btn btn-primary">CONTATTACI ORA</button>
    </div>
  );
}

export default Projects;

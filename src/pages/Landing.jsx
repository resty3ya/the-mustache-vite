import About from "./About";
import { landing } from "../assets/images/index";

const Landing = () => {
  return (
    <main>
      <section id="home" className=" bg-yellow-800">
        <div className="flex xl:flex-row justify-center ">
          <img src={landing} alt="background" className="w-full" />
          <div className="absolute text-center">
            <p className="text-white font-bangers text-4xl pb-6 pt-80">
              AT THE MUSTACHE WE DO THE PASSION WITH STYLE
            </p>
            <button
              type="submit"
              className="bg-[#3B3E33] w-[230px] h-[45px] px-5 font-nunito text-[#F6F6F6]"
            >
              <a href="#booking">Book now</a>
            </button>
          </div>
        </div>
      </section>
      <section id="about" className="bg-[#766B53]">
        <About />
      </section>
      <section id="services">Services</section>
      <section id="booking">Booking</section>
      <section id="gallery">Gallery</section>
      <section id="prices">Prices</section>
      <section id="testimony">Testimony</section>
    </main>
  );
};
export default Landing;

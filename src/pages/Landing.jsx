const Landing = () => {
  return (
    <main>
      <section
        id="landing"
        className="sm:pl-16 pl-8 bg-yellow-800 sm:pr-16 pr-8 sm:pb-24 pb-12"
      >
        <div className="w-full flex xl:flex-row justify-center min-h-screen">
          <img src="" alt="" />
          <div className="text-center">
            <p className="text-white font-bangers text-4xl pb-6 pt-80">
              AT THE MUSTACHE WE DO THE PASSION WITH STYLE
            </p>
            <button
              type="submit"
              className="bg-green-950 rounded-md px-5 font-nunito text-white"
            >
              Book now
            </button>
          </div>
        </div>
      </section>
      <section id="about">About</section>
      <section id="services">Services</section>
      <section id="booking">Booking</section>
      <section id="gallery">Gallery</section>
      <section id="prices">Prices</section>
      <section id="testimony">Testimony</section>
    </main>
  );
};
export default Landing;

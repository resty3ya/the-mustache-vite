import { aboutImage } from "../assets/images";

const About = () => {
  return (
    <section className="justify-center min-h-screen">
      <div className="flex">
        <img src={aboutImage} alt="barber" />
        <h2 className="font-bangers text-white">
          we are the group of young professional barbers
        </h2>
        <div className="font-nunito text-white">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <br />
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;

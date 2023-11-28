import { aboutImage } from "../assets/images";

const About = () => {
  return (
    <section className="justify-evenly flex-col-reverse min-h-screen">
      <div className="flex">
        <img src={aboutImage} alt="barber" />
      </div>
      <div className="">
        <h2 className="font-bangers text-white">
          we are the group of young professional barbers
        </h2>
        <p className="font-nunito text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <br />
        <p className="font-nunito text-white">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Lorem ipsum dolor sit amet
        </p>
      </div>
    </section>
  );
};
export default About;

import { aboutImage } from "../assets/images";

const About = () => {
  return (
    <section className="w-full">
      <div className="sm:w-full">
        <img
          src={aboutImage}
          alt="barber"
          className="h-full lg:w-8/12 w-full"
        />
      </div>
      <div className="lg:absolute left-40 lg:bottom-[45%] lg:pl-[30rem] lg:pr-10 pl-5 py-5">
        <h2 className="font-bangers text-[#FCFCFC] text-3xl">
          we are the group of young professional barbers
        </h2>
        <br />
        <p className="font-nunito text-[#FCFCFC] lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <br />
        <p className="font-nunito text-[#FCFCFC] lg:text-lg">
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

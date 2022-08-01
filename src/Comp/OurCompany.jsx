import hero from "../img/casual2.png";

const OurCompany = () => {
  return (
    <>
      <div className="flex text-center justify-center ">
        <h2
          data-aos="zoom-in-up"
          className="text-[2rem] font-bold tracking-wider text-slate-900 "
        >
          Our <span className="text-violet-500">Company</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  py-8 px-10 md:px-20 mx-auto">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img
            src={hero}
            loading="lazy"
            className="drop-shadow-2xl object-cover h-fit m-auto"
            alt="hero"
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="flex flex-col md:px-12"
        >
          <h1 className="lg:text-[3.5rem] backdrop-blur-sm text-[2.5rem] text-center  md:text-start  font-bold text-slate-800 ">
            A company specializing in
            <span className="text-purple-500"> application</span> and{" "}
            <span className="text-purple-500">website </span> developement
          </h1>
          <h1 className="md:text-2xl text-lg text-center md:text-start py-4 font-semibold text-gray-400 ">
            Indias best minds under one roof .The architecture of a digital
            tomorrow , united under the banner of Application
          </h1>
          <div className="md:py-12  justify-center  items-center sm:w-full  flex gap-x-6 md:gap-x-10 ">
            <button className="px-3 shadow-2xl ml-2 py-2 font-bold bg-violet-500 rounded-lg  text-white ">
              Our Company
            </button>
            <button className="px-3 shadow-2xl ml-2 border border-violet-500 text-violet-500  py-2 font-bold  rounded-lg  ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default OurCompany;

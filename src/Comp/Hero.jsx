import hero from "../img/casual.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  py-8 px-10 md:px-20 mx-auto">
      <div
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="flex flex-col md:px-12"
      >
        <h1 className="lg:text-[4rem] backdrop-blur-sm text-[2.5rem] text-center  md:text-start  font-bold text-slate-800 ">
          A company focused on innovation in{" "}
          <span className="text-purple-500">software creation</span>
        </h1>
        <h1 className="md:text-2xl text-lg text-center md:text-start py-4 font-semibold text-gray-500 ">
          we always seek the best way to help our customers with good agility
        </h1>
        <div className="md:py-12  justify-center  items-center sm:w-full  flex gap-x-6 md:gap-x-10 ">
          <button className="px-2 shadow-2xl lg:ml-2 py-2 font-bold bg-violet-500 rounded-lg  text-white ">
            Free Consultation
          </button>
          <button className="px-2 shadow-2xl lg:ml-2 border border-violet-500 text-violet-500  py-2 font-bold  rounded-lg  ">
            Read More
          </button>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="flex items-center justify-center"
      >
        <img
          src={hero}
          loading="lazy"
          className="drop-shadow-2xl object-center h-fit object-cover m-auto"
          alt="hero"
        />
      </div>
    </div>
  );
};
export default Hero;

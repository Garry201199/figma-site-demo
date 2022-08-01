import hero from "../img/casual4.png";
const ConsultingComp = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  py-8 px-12 md:px-20 mx-auto">
        <div className="flex flex-col md:px-12">
          <h1 className="lg:text-[3.5rem] backdrop-blur-sm text-[2.5rem] text-center  md:text-start  font-bold text-slate-800 ">
            We are Transforming the
            <span className="text-purple-500"> Digital Landscape</span>
          </h1>
          <h1 className="md:text-2xl text-lg text-center md:text-start py-4 font-semibold text-gray-400 ">
            We take care of your buissness neede by bringing novel digital
            experiences to the table by flawlessly integrating design &
            developement. Our team offers end-to-end full stack developement
            services blended.
          </h1>
          <div className="md:py-12  justify-center  items-center  flex gap-x-10 ">
            <button className="px-3 shadow-2xl ml-2 py-2 font-bold bg-violet-500 rounded-lg  text-white ">
              Free Consultation
            </button>
          </div>
        </div>
        <div>
          <img
            src={hero}
            loading="lazy"
            className="drop-shadow-2xl object-cover h-fit m-auto"
            alt="hero"
          />
        </div>
      </div>
    </>
  );
};
export default ConsultingComp;

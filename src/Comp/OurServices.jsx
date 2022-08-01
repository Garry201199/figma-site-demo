import { TiChartPieOutline } from "react-icons/ti";
import { FaApple } from "react-icons/fa";
import { ImAndroid } from "react-icons/im";
import { BsDisplayFill } from "react-icons/bs";
import hero from "../img/casual3.png";
const data = [
  {
    id: 1,
    icon: TiChartPieOutline,
    info: "Product Management",
    color: "purple"
  },
  { id: 2, icon: FaApple, info: "IOS developement", color: "gray" },
  { id: 3, icon: ImAndroid, info: "Android Management", color: "green" },
  { id: 4, icon: BsDisplayFill, info: "Software Management", color: "blue" }
];

const OurServices = () => {
  return (
    <>
      <div className="flex text-center justify-center ">
        <h2 className="text-[2rem] font-bold tracking-wider text-slate-900 ">
          Our <span className="text-violet-500">Services</span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-y-4 md:gap-x-24 gap-x-12 py-8 px-12 md:px-20 mx-auto">
        {data &&
          data.map((i) => (
            <div
              key={i.id}
              className="w-60 h-60 p-8 flex flex-col shadow-2xl  rounded-2xl"
            >
              <div className="flex justify-center py-4">
                <div
                  className={`rounded-full flex align-center justify-center items-center 
                    bg-${i.color}-300 h-20 w-20`}
                >
                  <i.icon className={`text-${i.color}-600 m-3 `} size={48} />
                </div>
              </div>

              <h1 className="text-center text-2xl font-bold text-slate-900">
                {i.info}
              </h1>
            </div>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  py-8 px-12 md:px-20 mx-auto">
        <div className="flex flex-col md:px-12">
          <h1 className="lg:text-[3.5rem] backdrop-blur-sm text-[2.5rem] text-center  md:text-start  font-bold text-slate-800 ">
            Our App
            <span className="text-purple-500"> Developement Services</span>
          </h1>
          <h1 className="md:text-2xl text-lg text-center md:text-start py-4 font-semibold text-gray-400 ">
            Indias best minds under one roof .The architecture of a digital
            tomorrow , united under the banner of Application.The architecture
            of a digital tomorrow , united under the banner of Application
          </h1>
          <div className="md:py-12  justify-center  items-center  flex gap-x-10 ">
            <button className="px-3 drop-shadow-2xl ml-2 py-2 font-bold bg-violet-500 rounded-lg  text-white ">
              Our Services
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
export default OurServices;

import { GrDown } from "react-icons/gr";
const NavBar = () => {
  return (
    <div className="w-full mx-auto h-16  px-12 md:px-24 flex items-center justify-between  z-10 ">
      <div className="relative flex ">
        <h1 className=" text-white  font-mono text-xl m-1 tracking-widest  ">
          Gavian
        </h1>
        <div className=" absolute drop-shadow-xl -z-20  bg-violet-300 rotate-4 px-10 py-4 -l-2 "></div>
        <div className=" absolute drop-shadow-xl -z-10   bg-violet-600 rotate-6 px-10 py-4 -l-2 "></div>
      </div>

      <div className="hidden md:flex">
        <ul className="flex gap-x-2 md:gap-x-6 lg:gap-x-10 text-slate-400 font-bold">
          <li className="text-violet-500  hover:underline underline-offset-8 decoration-gray-900 duration-300 transition ">
            Home
          </li>
          <li className="text-slate-400 hover:text-slate-800 hover:underline underline-offset-8 decoration-violet-400 duration-300 transition ">
            Services
          </li>
          <li className="text-slate-400 hover:text-slate-800 hover:underline underline-offset-8 decoration-violet-400 duration-300 transition">
            About Us
          </li>
          <li className="text-slate-400 hover:text-slate-800 hover:underline underline-offset-8 decoration-violet-400 duration-300 transition">
            Technologies
          </li>
        </ul>
      </div>

      <div className=" flex ">
        <div className="flex items-center gap-1">
          <h1 className="font-semibold text-violet-400">En</h1>
          <GrDown className="font-bold" />
        </div>
        <button className="px-2 shadow-2xl ml-2 py-2 font-bold bg-violet-500 rounded-lg  text-white ">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default NavBar;

const Budget = () => {
  return (
    <>
      <div className="flex text-center gap-y-3 mt-4 items-center justify-center mb-8 ">
        <h2 className="text-[2rem] font-bold tracking-wider text-slate-900 ">
          Project <span className="text-violet-500">Budget</span>
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-[80%]   rounded-xl p=8  bg-gradient-to-r from-pink-300 to-violet-400 ">
          <div className="grid grid-cols-1 gap-y-9 gap-x-8 md:grid-cols-2 px-12 py-20 ">
            <div className="flex flex-col gap-y-6">
              <h1 className="lg:text-[3.5rem] backdrop-blur-sm text-[2.5rem] text-center  md:text-start  font-bold text-slate-800">
                Send us your <span className="text-violet-500">Project </span>
                For a Quote
              </h1>
              <h1 className="md:text-2xl text-lg text-center md:text-start py-4 font-semibold text-gray-200 ">
                There are many variations of passages of Lorem Ipsum avaialable
                but many are dead
              </h1>
              <button className="bg-[#f9f9f9] hover:bg-white  transition duration-300 rounded-2xl shadow-2xl text-violet-500 px-4 py-2 font-semibold text-xl">
                Submit
              </button>
            </div>

            <div className="flex flex-col gap-y-10">
              <input
                type="text"
                placeholder="Full Name"
                className="h-12 rounded-xl px-3 py-2 bg-gray-100 text-gray-600 outline-none focus:border-none "
              ></input>

              <input
                type="text"
                placeholder="E-mail"
                className="h-12 rounded-xl px-3 py-2 bg-gray-100 text-gray-600 outline-none focus:border-none "
              ></input>

              <input
                type="text"
                placeholder="Phone Number"
                className="h-12 rounded-xl px-3 py-2 bg-gray-100 text-gray-600 outline-none focus:border-none "
              ></input>
              <textarea
                placeholder="Project Description"
                resize="none"
                className="h-30 rounded-xl px-3 py-2 bg-gray-100 text-gray-600 outline-none focus:border-none"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Budget;

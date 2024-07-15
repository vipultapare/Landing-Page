const Main1 = () => {
  return (
    <div className="flex flex-col items-center mx-14">
      <h1 className="mt-4 font-semibold text-lg md:text-2xl bg-gradient-to-r from-blue-600  to-indigo-400  text-transparent bg-clip-text">
        The Worlds Most Configurable
      </h1>
      <h1 className=" text-center text-2xl md:text-6xl mt-3 font-semibold">
        Travel & Expense Management Software
      </h1>
      <p className="mt-7 justify-center text-center md:w-[800px] font-light text-sm md:text-xl text-gray-600">
        Configure
        <span className="text-blue-800 underline cursor-pointer"> any </span>
        rule. Enable a world class mobile experience for your users. Get
        seamless reporting & integrations. Inbuilt OCR expense scanning. Manage
        travel & non-travel expenses. Open APIs to connect with external
        systems.
      </p>
      <div className=" mt-12 flex md:flex-row flex-col mx-20 gap-2 items-center">
        <input
          type="text"
          placeholder="Name"
          className="border-2   border-gray-400 p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="official Mail ID"
          className="border-2    border-gray-400 p-2 rounded-md"
        />
        <button className="bg-gradient-to-tr from-blue-600 to-blue-400 p-2 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 text-white rounded-md w-full">
          Start Trial
        </button>
      </div>

      <div className="flex justify-center gap-4 mt-5 text-slate-700">
        <span>30 Days free trial</span>
        <span>Upto 10 Users</span>
      </div>
    </div>
  );
};

export default Main1;

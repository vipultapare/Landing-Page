const Main6 = () => {
  return (
    <div className="hidden md:flex flex-col bg-blue-100 p-8 mb-10">
      <h1 className="text-center font-semibold text-4xl text-blue-600">
        Manage your travel and expenses the smart way!
      </h1>
      <div className="mt-16 flex justify-center gap-2">
        <input
          type="text"
          placeholder="Name"
          className="border-2 border-gray-400 p-2 rounded-md"
        />
        <input
          type="text"
          placeholder="official Mail ID"
          className="border-2 border-gray-400 p-2 rounded-md w-1/3"
        />
        <button className="bg-gradient-to-tr from-blue-600 to-blue-400 p-2 text-white rounded-md hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600">
          Start Trial
        </button>
      </div>
      <div className=" flex justify-center gap-4 mt-5 text-slate-700">
        <span>30 Days free trial</span>
        <span>Upto 10 Users</span>
      </div>
    </div>
  );
};

export default Main6;

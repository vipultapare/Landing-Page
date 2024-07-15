import logo2 from "../assets/logo2.png";
const Main2 = () => {
  return (
    <div className="flex flex-col items-center my-10 border-2 border-gray-400 rounded-md shadow-lg w-3/4 mx-[15%]">
      <h1 className="text-gray-400 items-center mt-3">
        USED BY OVER 50 ENTERPRISES
      </h1>
      <ul className="flex  gap-14 md:gap-20 my-6">
        <li className="flex h-4 w-3 md:h-6 md:w-5 gap-1 md:gap-2">
          <img src={logo2} alt="" className="" />
          <h1 className="font-semibold">hotjar</h1>
        </li>
        <li className="flex h-4 w-3 md:h-6 md:w-5 gap-1 md:gap-2">
          <img src={logo2} alt="" className="" />
          <h1 className="font-semibold">hotjar</h1>
        </li>
        <li className="flex h-4 w-3 md:h-6 md:w-5  gap-1 md:gap-2">
          <img src={logo2} alt="" className="" />
          <h1 className="font-semibold">hotjar</h1>
        </li>

        <li className=" hidden md:flex h-6 w-5 gap-2">
          <img src={logo2} alt="" className="" />
          <h1 className="font-semibold">hotjar</h1>
        </li>
        <li className="hidden md:flex h-6 w-5 gap-2">
          <img src={logo2} alt="" className="" />
          <h1 className="font-semibold">hotjar</h1>
        </li>
        <li className="hidden md:flex h-6 w-5 gap-2">
          <img src={logo2} alt="" className="" />
          <h1 className="font-semibold">hotjar</h1>
        </li>
      </ul>
    </div>
  );
};

export default Main2;

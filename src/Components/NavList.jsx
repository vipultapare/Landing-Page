const NavList = () => {
  return (
    <div>
      <ul className=" flex flex-col md:flex-row gap-7">
        <li className="text-slate-800 font-light cursor-pointer">Blogs</li>
        <li className="text-slate-800 font-light cursor-pointer">Features</li>
        <li className="text-slate-800 font-light cursor-pointer">Pricing</li>
        <li className="text-slate-800 font-light cursor-pointer">
          Integrations
        </li>
        <button className="bg-gradient-to-r from-blue-600 to-blue-400 p-2 rounded-lg text-white w-24 -mt-2 cursor-pointer hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600">
          Start trail
        </button>
      </ul>
    </div>
  );
};

export default NavList;

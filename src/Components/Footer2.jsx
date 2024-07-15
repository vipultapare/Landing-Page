const Footer2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-5 md:mx-[5%]">
      <ul className="flex gap-8 text-md cursor-pointer">
        <li>Blogs</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Integrations</li>
      </ul>

      <span className=" text-gray-400 md:mt-0 mt-4">
        <h1>Copyright © 2024 • ExpenseBook</h1>
      </span>
    </div>
  );
};

export default Footer2;

import one from "../assets/cust-1.png";
import two from "../assets/cust-2.png";
import three from "../assets/cust-3.png";
const Main5 = () => {
  return (
    <div className="hidden md:flex flex-col  justify-center">
      <h1 className="  text-center text-4xl text-blue-600 p-10">
        Our customers love us
      </h1>
      <ul className="flex flex-row  p-16 gap-5 mx-[5%]">
        <li className="gap-6 w-3/4  border-2 border-blue-300 h-1/4 p-8 bg-blue-100 rounded-lg">
          <p className="text-justify font-light">
            ExpenseBook has truly streamlined our travel setup. No more emails
            and delays in booking. No mor unknown overruns in expense.
            Everything is trackable, and the configurability they offer is
            outstanding.
          </p>
          <span className="flex mt-10 gap-4">
            <img className="h-12 w-12" src={one} alt="" />
            <span>
              <h1 className="text-black font-bold text-lg">Rohit Mehra</h1>
              <h2 className="font-light">CFO, XYZ</h2>
            </span>
          </span>
        </li>
        <li className="gap-6 w-3/4  border-2 border-blue-300 h-1/4 p-8 bg-blue-100 rounded-lg">
          <p className="text-justify font-light">
            ExpenseBook has truly streamlined our travel setup. No more emails
            and delays in booking. No mor unknown overruns in expense.
            Everything is trackable, and the configurability they offer is
            outstanding.
          </p>
          <span className="flex mt-10 gap-4">
            <img className="h-12 w-12" src={two} alt="" />
            <span>
              <h1 className="text-black font-bold text-lg">Alan Turing</h1>
              <h2 className="font-light">CFO, XYZ</h2>
            </span>
          </span>
        </li>
        <li className="gap-6 w-3/4  border-2 border-blue-300 h-1/4 p-8 bg-blue-100 rounded-lg">
          <p className="text-justify font-light">
            ExpenseBook has truly streamlined our travel setup. No more emails
            and delays in booking. No mor unknown overruns in expense.
            Everything is trackable, and the configurability they offer is
            outstanding.
          </p>
          <span className="flex mt-10 gap-4">
            <img className="h-12 w-12" src={three} alt="" />
            <span>
              <h1 className="text-black font-bold text-lg">Mark Jacob</h1>
              <h2 className="font-light">CEO, XYZ</h2>
            </span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Main5;

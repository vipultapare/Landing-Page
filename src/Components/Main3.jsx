import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import five from "../assets/five.png";
import six from "../assets/six.png";
import seven from "../assets/seven.png";
import eight from "../assets/eight.png";
import nine from "../assets/nine.png";
const Main3 = () => {
  return (
    <div className="mx-[9%] mt-16">
      <h1 className="flex justify-center text-center text-3xl md:text-4xl text-blue-600">
        Features that suit your needs
      </h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-6">
        <li className="flex flex-col">
          <div className="flex gap-2">
            <img className="h-10 w-10" src={one} alt="" />
            <h1 className="font-bold mt-2">Setup Employee Groups</h1>
          </div>
          <p className="text-gray-500 text-justify">
            Use any parameter to setup distinct employee groups to implement
            policies
          </p>
        </li>
        <li className="flex flex-col">
          <div className="flex gap-2 ">
            <img className="h-10 w-10" src={two} alt="" />
            <h1 className="font-bold mt-2">The Definitive Rule Engine</h1>
          </div>
          <p className="text-gray-500 text-justify">
            Configure ANY policy - and if you can’t configure it, we promise to
            work on it <span className="font-bold">for free</span>
          </p>
        </li>
        <li className="flex flex-col">
          <div className="flex gap-2 ">
            <img className="h-10 w-10" src={three} alt="" />
            <h1 className="font-bold mt-2">Customized Reports</h1>
          </div>
          <p className="text-gray-500 text-justify">
            Setup the reports that you want using our seamless reporting engine.
          </p>
        </li>
        <li className="flex flex-col">
          <div className="flex gap-2 ">
            <img className="h-10 w-10" src={four} alt="" />
            <h1 className="font-bold mt-2">Superior Employee Experience</h1>
          </div>
          <p className="text-gray-500 text-justify">
            Manage all expenses and travel requests easily. Empower your
            employees with personalized reports.
          </p>
        </li>
        <li className="flex flex-col">
          <div className="flex gap-2 ">
            <img className="h-10 w-10" src={five} alt="" />
            <h1 className="font-bold mt-2">Easy Integrations</h1>
          </div>
          <p className="text-gray-500 text-justify">
            Integrate with your upstream, HRMS or your downstream finance system
            to seamlessly deliver value through our Open APIs.
          </p>
        </li>
        <li className="flex flex-col">
          <div className="flex gap-2 ">
            <img className="h-10 w-10" src={six} alt="" />
            <h1 className="font-bold mt-2">Configurable Workflows</h1>
          </div>
          <p className="text-gray-500 text-justify">
            Configure approvals or rejections. Escalations and reports. At will.
            Setup new groups.
          </p>
        </li>
        <li className="flex flex-col">
          <div className="flex gap-2 ">
            <img className="h-10 w-10" src={seven} alt="" />
            <h1 className="font-bold mt-2">Scan any Bill</h1>
          </div>
          <p className="text-gray-500 text-justify">
            The world’s best OCR system backs up this product. All data goes in.
            99% success.
          </p>
        </li>
        <li className="flex flex-col">
          <div className="flex gap-2 ">
            <img className="h-10 w-10" src={eight} alt="" />
            <h1 className="font-bold mt-2">AI-Based Concierge</h1>
            <button className="bg-orange-200  text-sm p-2 text-orange-500 rounded-md">
              Coming Soon
            </button>
          </div>
          <p className="text-gray-500 text-justify">
            Ask the concierge to change things during your travel - and it will
            trigger relevant actions 24x7.
          </p>
        </li>
        <li className="flex flex-col">
          <div className="flex gap-2 ">
            <img className="h-10 w-10" src={nine} alt="" />
            <h1 className="font-bold mt-2">AI-Assisted Trip Planning</h1>
            <button className="bg-orange-200 text-sm p-2 text-orange-500 rounded-md">
              Coming Soon
            </button>
          </div>
          <p className="text-gray-500 text-justify">
            Just tell us what you want to do in normal language and we will try
            and put together the best itinerary for you.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Main3;

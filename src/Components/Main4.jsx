import one from "../assets/int-1.png";
import two from "../assets/int-2.png";
import three from "../assets/int-3.png";
const Main4 = () => {
  return (
    <div className="my-16  bg-blue-100">
      <h1 className="text-center pt-10 font-semibold text-2xl md:text-4xl text-blue-600">
        Integrations
      </h1>
      <ul className="flex flex-col md:flex-row gap-5 pt-8 md:pt-8 md:p-20 md:mt-12 mx-[15%] md:mx-[5%]">
        <li className=" flex flex-col border-2 border-orange-400 rounded-lg w-full md:w-3/4  p-6 bg-gradient-to-r from-orange-50 to-orange-100 text-justify">
          <div className="flex gap-2">
            <img className="h-10 w-10" src={one} alt="" />
            <h1 className="mt-2 font-semibold">HRMS Systems</h1>
          </div>
          <p className="font-thin text-xs p-0 mt-4">
            We can integrate with any HRMS as long as the employee master can be
            made available to us over SFTP/API.
            <br />
            <br />
            We are already deeply integrated with PeopleStrong and others are
            coming up.
          </p>
        </li>

        <li className="flex flex-col border-2 border-green-400 rounded-lg   w-full md:w-3/4 p-6 bg-gradient-to-r from-green-50 to-green-100  text-justify">
          <div className="flex gap-2">
            <img className="h-10 w-10" src={two} alt="" />
            <h1 className="mt-2 font-semibold">Finance Systems</h1>
          </div>
          <p className="font-thin text-xs p-0 mt-4">
            Connect us with your finance systems to get all cost centers mapped,
            and all data reconciled on a periodic/regular basis.
            <br />
            <br />
            Open APIs available to connect.
          </p>
        </li>

        <li className="flex flex-col border-2 border-blue-400 rounded-lg  w-full md:w-3/4 p-6 bg-gradient-to-r from-blue-100 to-blue-200  text-justify mb-5">
          <div className="flex gap-2">
            <img className="h-10 w-10" src={three} alt="" />
            <h1 className="mt-2 font-semibold">Single Sign-on Systems</h1>
          </div>
          <p className="font-thin text-xs p-0 mt-4">
            We can integrate to ensure that your users don’t have to log in
            multiple times into different logins.
            <br />
            <br />
            SSO is possible with any system that offers it.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Main4;

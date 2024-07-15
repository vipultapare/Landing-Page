import expressbook from "../assets/expressbook.png";
import location from "../assets/placeholder.png";
import phone from "../assets/phone-call.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
const Footer1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between ml-[5%] md:mx-[15%] border-b-2 border-gray-200">
      <img className="max-w-40 max-h-10" src={expressbook} alt="" />
      <div className="p-2 mt-4 md:mt-0">
        <span className="flex gap-2">
          <img className="h-4 w-4 mt-1" src={location} alt="" />
          <h1>Address</h1>
        </span>
        <span className="flex gap-2 mt-2">
          <img className="h-4 w-4 mt-1" src={phone} alt="" />
          <h1>+91 1234567890</h1>
        </span>

        <span className="className= flex mt-2 md:mt-5 gap-2 p-1">
          <h1 className="font-thin">Social Media</h1>
          <div className="flex gap-4">
            <img className="h-4 w-4 " src={linkedin} alt="" />
            <img className="h-4 w-4 " src={youtube} alt="" />
            <img className="h-4 w-4 " src={instagram} alt="" />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Footer1;

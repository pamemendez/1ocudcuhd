import { FaTwitter,FaFacebookF,FaLinkedinIn,FaInstagram,FaPinterestP,FaSkype,} from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs"; 
import woman from "../../assets/woman.png";
import logoSensor from "../../assets/logoSensor.png"

  
  export default function HomeFooter() {
    return (
      <footer className="bg-[#eaf4ff] text-gray-900 pt-12 pb-8 px-8">
        {/* Top part with image and heading */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-0 md:justify-start md:pl-20 bg-[#eaf4ff] mb-12 relative">
          <div className="relative -left-16 md:-left-20">
            <img
              src={woman}
              alt="Smiling Woman"
              className="h-36 md:h-40 object-contain"
            />
            {/* Two circles behind the image */}
            <div className="absolute top-8 left-36 w-20 h-20 bg-blue-500 rounded-full opacity-50 z-0 hidden md:block"></div>
            <div className="absolute top-12 left-24 w-24 h-24 bg-blue-300 rounded-full opacity-40 z-0 hidden md:block"></div>
          </div>
          <div className="flex flex-col max-w-xl ml-12 md:ml-0">
            <h2 className="text-2xl font-bold mb-1">
              Start Your Journey in Smart Sensing
            </h2>
            <p className="text-xs md:text-sm font-normal">
              We only partner with top global tech firms to deliver accurate sensor data.
            </p>
          </div>
        </div>
  
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-sm md:text-base gap-10">
          <div className="md:w-1/4 space-y-3">
             <div className="flex items-center gap-2 mb-1">
              <img src={logoSensor} alt="SensorConnect Logo" className="h-10 w-auto" />
            </div>
            <p className="text-xs text-gray-700">
              Hub de sensores IoT
            </p>
            <p className="mt-2 text-xs text-gray-800 leading-relaxed">
              The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable.
            </p>
  
            <div className="flex mt-4 space-x-3">
              <a href="#" aria-label="Twitter" className="bg-[#384250] text-white p-2 rounded-md hover:opacity-80 transition-opacity">
                <FaTwitter size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="bg-[#384250] text-white p-2 rounded-md hover:opacity-80 transition-opacity">
                <FaFacebookF size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-[#384250] text-white p-2 rounded-md hover:opacity-80 transition-opacity">
                <FaLinkedinIn size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="bg-[#384250] text-white p-2 rounded-md hover:opacity-80 transition-opacity">
                <FaInstagram size={18} />
              </a>
              <a href="#" aria-label="Pinterest" className="bg-[#384250] text-white p-2 rounded-md hover:opacity-80 transition-opacity">
                <FaPinterestP size={18} />
              </a>
              <a href="#" aria-label="Skype" className="bg-[#384250] text-white p-2 rounded-md hover:opacity-80 transition-opacity">
                <FaSkype size={18} />
              </a>
            </div>
          </div>
  
          <div className="md:w-1/6">
            <h4 className="font-bold text-lg mb-3 border-b-4 border-blue-500 inline-block pb-1">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Property", "Contract", "Blog Articles"].map((item) => (
                <li key={item} className="cursor-pointer hover:text-blue-600 font-semibold">
                  {item === "Home" ? <strong>{item}</strong> : item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/4">
            <h4 className="font-bold text-lg mb-3 border-b-4 border-blue-500 inline-block pb-1">
              Contract us
            </h4>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-center gap-2">
                <HiOutlineLocationMarker className="text-xl text-gray-700" />
                121 King St, Melbourne Australia
              </li>
              <li className="flex items-center gap-2 font-semibold">
                <BsTelephone className="text-lg" />
                +1 (500) 250-6969
              </li>
              <li className="flex items-center gap-2 font-semibold">
                <HiOutlineMail className="text-lg" />
                Support@SensorConnect.net
              </li>
            </ul>
          </div>
  
          <div className="md:w-1/4">
            <h4 className="font-bold text-lg mb-3 border-b-4 border-blue-500 inline-block pb-1">
              Newsletter
            </h4>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="border border-blue-400 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md py-2 font-semibold hover:bg-blue-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs mt-2 text-gray-700">We naver Span You!</p>
          </div>
        </div>
      </footer>
    );
  }
  
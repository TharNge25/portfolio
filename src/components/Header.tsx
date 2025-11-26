import { FaHome } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const handleChangeCategory = (link: string) => {
    navigate(link);
    if (showMenu) setShowMenu(false);
  };

  return (
    <div className="w-full border-b border-white rounded-b-lg flex flex-col gap-4 md:flex-row md:justify-between p-2 sm:px-10">
      <p className="text-lg font-semibold tracking-widest">
        DevelopedBy Thi Ha
      </p>

      <div
        className={`${
          showMenu ? "flex" : "hidden md:flex"
        } flex-col gap-2 md:flex-row`}
      >
        <button
          onClick={() => handleChangeCategory("/")}
          className="header-btn group relative inline-flex items-center gap-2 bg-[#4ADE80] hover:bg-[#3ecf72] text-black font-bold px-8 py-4 rounded shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] transition-all duration-300 "
        >
          <FaHome
            size={25}
            className="group-hover:translate-x-1 transition-transform"
          />
          Home
        </button>

        <button
          onClick={() => handleChangeCategory("/services")}
          className="header-btn group relative inline-flex items-center gap-2 bg-[#4ADE80] hover:bg-[#3ecf72] text-black font-bold px-8 py-4 rounded shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] transition-all duration-300"
        >
          <MdHomeRepairService
            size={25}
            className="group-hover:translate-x-1 transition-transform"
          />
          Services
        </button>

        <button
          onClick={() => handleChangeCategory("/projects")}
          className="header-btn group relative inline-flex items-center gap-2 bg-[#4ADE80] hover:bg-[#3ecf72] text-black font-bold px-8 py-4 rounded shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] transition-all duration-300"
        >
          <FaHome
            size={25}
            className="group-hover:translate-x-1 transition-transform"
          />
          Projects
        </button>

        <button
          onClick={() => handleChangeCategory("/certificates")}
          className="header-btn group relative inline-flex items-center gap-2 bg-[#4ADE80] hover:bg-[#3ecf72] text-black font-bold px-8 py-4 rounded shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] transition-all duration-300"
        >
          <MdHomeRepairService
            size={25}
            className="group-hover:translate-x-1 transition-transform"
          />
          Certificates
        </button>

        <button
          onClick={() => handleChangeCategory("/contact")}
          className="header-btn group relative inline-flex items-center gap-2 bg-[#4ADE80] hover:bg-[#3ecf72] text-black font-bold px-8 py-4 rounded shadow-[0_0_20px_rgba(74,222,128,0.4)] hover:shadow-[0_0_30px_rgba(74,222,128,0.6)] transition-all duration-300"
        >
          <MdHomeRepairService
            size={25}
            className="group-hover:translate-x-1 transition-transform"
          />
          Contact
        </button>
      </div>

      <div
        onClick={() => setShowMenu(!showMenu)}
        className="absolute top-2 right-2 sm:right-10 border border-white w-fit p-1 rounded-lg cursor-pointer md:hidden"
      >
        <IoMdMenu size={25} />
      </div>
    </div>
  );
}

export default Header;

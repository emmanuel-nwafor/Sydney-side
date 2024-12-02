import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

function Unisex() {
  return (
    <>
      <div id="shop"></div>
      <div className=" max-md:h-[20vh] ">
        {" "}
        <div className=" flex items-center justify-center h-[60px] rounded-md bg-white ">
          <Link to="/">
            <button className=" outline-none h-[60px] w-[180px] max-md:w-[105px] rounded-l-xl hover:bg-slate-600 hover:text-white transition-all transition-100 bg-slate-200 ">
              Men Wears
            </button>
          </Link>
          <Link to="/Women">
            <button className=" outline-none h-[60px] w-[180px] max-md:w-[105px]  hover:bg-slate-600 hover:text-white transition-all transition-100 bg-slate-200 ">
              Women Wears
            </button>
          </Link>
          <Link to="/MenWomen">
            <button className=" outline-none h-[60px] w-[180px] max-md:w-[105px] hover:bg-slate-600 hover:text-white transition-all transition-100 bg-slate-200 ">
              All
            </button>
          </Link>
          <Dropdown />
        </div>
      </div>
    </>
  );
}
export default Unisex;

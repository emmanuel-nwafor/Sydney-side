import { Link } from "react-router-dom";

function Aesthetic() {
  return (
    <>
      <div className=" max-md:h-[100vh] max-md:flex-col  m-0 flex items-center justify-center ">
        <div className=" flex justify-center items-center bg-cover bg-top bg-no-repeat bg-[url(/src/assets/img36.jpeg)] h-[30vh] w-[100%] ">
          <div className="">
            <h1 className=" font-bold text-[40px] text-slate-600 ">
              {" "}
              Men Wears
            </h1>
            <p className=" text-neutral-500  font-extralight ">
              Get your quality and aesthetic Men clothes o <br />
              Sydney Store
            </p>
          </div>
        </div>
        <div className=" flex justify-center items-center bg-cover bg-top bg-no-repeat bg-[url(/src/assets/img27.jpeg)] h-[30vh] w-[100%] ">
          <div className="">
            <h1 className=" font-bold text-[40px] text-slate-600 ">
              {" "}
              Women Wears
            </h1>
            <p className=" text-neutral-500  font-extralight ">
              Get your quality and aesthetic Women clothes <br />
              on Sydney Store
            </p>
          </div>
        </div>
      </div>
      <div className=" flex justify-center max-md:hidden ">
        <div className=" max-md:hidden flex justify-center items-center bg-cover bg-top bg-no-repeat bg-[url(/src/assets/img35.jpeg)] h-[30vh] w-[100%] ">
          <div className="">
            <h1 className=" font-bold text-[40px] text-slate-600 ">Unisex</h1>
            <p className=" text-neutral-500   font-extralight ">
              Get your quality and aesthetic Unisex clothe <br />
              on Sydney Store
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Aesthetic;

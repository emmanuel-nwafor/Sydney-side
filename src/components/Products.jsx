import { Link } from "react-router-dom";
import img9 from "/src/assets/img9.jpg";
import img7 from "/src/assets/img7.jpg";
import img6 from "/src/assets/img6.jpg";

function Products() {
  return (
    <>
      <div className=" max-md:h-[200vh] max-md:flex-col flex items-center justify-center h-[100vh] ">
        <div className=" flex-col items-center justify-center m-[10px] ">
          <h1 className=" md:hidden max-md:m-[20px] text-[30px] font-bold text-slate-500 ">
            Products
          </h1>
          <img
            src={img9}
            alt=""
            className=" h-[450px] w-[330px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
          />
          <div className=" ">
            <h2 className=" m-[13px] ">Vintage Shirt</h2>
          </div>
          <span className="flex m-[20px] items-start justify-start">
            {/* <b className=" m-1 ">$ 88.99</b> */}
            <b className=" line-through ">$ 80.99</b>
          </span>
        </div>
        <div className=" flex-col items-center justify-center m-[10px]">
          <img
            src={img6}
            alt=""
            className=" h-[450px] w-[330px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
          />
          <div className=" ">
            <h2 className=" m-[13px] ">Vintage Shirt</h2>
          </div>
          <span className="flex m-[20px] items-start justify-start">
            {/* <b className=" m-1 ">$ 88.99</b> */}
            <b className="  ">$ 80.99</b>
          </span>
        </div>
        <div className=" flex-col items-center justify-center m-[20px]">
          <img
            src={img7}
            alt=""
            className=" h-[450px] w-[330px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
          />
          <div className=" ">
            <h2 className=" m-[13px] ">Vintage Shirt</h2>
          </div>
          <span className="flex m-[20px] items-start justify-start">
            {/* <b className=" m-1 ">$ 88.99</b> */}
            <b className="  ">$ 80.99</b>
          </span>
        </div>
      </div>
    </>
  );
}

export default Products;

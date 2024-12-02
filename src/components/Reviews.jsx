import img26 from "/src/assets/img26.jpeg";
import img27 from "/src/assets/img27.jpeg";
import img57 from "/src/assets/img57.jpeg";

function Reviews() {
  return (
    <>
      <div className="flex-col">
        <h1 className=" m-[40px] text-center text-[25px] font-semibold ">
          What Our{" "}
          <span className=" bg-slate-600 p-[10px] rounded-lg text-white ">
            Customers
          </span>{" "}
          Says
        </h1>
        <div className=" md:flex ">
          <div className=" border-2 m-[25px] rounded-lg p-[30px] ">
            <div className=" flex items-center justify-evenly ">
              {" "}
              <div className="">
                {" "}
                <div className="h-[12px] w-[12px] rounded-full animate-ping bg-pink-500 "></div>
                <img
                  src={img26}
                  className=" h-[50px] w-[50px] rounded-full "
                  alt=""
                  srcset=""
                />
              </div>
              <div className="flex-col ">
                {" "}
                <h2 className=" text-[20px] font-semibold ">Brenda Brooker</h2>
                <p className=" text-[12px] text-pink-900 ">
                  Director of DDC.inc
                </p>
              </div>{" "}
            </div>
            <div className=" flex-col ">
              <p className=" p-[20px] text-center ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
                odit voluptates atque assumenda voluptatibus architecto error,
                animi nam nesciunt vero molestias quod! In at nesciunt et,
                molestias perferendis fugit enim!
              </p>
            </div>
          </div>

          <div className=" border-2 m-[25px] rounded-lg p-[30px] ">
            <div className=" flex items-center justify-evenly ">
              {" "}
              <div className="">
                {" "}
                <div className="h-[12px] w-[12px] rounded-full animate-ping bg-pink-500 "></div>
                <img
                  src={img27}
                  className=" h-[50px] w-[50px] rounded-full "
                  alt=""
                  srcset=""
                />
              </div>
              <div className="flex-col ">
                {" "}
                <h2 className=" text-[20px] font-semibold ">
                  Nathaniel Norman
                </h2>
                <p className=" text-[12px] text-pink-900 ">Manager of G&G</p>
              </div>{" "}
            </div>
            <div className=" flex-col ">
              <p className=" p-[20px] text-center ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
                odit voluptates atque assumenda voluptatibus architecto error,
                animi nam nesciunt vero molestias quod! In at nesciunt et,
                molestias perferendis fugit enim!
              </p>
            </div>
          </div>

          <div className=" border-2 m-[25px] rounded-lg p-[30px] ">
            <div className=" flex items-center justify-evenly ">
              {" "}
              <div className="">
                {" "}
                <div className="h-[12px] w-[12px] rounded-full animate-ping bg-pink-500 "></div>
                <img
                  src={img57}
                  className=" h-[50px] w-[50px] rounded-full "
                  alt=""
                  srcset=""
                />
              </div>
              <div className="flex-col ">
                {" "}
                <h2 className=" text-[20px] font-semibold ">Julie Augustine</h2>
                <p className=" text-[12px] text-pink-900 ">
                  Director of WarehouseInc.Plc
                </p>
              </div>{" "}
            </div>
            <div className=" flex-col ">
              <p className=" p-[20px] text-center ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse,
                odit voluptates atque assumenda voluptatibus architecto error,
                animi nam nesciunt vero molestias quod! In at nesciunt et,
                molestias perferendis fugit enim!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Reviews;

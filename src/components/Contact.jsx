import { useState } from "react";
import img58 from "/src/assets/img58.jpeg";

function Contact() {
  const [name, setName] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");

  function submitDetails() {
    e.preventDefault();
    alert("we'll get back to you");
  }

  return (
    <>
      <div id="contact"></div>
      <div className="flex max-md:flex-col items-center justify-center">
        <div className="">
          <img
            src={img58}
            alt="img58"
            srcset=""
            className=" max-md:h-[356px] md:h-[400px] m-[30px] "
          />
        </div>
        <form action="">
          <div className=" flex-col ">
            <h1 className=" m-3 text-[30px] text-slate-600 font-bold font-sans ">
              Contact
            </h1>
            <div className="flex">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                placeholder=" Your Name "
                className=" border-2 hover:bg-slate-200 outline-none m-2 max-md:w-[150px] max-md:h-[50px] rounded-md md:w-[260px] md:h-[50px] "
              />
              <input
                onChange={(e) => {
                  setName2(e.target.value);
                }}
                value={name2}
                type="text"
                placeholder=" example@gmail.com "
                className=" border-2 hover:bg-slate-200 outline-none m-2 max-md:w-[150px] max-md:h-[50px] rounded-md md:w-[260px] md:h-[50px] "
              />
            </div>{" "}
            <input
              onChange={(e) => {
                setName3(e.target.value);
              }}
              value={name3}
              type="text"
              placeholder=" Your Message "
              className=" border-2 hover:bg-slate-200 outline-none m-3 max-md:w-[310px] max-md:h-[100px] md:h-[150px] md:w-[530px] rounded-md "
            />
          </div>
          <button
            onClick={submitDetails}
            className=" m-3 bg-slate-500 pl-10 pr-10 pt-4 pb-4 rounded-md text-gray-300 hover:bg-slate-600 transition-all "
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Contact;

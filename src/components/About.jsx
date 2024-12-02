import img10 from "/src/assets/img10.jpg";

function About() {
  return (
    <>
      <div id="about"></div>
      <div className=" max-md:h-[130vh] max-md:flex-col max-md:m-[70px] m-[20px] flex items-center justify-evenly h-[100vh] ">
        <div className=" flex-col ">
          <h1 className="font-bold text-[30px] text-slate-500 ">About Us</h1>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur <br />
            adipisicing elit. Modi ullam repellendus placeat harum <br />
            laudantium nobis. Aperiam commodi natus est cumque! <br /> Dolor
            vero id ea at doloremque corrupti amet <br />
            veritatis? Quam.
          </p>
          <br />
          <button className=" focus:cursor-pointer max-md:w-[95px] h-[45px] w-[120px] bg-slate-300 rounded-md hover:bg-slate-600 hover:text-white ">
            Learn More
          </button>{" "}
        </div>
        <br />
        <div className=" flex-col items-center justify-center ">
          <img
            src={img10}
            alt=""
            className="  max-md:h-[340px] max-md:w-[340px] h-[410px] w-[330px] rounded-lg border-2 border-slate-300 border-opacity-100 "
          />
          <div className=" flex items-center justify-evenly "></div>
        </div>
      </div>
    </>
  );
}
export default About;

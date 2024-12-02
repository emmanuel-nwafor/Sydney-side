function Footer() {
  return (
    <>
      <div id="footer"></div>
      <div className="flex-col bg-slate-600">
        <div className=" max-md:flex-col flex items-center justify-evenly md:h-[70vh] max-md:h-[70vh] ">
          <div className="  ">
            <h1 className=" text-[40px] font-bold text-gray-100 ">SYDNEY</h1>
            <p className=" text-white font-mono text-[15px] ">
              Groups.Inc C.E.O
            </p>
            <hr className=" w-[400px] " />
            <div className=" mt-[10px] flex justify-start items-start ">
              <div className=" h-[10px] w-[10px] bg-gray-50 rounded-full animate-bounce "></div>
              <div className=" h-[10px] w-[10px] bg-gray-50 rounded-full animate-bounce "></div>
              <div className=" h-[10px] w-[10px] bg-gray-50 rounded-full animate-bounce "></div>
              <div className=" h-[10px] w-[10px] bg-gray-50 rounded-full animate-bounce "></div>
              <div className=" h-[10px] w-[10px] bg-gray-50 rounded-full animate-bounce "></div>
              <div className=" h-[10px] w-[10px] bg-gray-50 rounded-full animate-bounce "></div>
            </div>
          </div>
          <div className="flex justify-between">
            {" "}
            <div className=" m-[30px] ">
              <h1 className=" text-[20px] font-bold text-white ">
                Quick Links
              </h1>
              <p className=" text-gray-400  hover:text-gray-100 hover:underline cursor-pointer">
                Twitter
              </p>
              <p className=" text-gray-400  hover:text-gray-100 hover:underline cursor-pointer">
                Facebook
              </p>
              <p className=" text-gray-400  hover:text-gray-100 hover:underline cursor-pointer">
                Instagram
              </p>
              <p className=" text-gray-400  hover:text-gray-100 hover:underline cursor-pointer">
                Youtube
              </p>
              <p className=" text-gray-400  hover:text-gray-100 hover:underline cursor-pointer">
                Whatsapp
              </p>
            </div>
            <div className=" m-[30px] ">
              <p className=" text-[20px] font-bold text-white ">Faqs</p>
              <p className=" text-gray-400  hover:text-gray-100 hover:underline cursor-pointer">
                <a href="#shop">Our Store</a>
              </p>
              <p className=" text-gray-400  hover:text-gray-100 hover:underline cursor-pointer">
                <a href="#contact">Contact</a>
              </p>
              <p className=" text-gray-400  hover:text-gray-100 hover:underline cursor-pointer">
                Faq
              </p>
            </div>
            <div className="m-[30px]">
              {" "}
              <h1 className=" text-[20px] font-bold text-white ">Partners</h1>
              <p className=" text-gray-400  hover:text-gray-100 hover:underline cursor-pointer">
                <a href="">Space X</a>
              </p>
              <p className=" text-gray-400  hover:text-gray-100 hover:underline cursor-pointer">
                <a href="">Ebay</a>
              </p>
              <p className=" text-gray-400  hover:text-gray-100 hover:underline cursor-pointer">
                Amazon
              </p>
            </div>
          </div>
        </div>
        <p className=" text-center text-gray-300 text-[13px] font-mono ">
          &copy; emmanuel nwafor
        </p>
      </div>
    </>
  );
}
export default Footer;

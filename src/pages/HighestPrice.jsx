// import { Link } from "react-router-dom";
import img34 from "/src/assets/img34.jpeg";
import img19 from "/src/assets/img19.jpeg";
import img33 from "/src/assets/img33.jpeg";

import img51 from "/src/assets/img51.jpeg";
import img50 from "/src/assets/img50.jpeg";
import img49 from "/src/assets/img49.jpeg";

import img46 from "/src/assets/img46.jpeg";
import img47 from "/src/assets/img47.jpeg";
import img48 from "/src/assets/img48.jpeg";

import img45 from "/src/assets/img45.jpeg";
import img44 from "/src/assets/img44.jpeg";
import img42 from "/src/assets/img42.jpeg";

function HeighestPrice() {
  return (
    <>
      <h1 className=" text-center font-semibold text-[30px] text-slate-400 max-md:m-[14px] md:m-[40px] ">
        Highest to Lowest
      </h1>
      <div className=" flex-col max-md:h-[970vh] max-md:flex-col flex items-center justify-center h-[325vh] ">
        {" "}
        <div className=" flex max-md:flex-col ">
          <div className=" flex-col items-center justify-center m-[10px] ">
            <img
              src={img46}
              alt=""
              className=" h-[400px] w-[310px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
            />
            <div className=" ">
              <h2 className=" m-[13px] ">Classic Olive green Shirt</h2>
            </div>
            <span className="flex m-[20px] items-center justify-between">
              <span className=" ">
                <b className=" line-through ">$ 60.99</b>
                <b className="  ">$ 200.99</b>
              </span>
              <button>
                <img
                  className=" border-2 hover:shadow-md h-[30px] w-[30px] rounded-full "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEUlEQVRIS91UixHBQBRMKkAH6QAVKAEViAroQFSAClABOlACFSgBFbBrXOZCLu9dJpkxbmZnMneb3ff2PmFQ8whr1g/+y+BRYVwnaHWpZ0dUpcEd2s1PA9PAEh8TYAvEnl1NwV/Y/+ZtcgTCBbgBLU+DI/g9YAxsXB1wnhm2baLCiJFc3zwWxgKdx9S0egBnoBAnhbwdcAY65h/XPcitRjBiJCNgDiSSAdf3QF9ZvU3j8WTEr1F0k2Osrz0NVuAz3nRITwU3qgFkqvIxlQxMroxr6COsiYicCOCd0I6vgqUOKMzjlwC8F9IoZSCJFq5rOqAAO5gBmTNeMJ+aag3sl9b1AudqaQ1q76D0Pmg7+F2DJ1/iLBlLsaIQAAAAAElFTkSuQmCC"
                />
              </button>
            </span>
          </div>
          <div className=" flex-col items-center justify-center m-[10px]">
            <img
              src={img47}
              alt=""
              className=" h-[400px] w-[310px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
            />
            <div className=" ">
              <h2 className=" m-[13px] ">White T-Shirt</h2>
            </div>
            <span className="flex m-[20px] items-center justify-between">
              <span className=" ">
                <b className=" line-through ">$ 50.00</b>
                <b className="  ">$ 69.99</b>
              </span>
              <button>
                <img
                  className=" border-2 hover:shadow-md h-[30px] w-[30px] rounded-full "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEUlEQVRIS91UixHBQBRMKkAH6QAVKAEViAroQFSAClABOlACFSgBFbBrXOZCLu9dJpkxbmZnMneb3ff2PmFQ8whr1g/+y+BRYVwnaHWpZ0dUpcEd2s1PA9PAEh8TYAvEnl1NwV/Y/+ZtcgTCBbgBLU+DI/g9YAxsXB1wnhm2baLCiJFc3zwWxgKdx9S0egBnoBAnhbwdcAY65h/XPcitRjBiJCNgDiSSAdf3QF9ZvU3j8WTEr1F0k2Osrz0NVuAz3nRITwU3qgFkqvIxlQxMroxr6COsiYicCOCd0I6vgqUOKMzjlwC8F9IoZSCJFq5rOqAAO5gBmTNeMJ+aag3sl9b1AudqaQ1q76D0Pmg7+F2DJ1/iLBlLsaIQAAAAAElFTkSuQmCC"
                />
              </button>
            </span>
          </div>
          <div className=" flex-col items-center justify-center m-[20px]">
            <img
              src={img48}
              alt=""
              className=" h-[400px] w-[310px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
            />
            <div className=" ">
              <h2 className=" m-[13px] ">Sky Blue Vintage T-Shirt</h2>
            </div>
            <span className="flex m-[20px] items-center justify-between">
              <span className=" ">
                <b className=" line-through ">$ 35.99</b>
                <b className="  ">$ 45.99</b>
              </span>
              <button>
                <img
                  className=" border-2 hover:shadow-md h-[30px] w-[30px] rounded-full "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEUlEQVRIS91UixHBQBRMKkAH6QAVKAEViAroQFSAClABOlACFSgBFbBrXOZCLu9dJpkxbmZnMneb3ff2PmFQ8whr1g/+y+BRYVwnaHWpZ0dUpcEd2s1PA9PAEh8TYAvEnl1NwV/Y/+ZtcgTCBbgBLU+DI/g9YAxsXB1wnhm2baLCiJFc3zwWxgKdx9S0egBnoBAnhbwdcAY65h/XPcitRjBiJCNgDiSSAdf3QF9ZvU3j8WTEr1F0k2Osrz0NVuAz3nRITwU3qgFkqvIxlQxMroxr6COsiYicCOCd0I6vgqUOKMzjlwC8F9IoZSCJFq5rOqAAO5gBmTNeMJ+aag3sl9b1AudqaQ1q76D0Pmg7+F2DJ1/iLBlLsaIQAAAAAElFTkSuQmCC"
                />
              </button>
            </span>
          </div>
          {/* THREE DIVS WOULD BE INSIDE */}
        </div>{" "}
        <div className=" flex max-md:flex-col ">
          <div className=" flex-col items-center justify-center m-[10px] ">
            <img
              src={img45}
              alt=""
              className=" h-[400px] w-[310px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
            />
            <div className=" ">
              <h2 className=" m-[13px] ">Brown Polo</h2>
            </div>
            <span className="flex m-[20px] items-center justify-between">
              <span className=" ">
                <b className=" line-through ">$ 40.99</b>
                <b className="  ">$ 60.99</b>
              </span>
              <button>
                <img
                  className=" border-2 hover:shadow-md h-[30px] w-[30px] rounded-full "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEUlEQVRIS91UixHBQBRMKkAH6QAVKAEViAroQFSAClABOlACFSgBFbBrXOZCLu9dJpkxbmZnMneb3ff2PmFQ8whr1g/+y+BRYVwnaHWpZ0dUpcEd2s1PA9PAEh8TYAvEnl1NwV/Y/+ZtcgTCBbgBLU+DI/g9YAxsXB1wnhm2baLCiJFc3zwWxgKdx9S0egBnoBAnhbwdcAY65h/XPcitRjBiJCNgDiSSAdf3QF9ZvU3j8WTEr1F0k2Osrz0NVuAz3nRITwU3qgFkqvIxlQxMroxr6COsiYicCOCd0I6vgqUOKMzjlwC8F9IoZSCJFq5rOqAAO5gBmTNeMJ+aag3sl9b1AudqaQ1q76D0Pmg7+F2DJ1/iLBlLsaIQAAAAAElFTkSuQmCC"
                />
              </button>
            </span>
          </div>
          <div className=" flex-col items-center justify-center m-[10px]">
            <img
              src={img44}
              alt=""
              className=" h-[400px] w-[310px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
            />
            <div className=" ">
              <h2 className=" m-[13px] ">White T-Shirt</h2>
            </div>
            <span className="flex m-[20px] items-center justify-between">
              <span className=" ">
                <b className=" line-through ">$ 20.99</b>
                <b className="  ">$ 100.99</b>
              </span>
              <button>
                <img
                  className=" border-2 hover:shadow-md h-[30px] w-[30px] rounded-full "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEUlEQVRIS91UixHBQBRMKkAH6QAVKAEViAroQFSAClABOlACFSgBFbBrXOZCLu9dJpkxbmZnMneb3ff2PmFQ8whr1g/+y+BRYVwnaHWpZ0dUpcEd2s1PA9PAEh8TYAvEnl1NwV/Y/+ZtcgTCBbgBLU+DI/g9YAxsXB1wnhm2baLCiJFc3zwWxgKdx9S0egBnoBAnhbwdcAY65h/XPcitRjBiJCNgDiSSAdf3QF9ZvU3j8WTEr1F0k2Osrz0NVuAz3nRITwU3qgFkqvIxlQxMroxr6COsiYicCOCd0I6vgqUOKMzjlwC8F9IoZSCJFq5rOqAAO5gBmTNeMJ+aag3sl9b1AudqaQ1q76D0Pmg7+F2DJ1/iLBlLsaIQAAAAAElFTkSuQmCC"
                />
              </button>
            </span>
          </div>
          <div className=" flex-col items-center justify-center m-[20px]">
            <img
              src={img42}
              alt=""
              className=" h-[400px] w-[310px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
            />
            <div className=" ">
              <h2 className=" m-[13px] ">Sky Blue Vintage T-Shirt</h2>
            </div>
            <span className="flex m-[20px] items-center justify-between">
              <span className=" ">
                <b className=" line-through ">$ 10.99</b>
                <b className="  ">$ 120.99</b>
              </span>
              <button>
                <img
                  className=" border-2 hover:shadow-md h-[30px] w-[30px] rounded-full "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEUlEQVRIS91UixHBQBRMKkAH6QAVKAEViAroQFSAClABOlACFSgBFbBrXOZCLu9dJpkxbmZnMneb3ff2PmFQ8whr1g/+y+BRYVwnaHWpZ0dUpcEd2s1PA9PAEh8TYAvEnl1NwV/Y/+ZtcgTCBbgBLU+DI/g9YAxsXB1wnhm2baLCiJFc3zwWxgKdx9S0egBnoBAnhbwdcAY65h/XPcitRjBiJCNgDiSSAdf3QF9ZvU3j8WTEr1F0k2Osrz0NVuAz3nRITwU3qgFkqvIxlQxMroxr6COsiYicCOCd0I6vgqUOKMzjlwC8F9IoZSCJFq5rOqAAO5gBmTNeMJ+aag3sl9b1AudqaQ1q76D0Pmg7+F2DJ1/iLBlLsaIQAAAAAElFTkSuQmCC"
                />
              </button>
            </span>
          </div>
        </div>{" "}
        <div className=" flex max-md:flex-col ">
          <div className=" flex-col items-center justify-center m-[10px] ">
            <img
              src={img19}
              alt=""
              className=" h-[400px] w-[310px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
            />
            <div className=" ">
              <h2 className=" m-[13px] ">Brown Polo</h2>
            </div>
            <span className="flex m-[20px] items-center justify-between">
              <span className=" ">
                <b className=" line-through ">$ 6.99</b>
                <b className="  ">$ 4.99</b>
              </span>
              <button>
                <img
                  className=" border-2 hover:shadow-md h-[30px] w-[30px] rounded-full "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEUlEQVRIS91UixHBQBRMKkAH6QAVKAEViAroQFSAClABOlACFSgBFbBrXOZCLu9dJpkxbmZnMneb3ff2PmFQ8whr1g/+y+BRYVwnaHWpZ0dUpcEd2s1PA9PAEh8TYAvEnl1NwV/Y/+ZtcgTCBbgBLU+DI/g9YAxsXB1wnhm2baLCiJFc3zwWxgKdx9S0egBnoBAnhbwdcAY65h/XPcitRjBiJCNgDiSSAdf3QF9ZvU3j8WTEr1F0k2Osrz0NVuAz3nRITwU3qgFkqvIxlQxMroxr6COsiYicCOCd0I6vgqUOKMzjlwC8F9IoZSCJFq5rOqAAO5gBmTNeMJ+aag3sl9b1AudqaQ1q76D0Pmg7+F2DJ1/iLBlLsaIQAAAAAElFTkSuQmCC"
                />
              </button>
            </span>
          </div>
          <div className=" flex-col items-center justify-center m-[10px]">
            <img
              src={img34}
              alt=""
              className=" h-[400px] w-[310px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
            />
            <div className=" ">
              <h2 className=" m-[13px] ">White T-Shirt</h2>
            </div>
            <span className="flex m-[20px] items-center justify-between">
              <span className=" ">
                <b className=" line-through ">$ 10.89</b>
                <b className="  ">$ 10.99</b>
              </span>
              <button>
                <img
                  className=" border-2 hover:shadow-md h-[30px] w-[30px] rounded-full "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEUlEQVRIS91UixHBQBRMKkAH6QAVKAEViAroQFSAClABOlACFSgBFbBrXOZCLu9dJpkxbmZnMneb3ff2PmFQ8whr1g/+y+BRYVwnaHWpZ0dUpcEd2s1PA9PAEh8TYAvEnl1NwV/Y/+ZtcgTCBbgBLU+DI/g9YAxsXB1wnhm2baLCiJFc3zwWxgKdx9S0egBnoBAnhbwdcAY65h/XPcitRjBiJCNgDiSSAdf3QF9ZvU3j8WTEr1F0k2Osrz0NVuAz3nRITwU3qgFkqvIxlQxMroxr6COsiYicCOCd0I6vgqUOKMzjlwC8F9IoZSCJFq5rOqAAO5gBmTNeMJ+aag3sl9b1AudqaQ1q76D0Pmg7+F2DJ1/iLBlLsaIQAAAAAElFTkSuQmCC"
                />
              </button>
            </span>
          </div>
          <div className=" flex-col items-center justify-center m-[20px]">
            <img
              src={img33}
              alt=""
              className=" h-[400px] w-[310px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
            />
            <div className=" ">
              <h2 className=" m-[13px] ">Sky Blue Vintage T-Shirt</h2>
            </div>
            <span className="flex m-[20px] items-center justify-between">
              <span className=" ">
                <b className=" line-through ">$ 15.99</b>
                <b className="  ">$ 15.99</b>
              </span>
              <button>
                <img
                  className=" border-2 hover:shadow-md h-[30px] w-[30px] rounded-full "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEUlEQVRIS91UixHBQBRMKkAH6QAVKAEViAroQFSAClABOlACFSgBFbBrXOZCLu9dJpkxbmZnMneb3ff2PmFQ8whr1g/+y+BRYVwnaHWpZ0dUpcEd2s1PA9PAEh8TYAvEnl1NwV/Y/+ZtcgTCBbgBLU+DI/g9YAxsXB1wnhm2baLCiJFc3zwWxgKdx9S0egBnoBAnhbwdcAY65h/XPcitRjBiJCNgDiSSAdf3QF9ZvU3j8WTEr1F0k2Osrz0NVuAz3nRITwU3qgFkqvIxlQxMroxr6COsiYicCOCd0I6vgqUOKMzjlwC8F9IoZSCJFq5rOqAAO5gBmTNeMJ+aag3sl9b1AudqaQ1q76D0Pmg7+F2DJ1/iLBlLsaIQAAAAAElFTkSuQmCC"
                />
              </button>
            </span>
          </div>
        </div>{" "}
        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className=" flex max-md:flex-col ">
          <div className=" flex-col items-center justify-center m-[10px] ">
            <img
              src={img49}
              alt=""
              className=" h-[400px] w-[310px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
            />
            <div className=" ">
              <h2 className=" m-[13px] ">Brown Polo</h2>
            </div>
            <span className="flex m-[20px] items-center justify-between">
              <span className=" ">
                <b className=" line-through ">$ 20.99</b>
                <b className="  ">$ 19.99</b>
              </span>
              <button>
                <img
                  className=" border-2 hover:shadow-md h-[30px] w-[30px] rounded-full "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEUlEQVRIS91UixHBQBRMKkAH6QAVKAEViAroQFSAClABOlACFSgBFbBrXOZCLu9dJpkxbmZnMneb3ff2PmFQ8whr1g/+y+BRYVwnaHWpZ0dUpcEd2s1PA9PAEh8TYAvEnl1NwV/Y/+ZtcgTCBbgBLU+DI/g9YAxsXB1wnhm2baLCiJFc3zwWxgKdx9S0egBnoBAnhbwdcAY65h/XPcitRjBiJCNgDiSSAdf3QF9ZvU3j8WTEr1F0k2Osrz0NVuAz3nRITwU3qgFkqvIxlQxMroxr6COsiYicCOCd0I6vgqUOKMzjlwC8F9IoZSCJFq5rOqAAO5gBmTNeMJ+aag3sl9b1AudqaQ1q76D0Pmg7+F2DJ1/iLBlLsaIQAAAAAElFTkSuQmCC"
                />
              </button>
            </span>
          </div>
          <div className=" flex-col items-center justify-center m-[10px]">
            <img
              src={img50}
              alt=""
              className=" h-[400px] w-[310px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
            />
            <div className=" ">
              <h2 className=" m-[13px] ">White T-Shirt</h2>
            </div>
            <span className="flex m-[20px] items-center justify-between">
              <span className=" ">
                <b className=" line-through ">$ 20.99</b>
                <b className="  ">$ 30.99</b>
              </span>
              <button>
                <img
                  className=" border-2 hover:shadow-md h-[30px] w-[30px] rounded-full "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEUlEQVRIS91UixHBQBRMKkAH6QAVKAEViAroQFSAClABOlACFSgBFbBrXOZCLu9dJpkxbmZnMneb3ff2PmFQ8whr1g/+y+BRYVwnaHWpZ0dUpcEd2s1PA9PAEh8TYAvEnl1NwV/Y/+ZtcgTCBbgBLU+DI/g9YAxsXB1wnhm2baLCiJFc3zwWxgKdx9S0egBnoBAnhbwdcAY65h/XPcitRjBiJCNgDiSSAdf3QF9ZvU3j8WTEr1F0k2Osrz0NVuAz3nRITwU3qgFkqvIxlQxMroxr6COsiYicCOCd0I6vgqUOKMzjlwC8F9IoZSCJFq5rOqAAO5gBmTNeMJ+aag3sl9b1AudqaQ1q76D0Pmg7+F2DJ1/iLBlLsaIQAAAAAElFTkSuQmCC"
                />
              </button>
            </span>
          </div>
          <div className=" flex-col items-center justify-center m-[20px]">
            <img
              src={img51}
              alt=""
              className=" h-[400px] w-[310px] m-[10px] max-md:h-[350px] max-md:w-[250px] "
            />
            <div className=" ">
              <h2 className=" m-[13px] ">Sky Blue Vintage T-Shirt</h2>
            </div>
            <span className="flex m-[20px] items-center justify-between">
              <span className=" ">
                <b className=" line-through ">$ 70.99</b>
                <b className="  ">$ 45.99</b>
              </span>
              <button>
                <img
                  className=" border-2 hover:shadow-md h-[30px] w-[30px] rounded-full "
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEUlEQVRIS91UixHBQBRMKkAH6QAVKAEViAroQFSAClABOlACFSgBFbBrXOZCLu9dJpkxbmZnMneb3ff2PmFQ8whr1g/+y+BRYVwnaHWpZ0dUpcEd2s1PA9PAEh8TYAvEnl1NwV/Y/+ZtcgTCBbgBLU+DI/g9YAxsXB1wnhm2baLCiJFc3zwWxgKdx9S0egBnoBAnhbwdcAY65h/XPcitRjBiJCNgDiSSAdf3QF9ZvU3j8WTEr1F0k2Osrz0NVuAz3nRITwU3qgFkqvIxlQxMroxr6COsiYicCOCd0I6vgqUOKMzjlwC8F9IoZSCJFq5rOqAAO5gBmTNeMJ+aag3sl9b1AudqaQ1q76D0Pmg7+F2DJ1/iLBlLsaIQAAAAAElFTkSuQmCC"
                />
              </button>
            </span>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
export default HeighestPrice;
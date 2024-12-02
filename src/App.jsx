// BROWSER ROUTES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Nav from "/src/components/Nav";
import Landing from "/src/components/Landing";
import Products from "/src/components/Products";
import About from "/src/components/About";
import Unisex from "/src/components/Unisex";
import Delivery from "/src/components/Delivery";
import Men from "/src/pages/Men";
import Women from "/src/pages/Women";
import MenWomen from "/src/pages/MenWomen";
import Aesthetic from "/src/pages/Aesthetic";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Quality from "./pages/Quality";
import Arrivals from "./pages/Arrivals";
import LowestPrice from "./pages/LowestPrice";
import HighestPrice from "./pages/HighestPrice";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  const [cart, setCart] = useState(false);
  const toggleCart = () => setCart(!cart);

  const [error, setError] = useState(false);
  // const toggleError = () => setError(!cart);

  function closecart() {
    setCart(true);
  }
  if (cart == false) {
    return (
      <>
        {" "}
        <Delivery />
        <Router>
          <button
            onClick={closecart}
            className=" border-2 p-[10px] rounded-full fixed m-[50px] z-10 bg-[#3a3a3a91]"
          >
            {" "}
            <button>
              <img
                className="  "
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEUlEQVRIS91UixHBQBRMKkAH6QAVKAEViAroQFSAClABOlACFSgBFbBrXOZCLu9dJpkxbmZnMneb3ff2PmFQ8whr1g/+y+BRYVwnaHWpZ0dUpcEd2s1PA9PAEh8TYAvEnl1NwV/Y/+ZtcgTCBbgBLU+DI/g9YAxsXB1wnhm2baLCiJFc3zwWxgKdx9S0egBnoBAnhbwdcAY65h/XPcitRjBiJCNgDiSSAdf3QF9ZvU3j8WTEr1F0k2Osrz0NVuAz3nRITwU3qgFkqvIxlQxMroxr6COsiYicCOCd0I6vgqUOKMzjlwC8F9IoZSCJFq5rOqAAO5gBmTNeMJ+aag3sl9b1AudqaQ1q76D0Pmg7+F2DJ1/iLBlLsaIQAAAAAElFTkSuQmCC"
              />
              <span className=" bg-black absolute rounded-full p-[3px] text-white translate-y-[-9px] ">
                0
              </span>
            </button>
          </button>
          <Cart />
          <Routes>
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </Router>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        {" "}
        <Delivery />
        <Router>
          <Nav />
          <button
            onClick={toggleCart}
            className=" border-2 p-[10px] rounded-full fixed m-[50px] z-10 bg-[#3a3a3a54]"
          >
            {" "}
            <button>
              <img
                className="  "
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABEUlEQVRIS91UixHBQBRMKkAH6QAVKAEViAroQFSAClABOlACFSgBFbBrXOZCLu9dJpkxbmZnMneb3ff2PmFQ8whr1g/+y+BRYVwnaHWpZ0dUpcEd2s1PA9PAEh8TYAvEnl1NwV/Y/+ZtcgTCBbgBLU+DI/g9YAxsXB1wnhm2baLCiJFc3zwWxgKdx9S0egBnoBAnhbwdcAY65h/XPcitRjBiJCNgDiSSAdf3QF9ZvU3j8WTEr1F0k2Osrz0NVuAz3nRITwU3qgFkqvIxlQxMroxr6COsiYicCOCd0I6vgqUOKMzjlwC8F9IoZSCJFq5rOqAAO5gBmTNeMJ+aag3sl9b1AudqaQ1q76D0Pmg7+F2DJ1/iLBlLsaIQAAAAAElFTkSuQmCC"
              />
              <span className=" bg-black absolute rounded-full p-[3px] text-white translate-y-[-9px] ">
                0
              </span>
            </button>
          </button>
          <Landing />
          <Products />
          <About />
          <Unisex />
          <Routes>
            <Route path="/" element={<Men />} />
            <Route path="/Women" element={<Women />} />
            <Route path="/MenWomen" element={<MenWomen />} />
            <Route path="/LowestPrice" element={<LowestPrice />} />
            <Route path="/HighestPrice" element={<HighestPrice />} />
            <Route path="/Quality" element={<Quality />} />
            <Route path="/Arrivals" element={<Arrivals />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </Router>
        <Aesthetic />
        <Reviews />
        <Contact />
        <Footer />
      </>
    );
  }
}
export default App;

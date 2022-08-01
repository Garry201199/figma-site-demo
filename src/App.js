import Budget from "./Comp/Budget";
import Clients from "./Comp/Clients";
import ConsultingComp from "./Comp/ConsultingComp";
import Hero from "./Comp/Hero";
import NavBar from "./Comp/NavBar";
import OurCompany from "./Comp/OurCompany";
import OurServices from "./Comp/OurServices";
import "./styles.css";

export default function App() {
  return (
    <div className="relative font-pop  h-full text-slate-500">
      <NavBar />
      <Hero />
      <OurCompany />
      <OurServices />
      <ConsultingComp />
      <Clients />
      <Budget />

      <svg
        className="absolute top-0 w-full h-fit  object-cover -z-30"
        id="visual"
        viewBox="0 0 900 600"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <rect x="0" y="0" width="900" height="600" fill="#e9c6ff"></rect>
        <g transform="translate(530.267732147986 359.7372878608735)">
          <path
            d="M282.6 -310.3C345.1 -220.1 360.1 -110.1 354.4 -5.7C348.8 98.8 322.5 197.5 260 262.9C197.5 328.2 98.8 360.1 -1.1 361.2C-100.9 362.2 -201.8 332.4 -301.8 267.1C-401.8 201.8 -500.9 100.9 -514.4 -13.6C-528 -128 -456 -256 -356 -346.1C-256 -436.3 -128 -488.7 -9 -479.7C110.1 -470.7 220.1 -400.5 282.6 -310.3"
            fill="#ffffff"
          ></path>
        </g>
      </svg>
    </div>
  );
}

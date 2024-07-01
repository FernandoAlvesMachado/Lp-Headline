import Button from "./components/Button";
import Carrossel from "./components/Carrossel";
import Footer from "./components/Footer";
import ScrollPage from "./components/ScrollSecction";
import SecctionEspecialistas from "./components/SecctionEspecialistas";
import SegundaDobra from "./components/SegundaDobra";
import StepsSecction from "./components/StepsSecction";
import WhatWeDo from "./components/WhatWeDo";
import WorkWithUs from "./components/WorkWithUs";
import PrimeiraDobra from "./components/firstPage";

export default function Home() {
  return (
    <div className=" overflow-x-hidden">
      <div className="noise"></div>
      <div className="relative h-screen flex overflow-hidden">
        <div className="absolute w-full p-6 items-center justify-center mt-40 md:mt-72  flex flex-col text-center text-white z-50 inset-0 ">
          <h1 className="max-w-4xl text-2xl md:text-3xl text-focus-in">Nós transformamos experts desconhecidos em verdadeiras celebridades - enquanto vendem milhões!</h1>
          <p className="md:text-xl text-lg mt-2 text-focus-in-demorado">Você pode ser o próximo…</p>
          <Button nameButton={"Bora escalar?"} link={"#"} />
        </div>
        <div className="-top-60 absolute inset-0">
          <PrimeiraDobra />
        </div>
      </div>
      <div className="relative ">
        <ScrollPage />
      </div>
      <div className="relative my-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center text-white">Aqui temos o time mais completo.</h1>
        <Carrossel />
      </div>
      <div className="relative w-full flex items-center justify-center">
        <SegundaDobra />
      </div>
      <div>
        <WhatWeDo />
      </div>
      <div className=" flex items-center justify-center">
        <StepsSecction />
      </div>
      <div className=" flex items-center justify-center">
        <SecctionEspecialistas />
      </div>
      <div className=" flex items-center justify-center">
        <WorkWithUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

import Button from "./components/Button";
import Carrossel from "./components/Carrossel";
import Especialistas from "./components/Especialistas";
import ScrollPage from "./components/ScrollSecction";
import SecctionAbout from "./components/SecctionAbout";
import SecctionEspecialistas from "./components/SecctionEspecialistas";
import SegundaDobra from "./components/SegundaDobra";
import StepsSecction from "./components/StepsSecction";
import PrimeiraDobra from "./components/firstPage";

export default function Home() {
  return (
    <div className="">
      <div className="noise"></div>
      <div className="relative h-screen flex overflow-hidden">
        <div className="absolute w-full items-center justify-center mt-72 z-50 flex flex-col text-center text-white z-20 inset-0 ">
          <h1 className="max-w-4xl text-xl md:text-3xl text-focus-in">Nós transformamos experts desconhecidos em verdadeiras celebridades - enquanto vendem milhões!</h1>
          <p className="md:text-xl text-lg mt-2 text-focus-in-demorado">Você pode ser o próximo…</p>
          <Button nameButton={"Bora escalar?"} link={"https://wa.me/5567998128389"} />
        </div>
        <div className="-top-60 absolute inset-0">
          <PrimeiraDobra />
        </div>
      </div>
      <div className="relative ">
        <ScrollPage />
      </div>
      <div className="relative ">
        <Carrossel />
      </div>
      <div className="relative">
        <SegundaDobra />
      </div>
      <div className="relative  z-30">
        <SecctionAbout />
      </div>
      <div className="">
        <StepsSecction />
      </div>
      <div className="">
        <SecctionEspecialistas/>
      </div>

    </div>
  );
}

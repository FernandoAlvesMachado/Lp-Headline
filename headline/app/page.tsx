import Button from "./components/Button";
import PrimeiraDobra from "./components/firstPage";


export default function Home() {
  return (
    <div className="bg-blue-500">
      <div className="absolute inset-0 -top-52">
        <div className="absolute w-full items-center justify-center flex flex-col text-center text-white z-20 inset-0 top-1/3">
          <h1 className="max-w-4xl text-xl md:text-3xl">Nós transformamos experts desconhecidos em verdadeiras celebridades -  enquanto vendem milhões!</h1>
         <p className="md:text-xl text-lg mt-2">Você pode ser o próximo…</p>
          <Button nameButton={"Bora escalar?"} link={"https://wa.me/5567998128389"}/>
        </div>
        <PrimeiraDobra />
      </div>
    </div>
  );
}

import Especialistas from "./Especialistas";

export default function SecctionEspecialistas() {
    return (
        <div className="flex mt-24 items-center justify-center  w-full">
            <div className="flex items-center justify-center  max-w-5xl">
                <div className="flex items-center justify-center">
                    <div className="text-white text-4xl font-bold">
                        Alguns dos nossos cases de sucesso…
                    </div>
                    <Especialistas />
                </div>
            </div>



        </div>
    );
}
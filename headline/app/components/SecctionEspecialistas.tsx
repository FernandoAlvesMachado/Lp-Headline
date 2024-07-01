import Especialistas from "./Especialistas";

export default function SecctionEspecialistas() {
    return (
        <div className="flex mt-12 md:mt-24 items-center justify-center w-full">
            <div className="flex flex-wrap items-center justify-center ">
                <div className="flex flex-wrap p-4 md:p-6 w-full gap-5 items-center justify-center">
                    <div className="text-white px-4 md:px-6 text-center w-full text-4xl md:text-4xl font-bold">
                        Alguns dos nossos cases de sucesso…
                    </div>
                    <Especialistas />
                </div>
            </div>
        </div>
    );
}

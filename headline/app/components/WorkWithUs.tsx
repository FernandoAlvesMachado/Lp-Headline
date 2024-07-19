export default function WorkWithUs() {
    return (
        <div className="flex mt-24 items-center justify-center  w-full">
            <div className="flex items-center justify-center  max-w-6xl">
                <div className="flex items-center p-6 justify-center gap-5 flex-col">
                    <h1 className="text-3xl text-center w-full font-bold text-white ">
                    Quero trabalhar com a gente?
                    </h1>
                    <div className="flex gap-12 flex-wrap md:flex-nowrap  w-full ">
                        <div className="w-full p-6  border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700">
                            <a href="#">
                                <h5 className="mb-2 w-full  text-center md:text-start text-2xl font-bold tracking-tight text-gray-900 text-white">É expert e quer ser lançado por nós?</h5>
                            </a>
                            <a href="https://www.agenciaheadline.com.br/vagas-aplicacao" className="inline-flex my-3 px-3 py-2  items-center w-full text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                CLIQUE AQUI
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                        <div className="w-full p-6  border justify-between flex flex-col border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700">
                            <a href="#">
                                <h5 className="w-full mb-2 text-center md:text-start text-2xl font-bold tracking-tight text-gray-900 text-white">Quer entrar para o nosso time?</h5>
                            </a>
                            <a href="https://www.agenciaheadline.com.br/vagas-aplicacao" className="inline-flex my-3  px-3 py-2 items-center w-full  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                                CLIQUE AQUI
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
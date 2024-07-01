export default function WhatWeDo() {
    return (
        <div>
            <section>
                <div className="bg- z-10 text-white py-8">
                    <div className="container mx-auto flex flex-col md:items-start items-center md:flex-row my-12 md:my-24">
                        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
                            <p className=" text-white bg-blue-600 px-2 py-1 rounded uppercase tracking-loose text-center md:text-start">Aqui na Agência HeadLine</p>
                            <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2 text-center md:text-start">Cada expert é visto como um hub de negócios.</p>
                            <p className="text-sm md:text-base text-gray-50 mb-4 text-center md:text-start">
                                Baseado nas oportunidades que cada expert traz consigo, novos negócios são desenvolvidos ao redor dele.
                            </p>
                            <a href="#"
                                className="bg-transparent transition-all mr-auto hover:bg-blue-700 text-white text-center md:text-start hover:text-white rounded-lg shadow hover:shadow-lg py-2 px-4 border border-blue-700 hover:border-transparent">
                                Alguns dos negócios que já nasceram dos nossos experts:

                            </a>

                            <p className="text-sm md:text-base mt-5 text-gray-50 mb-4 text-center md:text-start">
                            Cursos e mentorias online são somente a ponta do iceberg do que fazemos!
                            </p>
                        </div>
                        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                            <div className="container mx-auto w-full h-full">
                                <div className="relative wrap overflow-hidden p-10 h-full">
                                    <div className="border-2-2 border-yellow-555 absolute h-full border-2 border-r-2 border-blue-600 right-1/2 rounded-[1%] ">
                                    </div>
                                    <div
                                        className="border-2-2 border-yellow-555 absolute h-full border-2 left-1/2 border-blue-600 rounded-[1%]"
                                    ></div>
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <h4 className="mb-3 font-bold text-lg md:text-2xl">
                                                Livro físico</h4>

                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1  w-5/12 px-1 py-4 text-left">
                                            <h4 className="mb-3 font-bold text-lg md:text-2xl">Novas empresas</h4>

                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <h4 className="mb-3 font-bold text-lg md:text-2xl">Ferramentas</h4>

                                        </div>
                                    </div>

                                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                                        <div className="order-1 w-5/12"></div>

                                        <div className="order-1  w-5/12 px-1 py-4">
                                            <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">SAAS</h4>

                                        </div>
                                    </div>
                                    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                        <div className="order-1 w-5/12"></div>
                                        <div className="order-1 w-5/12 px-1 py-4 text-right">
                                            <h4 className="mb-3 font-bold text-lg md:text-2xl">Evento ao vivo (Brasil e LATAM)</h4>


                                        </div>
                                    </div>
                                </div>
                                
                                {/* <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
import Image from "next/image";
import Dr01 from '@/app/Assets/Drs01.png'
import Dr02 from '@/app/Assets/Drs02.png'
import Dr03 from '@/app/Assets/Drs03.png'

export default function Especialistas() {
    return (
        <div>
            <div
                className="inline-flex w-[650px] flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div>
                    Titulo
                </div>
                <ul x-ref="logos" className="flex  items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-2xl z-10"></div>
                            <div className="relative">
                                <Image src={Dr01} alt=" Dr01" width={270} height={450} objectFit="cover" className="rounded-2xl flex items-center justify-center z-0" />
                            </div>
                            <div className="relative z-20 p-4 bottom-20">
                                <p className="font-extrabold">Do zero a R$2 milhões em vendas em 12 meses</p>
                                <p>@sowsaude</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-2xl z-10"></div>
                            <div className="relative">
                                <Image src={Dr02} alt=" Dr01" width={270} height={450} objectFit="cover" className="rounded-2xl flex items-center justify-center z-0" />
                            </div>
                            <div className="relative z-20 p-4 bottom-20">
                                <p className="font-extrabold">Do zero a R$850 mil em vendas em 10 meses
                                </p>
                                <p>@san.baroni</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-2xl z-10"></div>
                            <div className="relative">
                                <Image src={Dr03} alt=" Dr01" width={270} height={450} objectFit="cover" className="rounded-2xl flex items-center justify-center z-0" />
                            </div>
                            <div className="relative z-20 p-4 bottom-20">
                                <p className="font-extrabold">Criamos o maior evento do Brasil no nicho de DropShipping em 2023</p>
                                <p>@dropsummit</p>
                            </div>
                        </div>
                    </li>

                </ul>
                <ul x-ref="logos" className="flex  items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-2xl z-10"></div>
                            <div className="relative">
                                <Image src={Dr01} alt=" Dr01" width={270} height={450} objectFit="cover" className="rounded-2xl flex items-center justify-center z-0" />
                            </div>
                            <div className="relative z-20 p-4 bottom-20">
                                <p className="font-extrabold">Do zero a R$2 milhões em vendas em 12 meses</p>
                                <p>@sowsaude</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-2xl z-10"></div>
                            <div className="relative">
                                <Image src={Dr02} alt=" Dr01" width={270} height={450} objectFit="cover" className="rounded-2xl flex items-center justify-center z-0" />
                            </div>
                            <div className="relative z-20 p-4 bottom-20">
                                <p className="font-extrabold">Do zero a R$850 mil em vendas em 10 meses
                                </p>
                                <p>@san.baroni</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-2xl z-10"></div>
                            <div className="relative">
                                <Image src={Dr03} alt=" Dr01" width={270} height={450} objectFit="cover" className="rounded-2xl flex items-center justify-center z-0" />
                            </div>
                            <div className="relative z-20 p-4 bottom-20">
                                <p className="font-extrabold">Criamos o maior evento do Brasil no nicho de DropShipping em 2023</p>
                                <p>@dropsummit</p>
                            </div>
                        </div>
                    </li>

                </ul>
                <ul x-ref="logos" className="flex  items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                    <li>
                        <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-2xl z-10"></div>
                            <div className="relative">
                                <Image src={Dr01} alt=" Dr01" width={270} height={450} objectFit="cover" className="rounded-2xl flex items-center justify-center z-0" />
                            </div>
                            <div className="relative z-20 p-4 bottom-20">
                                <p className="font-extrabold">Do zero a R$2 milhões em vendas em 12 meses</p>
                                <p>@sowsaude</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-2xl z-10"></div>
                            <div className="relative">
                                <Image src={Dr02} alt=" Dr01" width={270} height={450} objectFit="cover" className="rounded-2xl flex items-center justify-center z-0" />
                            </div>
                            <div className="relative z-20 p-4 bottom-20">
                                <p className="font-extrabold">Do zero a R$850 mil em vendas em 10 meses
                                </p>
                                <p>@san.baroni</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-2xl z-10"></div>
                            <div className="relative">
                                <Image src={Dr03} alt=" Dr01" width={270} height={450} objectFit="cover" className="rounded-2xl flex items-center justify-center z-0" />
                            </div>
                            <div className="relative z-20 p-4 bottom-20">
                                <p className="font-extrabold">Criamos o maior evento do Brasil no nicho de DropShipping em 2023</p>
                                <p>@dropsummit</p>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
}
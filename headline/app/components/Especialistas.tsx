import Image from "next/image";
import Dr01 from '@/app/Assets/Drs01.png'
import Dr02 from '@/app/Assets/Drs02.png'
import Dr03 from '@/app/Assets/Drs03.png'

export default function Especialistas() {
    return (
        <div>
            <div
                className="inline-flex flex-nowrap overflow-hidden items-center justify-center h-screen">
                <ul  className="flex  items-center justify-center md:justify-start  [&_img]:max-w-none flex-wrap gap-10">
                    <li>
                        <div className="w-96 items-center justify-center filter hover:grayscale h-[450px] bg-neutral-800 rounded-3xl text-neutral-300 flex flex-col  gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-2xl z-10"></div>
                            <div className="relative">
                                <Image src={Dr01} alt=" Dr01" width={450} height={650} objectFit="cover" className="rounded-2xl flex items-center justify-center z-0" />
                            </div>
                            <div className="relative z-20 p-4  bottom-32">
                                <p className="font-extrabold">Do zero a R$2 milhões em vendas em 12 meses</p>
                                <p>@sowsaude</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="w-96 items-center justify-center filter hover:grayscale  h-[450px] bg-neutral-800 rounded-3xl text-neutral-300 flex flex-col   gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-2xl z-10"></div>
                            <div className="relative hover:filter hover:grayscale">
                                <Image src={Dr02} alt=" Dr01" width={450} height={600} objectFit="cover" className="rounded-2xl flex items-center justify-center z-0" />
                            </div>
                            <div className="relative z-10 p-4 bottom-32">
                                <p className="font-extrabold">Do zero a R$850 mil em vendas em 10 meses
                                </p>
                                <p>@san.baroni</p>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="w-96 items-center justify-center filter hover:grayscale h-[450px] bg-neutral-800 rounded-3xl text-neutral-300 flex flex-col gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-center justify-center rounded-2xl z-10"></div>
                            <div className="relative">
                                <Image src={Dr03} alt=" Dr01" width={450} height={600} objectFit="cover" className="rounded-2xl flex items-center justify-center z-0" />
                            </div>
                            <div className="relative z-20 p-4 bottom-32">
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
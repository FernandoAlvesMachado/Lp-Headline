import BgOffice from '@/app/Assets/blurred-office-background-blurred-office-presentation-background.jpg'
import { CheckCheck, Square } from 'lucide-react';

export default function SecctionAbout() {
    return (
        <div className="flex items-center z-10 my-20 justify-center w-full glow-container">
            <div className="max-w-6xl  z-40 flex items-center justify-center rounded-3xl">
                <div className="w-full items-center h-full justify-center flex flex-col z-0 relative">
                    <div className="text-white font-bold text-3xl  flex flex-col text-center">
                        <h1 className='text-focus-in max-w-5xl'>
                            Cada expert é visto como um hub de negócios. Baseado nas oportunidades que cada expert traz consigo, novos negócios são desenvolvidos ao redor dele.
                        </h1>
                        <p className='text-lg text-focus-in'>Alguns dos negócios que já nasceram dos nossos experts:</p>
                        <div className='w-full text-focus-in items-center  flex justify-center'>
                            <div className='flex flex-col gap-5 my-10'>
                            <div className="absolute z-10 rounded-lg  m-0 mt-0 pointer-events-none top-0 left-0 right-0 bottom-0 p-0.5" style={{
                                            background: "linear-gradient(-35deg, #fff, transparent, transparent, #fff)",
                                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                                            WebkitMaskComposite: "xor",
                                            maskComposite: "exclude"
                                        }}>
                                        </div>
                                <div className='flex gap-8'>

                                    <div className='flex items-center justify-center gap-2'>
                                        <CheckCheck size={30} className='text-green-500 rounded-full p-1 ' />
                                        Livro físico
                                    </div>
                                    <div className='flex  items-center justify-center gap-2'>
                                        <CheckCheck size={30} className='text-green-500 rounded-full p-1 ' />
                                        Novas empresas
                                    </div>
                                    <div className='flex  items-center justify-center gap-2'>
                                        <CheckCheck size={30} className='text-green-500 rounded-full p-1 ' />
                                        Ferramentas
                                    </div>
                                    <div className="flex items-center justify-center gap-2 relative">
                                        
                                        <div className="flex items-center justify-center gap-2">
                                            <CheckCheck size={30} className="text-green-500 rounded-full p-1" />
                                            <span className="">SAAS</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-start justify-center gap-5  w-full'>
                                    <div className='flex  items-center justify-center gap-2'>
                                        <CheckCheck size={30} className='text-green-500 rounded-full p-1 ' />
                                        Mastermind
                                    </div>
                                    <div className='flex  items-center justify-center gap-2'>
                                        <CheckCheck size={30} className='text-green-500 rounded-full p-1 ' />
                                        Evento ao vivo (Brasil e LATAM)
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='text-lg text-focus-in '>Cursos e mentorias online são somente a ponta do iceberg do que fazemos!</p>
                    </div>
                </div>
            </div>
            <div className='blur-[100px] absolute  w-96 h-96 rounded-full bg-blue-950'></div>
            <div className='blur-[100px] absolute -top-22 -left-56  w-96 h-96 rounded-full bg-blue-950'></div>
        </div >
    );
}

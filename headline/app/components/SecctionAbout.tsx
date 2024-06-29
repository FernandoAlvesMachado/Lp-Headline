
import BgOffice from '@/app/Assets/blurred-office-background-blurred-office-presentation-background.jpg'

export default function SecctionAbout() {
    return (
        <div
            className="flex items-center h-screen z-10 justify-center w-full glow-container"
        >
            <div
                style={{
                    // backgroundImage: `url(${BgOffice.src})`,
                    backgroundSize: 'cover', // Ajusta a imagem para cobrir todo o container
                    backgroundPosition: 'center', // Centraliza a imagem
                    height: "50vh", // Altura da div
                    width: '100%', // Largura da div
                    backgroundRepeat: 'no-repeat',
                }}
                className="max-w-6xl  z-40 flex items-center justify-center rounded-3xl"
            >
                <div className="w-full items-center h-full justify-center flex flex-col z-0">
                    <div className="text-white font-bold text-3xl  flex flex-col text-center">
                        <h1 className='text-focus-in max-w-5xl'>
                            Cada expert é visto como um hub de negócios. Baseado nas oportunidades que cada expert traz consigo, novos negócios são desenvolvidos ao redor dele.
                        </h1>
                        <p className='text-lg text-focus-in'>Alguns dos negócios que já nasceram dos nossos experts:</p>
                        <div className='w-full items-center  flex justify-center'>

                            <div className='flex items-center justify-center mt-4 max-w-2xl'>
                                <div className='flex flex-col items-start w-full'>
                                    <div>✔️ Livro físico</div>
                                    <div>✔️ Novas empresas</div>
                                    <div>✔️ Ferramentas</div>
                                    <div>✔️ SAAS</div>
                                </div>
                                <div className='flex flex-col items-start justify-center max-w-xl'>
                                    <div>✔️ Mastermind</div>
                                    <div>✔️ Evento ao vivo (Brasil e LATAM)</div>
                                </div>

                            </div>
                        </div>
                        <p className='text-lg text-focus-in mt-12'>Cursos e mentorias online são somente a ponta do iceberg do que fazemos!</p>
                    </div>

                </div>

            </div>
            <div className='blur-[100px] absolute  w-96 h-96 rounded-full bg-blue-950'></div>
            <div className='blur-[100px] absolute -top-22 -left-56  w-96 h-96 rounded-full bg-blue-950'></div>
        </div>
    );
}
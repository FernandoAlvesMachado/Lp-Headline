import BgEarth from '@/app/Assets/bg-earth-sky.png';

export default function ScrollPage() {
    return (
        <div
            className="flex items-center mt-20 justify-center w-full h-screen"
        >
            <div
                style={{
                    backgroundImage: `url(${BgEarth.src})`,
                    backgroundSize: 'cover', // Ajusta a imagem para cobrir todo o container
                    backgroundPosition: 'top', // Centraliza a imagem
                    height: "50vh", // Altura total da tela
                    width: '100%', // Largura total da tela
                    backgroundRepeat: 'no-repeat'
                }}
                className="max-w-6xl flex items-center justify-center rounded-3xl">
                <div className="w-full items-center justify-center flex h-1/2 z-10">
                    <h1 className="text-white">

                        Olá
                    </h1>
                </div>
                <div className="w-full items-center justify-center flex h-1/2">
                    <h1 className="text-white">
                        Olá
                    </h1>
                </div>
            </div>
        </div>
    );
}

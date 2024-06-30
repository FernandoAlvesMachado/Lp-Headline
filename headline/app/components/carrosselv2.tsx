'use client'
import { useEffect, useRef } from 'react';
import { CheckCheck } from 'lucide-react'; 

const Carousel = () => {
    const logosRef = useRef<HTMLUListElement>(null); // Tipagem para a referência

    useEffect(() => {
        const ul = logosRef.current;
        if (ul) {
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            const nextSibling = ul.nextSibling as HTMLElement | null;
            if (nextSibling) {
                nextSibling.setAttribute('aria-hidden', 'true');
            }
        }
    }, []);

    return (
        <div className="overflow-hidden z-50 w-full h-20 relative">
            <ul
                className="flex whitespace-nowrap absolute top-0 left-0"
                ref={logosRef}
            >
                {/* Itens do carrossel */}
                <div className="flex items-center justify-center gap-2">
                    <CheckCheck className="text-green-500 bg-white-animated rounded-full p-1 w-8 h-8" />
                    Livro físico
                </div>
                <div className="flex items-center justify-center gap-2">
                    <CheckCheck className="text-green-500 bg-white-animated rounded-full p-1 w-8 h-8" />
                    Novas empresas
                </div>
                <div className="flex items-center justify-center gap-2">
                    <CheckCheck className="text-green-500 bg-white-animated rounded-full p-1 w-8 h-8" />
                    Ferramentas
                </div>
                <div className="flex items-center justify-center gap-2">
                    <CheckCheck className="text-green-500 bg-white-animated rounded-full p-1 w-8 h-8" />
                    SAAS
                </div>
                <div className="flex items-center justify-center gap-2">
                    <CheckCheck className="text-green-500 bg-white-animated rounded-full p-1 w-8 h-8" />
                    Mastermind
                </div>
                <div className="flex items-center justify-center gap-2">
                    <CheckCheck className="text-green-500 bg-white-animated rounded-full p-1 w-8 h-8" />
                    Evento ao vivo <br /> (Brasil e LATAM)
                </div>
                {/* Repita os itens conforme necessário para tornar o carrossel infinito */}
            </ul>
        </div>
    );
};

export default Carousel;

'use client'
import { useEffect, useRef } from 'react';

export default function SegundaDobra() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;

            // Obtém as dimensões da div
            const { left, top } = container.getBoundingClientRect();

            // Calcula a posição do cursor dentro da div
            const x = clientX - left;
            const y = clientY - top;

            // Define as variáveis CSS customizadas para o glow
            container.style.setProperty('--mouse-x', `${x}px`);
            container.style.setProperty('--mouse-y', `${y}px`);
        };

        const handleMouseEnter = () => {
            container.classList.add('glow-active');
            container.addEventListener('mousemove', handleMouseMove);
        };

        const handleMouseLeave = () => {
            container.classList.remove('glow-active');
            container.removeEventListener('mousemove', handleMouseMove);
        };

        container.addEventListener('mouseenter', handleMouseEnter);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            if (container) {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
                container.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <div className="h-screen z-40 w-full items-center justify-center flex">
            <div className="flex gap-12 h-[450px] max-w-6xl flex-col md:flex-row items-center justify-center relative" ref={containerRef}>
                <div className="max-w-3xl w-full h-96 bg-blue-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 flex items-center justify-center p-4 text-white text-center glow-container">
                    <h1 className='z-50 text-5xl font-bold flex flex-col gap-5'>
                        Nosso objetivo é acelerar suas vendas no digital…
                        <p className='text-2xl'>Como fazemos isso? <span className='text-blue-950 bg-white rounded px-3'> Através de 3 pilares:</span></p>
                    </h1>
                </div>
                <div className='flex flex-col h-96 gap-5 w-52'>
                    <div className="max-w-2xl w-full h-full bg-blue-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 flex items-center justify-center p-4 text-white text-center glow-container">
                        <h1 className='z-50 text-2xl font-bold'>
                            Ofertas
                        </h1>
                    </div>
                    <div className="max-w-2xl w-full h-full bg-blue-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 flex items-center justify-center p-4 text-white text-center glow-container">
                        <h1 className='z-50 text-2xl font-bold'>
                            Campanhas
                        </h1>
                    </div>
                    <div className="max-w-2xl w-full h-full bg-blue-300 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20 border border-gray-100 flex items-center justify-center p-4 text-white text-center glow-container">
                        <h1 className='z-50 text-2xl font-bold'>
                            e Audiência.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

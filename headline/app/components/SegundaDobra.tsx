'use client'
import { useEffect, useRef } from 'react';
import Image from 'next/image';

import GalaxyBg from '@/app/Assets/low-angle-shot-mesmerizing-starry-sky.webp'
import SecctionAbout from './SecctionAbout';

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
        <div className="z-40 w-full items-center justify-center flex-col flex overflow-hidden">
            <div className="flex gap-12 h-[450px] max-w-6xl flex-col md:flex-row items-center justify-center relative" ref={containerRef}>
                <div className="px-16  h-96 bg-blue-900 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 flex items-center justify-center p-4 text-white text-center glow-container">
                    <h1 className='z-50 text-5xl font-bold flex flex-col gap-5'>
                        O que fazemos?
                        <p className='text-xl flex flex-col'>Nós não somos uma agência de lançamentos tradicional.
                            <span className='text-blue-950 m-auto text-lg rounded px-3 bg-white-animated'> Nós somos uma agência 360º</span>
                        </p>
                    </h1>
                </div>
            </div>
            <div className='overflow-hidden absolute h-3/4 -z-10 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]'>
                <div className="absolute top-0 left-0 w-full h-full z-20 bg-gradient-to-br from-transparent to-blue-900"></div>
            </div>
        </div>
    );
}

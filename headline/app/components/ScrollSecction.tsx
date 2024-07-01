'use client'
import BgEarth from '@/app/Assets/unsplash_HNkgPFBShSw.png';
import { useEffect, useRef } from 'react';
import ItemHover from './ItemHover';

export default function ScrollPage() {

    
    return (
        <div
            className="flex  items-center p-6 z-10 mb-24 justify-center  w-full glow-container"
        >
            <div
                // style={{
                //     backgroundImage: `url(${BgEarth.src})`,
                //     backgroundSize: 'cover', // Ajusta a imagem para cobrir todo o container
                //     backgroundPosition: 'top', // Centraliza a imagem
                //     height: "50vh", // Altura da div
                //     width: '100%', // Largura da div
                //     backgroundRepeat: 'no-repeat',
                //     overflow: 'hidden',

                // }}
                className="max-w-6xl overflow-hidden  md:h-[50vh] w-full border border-t-0 border-x-0 border-white z-20 flex items-center justify-center rounded-3xl">
                <div className="w-full galaxy overflow-hidden py-7  items-center justify-center flex flex-col h-1/2 z-0">
                    <div className="text-white text-2xl px-6 md:text-3xl z-10 flex flex-col text-center">
                        <h1 className='text-focus-in'>Nosso objetivo é acelerar suas vendas no digital…</h1>
                        <p className='text-base text-focus-in px-5'>Como fazemos isso? Através de 3 pilares:</p>
                    </div>
                    <div className='flex gap-5 z-50 hover:cursor-pointer justify-center items-center flex-wrap '>
                        <ItemHover name='Ofertas'/>
                        <ItemHover name='Campanhas'/>
                        <ItemHover name='E audiencia'/>
                    </div>
                </div>

            </div>
        </div>
    );
}

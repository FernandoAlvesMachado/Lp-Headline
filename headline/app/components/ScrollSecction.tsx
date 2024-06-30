'use client'
import BgEarth from '@/app/Assets/unsplash_HNkgPFBShSw.png';
import { useEffect, useRef } from 'react';
import ItemHover from './ItemHover';

export default function ScrollPage() {

    
    return (
        <div
            className="flex items-center z-10 justify-center  w-full glow-container"
        >
            <div
                id='divMaeBro'
                style={{
                    backgroundImage: `url(${BgEarth.src})`,
                    backgroundSize: 'cover', // Ajusta a imagem para cobrir todo o container
                    backgroundPosition: 'top', // Centraliza a imagem
                    height: "50vh", // Altura da div
                    width: '100%', // Largura da div
                    backgroundRepeat: 'no-repeat',
                    overflow: 'hidden'
                }}
                className="max-w-6xl overflow-hidden border border-t-0 border-x-0 border-white z-20 flex items-center justify-center rounded-3xl"
            >
                <div className="w-full items-center justify-center flex flex-col h-1/2 z-0">
                    <div className="text-white text-3xl flex flex-col text-center">
                        <h1 className='text-focus-in'>Nosso objetivo é acelerar suas vendas no digital…</h1>
                        <p className='text-base text-focus-in'>Como fazemos isso? Através de 3 pilares:</p>
                    </div>
                    <div className='flex gap-5 justify-between items-center '>
                        <ItemHover name='Ofertas'/>
                        <ItemHover name='Campanhas'/>
                        <ItemHover name='E audiencia'/>
                    </div>
                </div>

            </div>
        </div>
    );
}

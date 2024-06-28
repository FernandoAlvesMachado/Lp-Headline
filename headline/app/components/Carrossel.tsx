'use client'
import ChessImage from '@/app/Assets/chess.webp'
import CoffeImage from '@/app/Assets/coffe.webp'
import CopyImage from  '@/app/Assets/copy.webp'
import DesignImage from '@/app/Assets/design.webp'
import SupportImage from '@/app/Assets/supp.webp'
import WebImage from '@/app/Assets/digital-illustration-rocket-laptop-background-with-blue-neon-light-generative-ai.webp'

import { useEffect, useRef } from 'react';
import ItemCarrossel from './ItemCarrossel';

export default function Carrossel() {
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
        <div className="relative  antialiased">
            <main className="relative h-[650px] flex flex-col justify-center overflow-hidden">
                <div className="w-full  max-w-5xl mx-auto px-4 md:px-6 py-24">
                    <div className="text-center">
                        <div className="w-full  mt-10 py-10 rounded inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                            <ul ref={logosRef} className="flex h-screen items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                                <li>
                                    <ItemCarrossel photo={ChessImage} name="Estratégia" />
                                    {/* <Image src={planeta01} alt='planeta 01' width={70} height={70} /> */}
                                </li>
                                <li>
                                    <ItemCarrossel photo={CopyImage} name="Copy" />
                                    {/* <Image src={planeta02} alt='planeta 02' width={70} height={70} /> */}
                                </li>
                                <li>
                                    <ItemCarrossel photo={DesignImage} name="Design" />
                                    {/* <Image src={planeta03} alt='planeta 03' width={70} height={70} /> */}
                                </li>
                                <li>
                                    <ItemCarrossel photo={SupportImage} name="Suporte" />
                                    {/* <Image src={planeta04} alt='planeta 04' width={70} height={70} /> */}
                                </li>
                                <li>
                                    <ItemCarrossel photo={WebImage} name="Web" />
                                    {/* <Image src={planeta01} alt='planeta 01' width={70} height={70} /> */}
                                </li>
                                <li>
                                    <ItemCarrossel photo={CoffeImage} name="Café" />
                                    {/* <Image src={planeta02} alt='planeta 02' width={70} height={70} /> */}
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
                    <div className='blur-[100px] absolute top-0 -left-56  w-96 h-96 rounded-full bg-blue-950'></div>
                    <div className='blur-[100px] absolute -top-22 -left-56  w-96 h-96 rounded-full bg-blue-950'></div>
                    <div className='blur-[100px]  overscroll-none overflow-hidden absolute top-96 right-2  w-96 h-96 rounded-full bg-blue-950'></div>
        </div>
    );
}

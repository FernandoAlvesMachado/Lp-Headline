'use client'
import React from 'react';
import CountUp from 'react-countup';

export default function StepsSection() {
    return (
        <div className="full mt-20 z-50 flex items-center justify-center">
            <div className="px-40 rounded-3xl py-10 overflow-hidden border-x-0 max-w-6xl border relative">
                <div className='absolute w-52 h-52  -z-10 bg-blue-800 blur-3xl rounded-full top-0 left-0'></div>
                <div className='absolute w-52 h-52  -z-10 bg-blue-800 blur-3xl rounded-full  bottom-0 right-0'></div>
                <div className="w-full items-center">
                    <h1 className="text-5xl mb-14 text-center font-bold text-white">Nossos marcos…</h1>
                </div>
                <div className="flex flex-col gap-7 w-full">
                    <div className="flex gap-7">
                        <div className="flex flex-col items-center justify-center gap-0 text-center text-white">
                            <h1 className='text-3xl font-bold'>
                                <CountUp end={45} duration={5} separator="." prefix="+"/>
                                {' '}milhões
                            </h1>
                            <p>De reais vendidos pela internet.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-0 text-center text-white">
                            <h1 className='text-3xl font-bold'>
                                <CountUp end={200} duration={7} separator="." prefix="+"/>
                                {' '}mil
                            </h1>
                            <p>Vendas únicas.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-0 text-center text-white">
                            <h1 className='text-3xl font-bold'>Lançamentos em</h1>
                            <p>Português, espanhol e inglês.</p>
                        </div>
                    </div>
                    <div className="flex gap-7">
                        <div className="flex flex-col items-center justify-center gap-0 text-center text-white">
                            <h1 className='text-3xl font-bold'>
                                {' '}
                                <CountUp end={3} duration={9}  prefix="+"/>
                                {' '}milhões
                            </h1>
                            <p className='w-72'>De seguidores nas redes sociais de nossos experts.</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-0 text-center text-white">
                            <h1 className='text-3xl font-bold'>
                                <CountUp end={17} duration={5} prefix="+"/>
                            </h1>
                            <p>Colaboradores</p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-0 text-center text-white">
                            <h1 className='text-3xl font-bold'>
                                <CountUp end={100} duration={2} prefix="+"/>
                            </h1>
                            <p>Lançamentos executados</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

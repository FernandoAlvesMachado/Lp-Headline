
import Sun from './space';
import Planet from './planet';

import planeta01 from '@/app/Assets/planeta 01.png';
import planeta02 from '@/app/Assets/planeta 02.png';
import planeta03 from '@/app/Assets/planeta 03.png';
import planeta04 from '@/app/Assets/planeta 04.png';

export default function PrimeiraDobra() {
    return (
        <div className="h-screen w-full  flex items-center justify-center z-10 bg-gray-900">
           
            <div className="relative w-96 h-96 z-20">
                <Sun />
                <Planet diameter={30} orbitSize={400} rotationSpeed={7} imageUrl={planeta01} />
                <Planet diameter={55} orbitSize={490} rotationSpeed={3} imageUrl={planeta02} />
                <Planet diameter={70} orbitSize={600} rotationSpeed={4} imageUrl={planeta03} />
                <Planet diameter={80} orbitSize={740} rotationSpeed={2} imageUrl={planeta04} />
            </div>
            <div className='w-[1200px] h-[1200px] z-10 absolute rounded-full bg-transparent border-dashed animate-pulse border-gray-500 border-2'></div>
            <div className='w-[1500px] h-[1500px] z-10 border-dashed animate-pulse absolute rounded-full bg-transparent border-gray-500 border-2'></div>
            <div className='w-[800px] h-[800px] z-10 border-dashed animate-pulse absolute rounded-full bg-transparent border-gray-500 border-2'></div>
            <div className='w-[980px] h-[980px] z-10 border-dashed animate-pulse absolute rounded-full bg-transparent border-gray-500 border-2'></div>
            <div className='blur-[100px] absolute  w-96 h-96 rounded-full bg-blue-950'></div>
            <div className='blur-[100px] absolute -top-22 -left-56  w-96 h-96 rounded-full bg-blue-950'></div>
            <div className='blur-[100px]  overscroll-none overflow-hidden absolute top-96 right-2  w-96 h-96 rounded-full bg-blue-950'></div>
        </div >
    );
}
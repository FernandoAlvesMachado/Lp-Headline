import { StaticImageData } from 'next/image';

interface CardProps {
    photo: string | StaticImageData;
    name: string;
}

const Card: React.FC<CardProps> = ({ photo, name }) => {
    const backgroundImage = typeof photo === 'string' ? photo : photo.src;
    console.log(backgroundImage)

    return (
        <div className=" duration-500 mt-20 hover:-rotate-0 group [transform:rotate3d(1,-1,1,60deg)] border-sky-900 border-4 overflow-hidden rounded-2xl relative w-64 h-96 p-5 flex flex-col items-start gap-4">
            <div className="relative grid h-full w-full flex-col items-end justify-center overflow-hidden rounded-xl  bg-clip-border text-center text-gray-700" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-bg-black-10"></div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                    <h2 className="mb-6 block font-sans text-2xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                        {name}
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default Card;

interface ButtonProps {
    nameButton: string;
    link: string;
}

export default function Button({ nameButton, link }: ButtonProps) {
    return (
        <div className="mt-5 ">
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50 overflow-hidden h-16 w-96 rounded-md bg-blue-500 p-2 flex justify-center items-center font-extrabold">
                    <div className="absolute right-32 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
                    <div className="absolute right-2 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150 duration-500 bg-sky-800"></div>
                    <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150 duration-500 bg-sky-700"></div>
                    <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150 duration-500 bg-sky-600"></div>
                    <p className="z-30 text-xl">{nameButton}</p>
                </button>
            </a>
        </div>
    );
}

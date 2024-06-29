interface ItemHoverProps {
    name: string;
}

export default function ItemHover({ name }: ItemHoverProps) {
    return (
        <div>
            <div className=" text-gray-300 w-full hover:brightness-90 transition-all cursor-pointer group bg-gradient-to-tl from-blue-900 to-gr-950 hover:from-gray-800 hover:to-g950 border-r-2 border-t-2 border-gray-900 mt-2 rounded-lg overflow-hidden relative">
                <div className=" py-10 items-center justify-center  flex w-72">
                    <h1 className="text-2xl text-center w-full z-50 text-white">{name}</h1>
                </div>
                <div className="h-0.5 group-hover:w-full bg-gradient-to-l  via-blue-950 group-hover:via-blue-500 w-[70%] m-auto rounded transition-all"></div>
                <div className="h-2 w-full bg-gradient-to-l via-blue-500 group-hover:blur-xl blur-2xl m-auto rounded transition-all absolute bottom-0"></div>
            </div>

        </div>
    );
}
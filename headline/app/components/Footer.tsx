import Image from "next/image";
import LogoBrancaHorizontal from '@/app/Assets/2. Logo Horizontal Branco.png'
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
    return (


        <footer className=" rounded-lg shadow dark:bg-gray-900 m-4">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={LogoBrancaHorizontal} width={250} height={25} alt="logo branca" />
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 flex items-center justify-center gap-2">
                                <Instagram />
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline me-4 md:me-6 flex items-center justify-center gap-2">
                                <Instagram />
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline flex items-center justify-center gap-2">
                                <Mail />
                                Email
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Headline</a>. Todos os direitos reservados.</span>
            </div>
        </footer>


    );
}
import Image from "next/image";
import about1Img from '../../../public/armac-guindaste-e-munck-blog.jpg'
import about2Img from '../../../public/Mustard Black Truck Logo in Illustrative Style.png'
import { Check, CheckIcon, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export  function About() {
    return(
        <section className="bg-[#FDF6ec] py-16">

            <div className="container mx-auto px-8 ">

                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                   <div className="relative w-full lg:h-[400px] md:h-[300px] h-[200px] rounded-3xl overflow-hidden">
                    <Image
                    src={about1Img} 
                    alt="foto doguinho"
                    fill
                    quality={100}
                    priority
                    />
                   </div>


                   <div className="absolute  w-16 h-16 right-4 -bottom-8 border-6 rounded-lg border-white overflow-hidden">
                    <Image
                    src={about2Img} 
                    alt="foto doguinho"
                    fill
                    quality={100}
                    priority
                    />
                   </div>


                </div>

                <div className="space-y-8 mt-10">
                    <h2 className="text-5xl font-bold ">SOBRE</h2>

                    <p>
                    Somos uma empresa especializada em munck, eletricidade, troca de postes e serviços relacionados, 
                    oferecendo soluções seguras e eficientes para indústrias, 
                    comércios e clientes em geral. Com anos de experiência no mercado, nos destacamos pelo compromisso com a qualidade, 
                    segurança e agilidade em cada serviço prestado.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <CheckIcon className="text-red-500"/>
                            No Mercado Desde 2007
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckIcon className="text-red-500"/>
                            Fidelidade e Segurança
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckIcon className="text-red-500"/>
                            Ajudo a Sua Empresa
                        </li>

                        <div className="flex gap-4">
                        <a
                        target="_blank"
                        href="https://w.app/ksreg5" className="bg-green-500 text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md ">
                            <WhatsappLogo size={22}/>
                            Contato via WhatsApp
                           
                        
                        </a>

                        <a
                        target="_blank"
                        href="https://maps.app.goo.gl/2vp72Qz8FBMdHocw6" className=" text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md ">
                            <MapPin size={22}/>
                            Endereço da Loja 
                           
                        
                        </a>

                        </div>


                    </ul>



                </div>
                </div>




            </div>



        </section>
    )
}
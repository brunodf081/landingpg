import {WhatsappLogo} from '@phosphor-icons/react/dist/ssr'
import munckImg from '../../../public/pngwing.com.png'
import Image from 'next/image'
export function Hero() {
    return (
        <section className="bg-[#620000] text-white relative overflow-hidden">

            <div>
                <Image 
                src={munckImg} alt="dog"
                fill
                sizes='100vw' 
                priority
                className='object-cover opacity-60 lg:hidden'
                
                 />
            </div>
            
            <div className='absolut inset-0 bg-black opacity-45 md:hidden'>

            </div>

            <div className='container mx-auto pt-16 pb-16 md:pb-0 px-10 relative'>
                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8 '>
                    <div className='space-y-7'>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                        Movendo o seu Negócio com Força, Confiança e Energia!
                        </h1>
                        <p className="lg:text-lg ">
                            Oferecemos os Melhores Serviços e Cuidados para o Negocio! 
                        </p>
                       
                            <a
                            target='_blank'
                             href="https://w.app/wgulkt"
                             className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                             >
                                <WhatsappLogo size={22} />
                                
                                Contato via WhatsApp
                            </a>
                        

                        <div className="mt-8">
                            <p className="text-sm mb-8">
                               <b className="bg-green-500 text-white  px-3 py-2  font-semibold rounded-md">Rapido e Eficaz</b >  
                            </p>
                        </div>

                    </div>

                    <div className='hidden md:block h-full relative'>
                        <Image
                        src={munckImg}
                        alt='Imagem caminhão Munck'
                        className='object-contain'
                        fill
                        sizes='(max-width: 768px) 0vw, 50vw'
                        quality={100}
                        priority
                        />
                    </div>


                    
                </article>
            </div>

        </section>
    )
}
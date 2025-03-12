'use client'
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock, Truck, SquareCheck, Zap, Weight } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'


const services = [
    {
      title: "Munck e Guindaste",
      description: "Realizamos transporte e movimentação de cargas pesadas com segurança e precisão. Nossos caminhões munck são ideais para içamento e remoção de equipamentos, estruturas metálicas e materiais diversos.",
      duration: "",
      price: "",
      icon: <Truck />,
      linkText: 'Olá, vi no site e gostaria de mais informações.'
    },
    {
      title: "Fornecimento e Troca e  de Postes",
      description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
      duration: "",
      price: "",
      icon: <SquareCheck />,
      linkText: 'Olá, vi no site e gostaria de mais informações.'
    },
    {
      title: "Serviços Elétricos de Alta e Baixa Tensão",
      description: "Oferecemos instalações elétricas, manutenção preventiva e corretiva para empresas, indústrias e comércios. Trabalhamos com segurança e seguindo todas as normas técnicas.",
      duration: "",
      price: "",
      icon: <Zap/>,
      linkText: 'Olá, vi no site e gostaria de mais informações.'
    },
    {
      title: "Venda e Manutenção de Transformadores de Alta e Baixa Tensão ",
      description: "Especializados no transporte de máquinas, geradores, transformadores e outros equipamentos industriais. Nossa equipe garante que tudo seja movimentado com cuidado e eficiência.",
      duration: "",
      price: "",
      icon: <Weight />,
      linkText: 'Olá, vi no site  e gostaria de mais informações.'
    },
  ]



export function Services() {
        const [emblaRef, emblaApi] = useEmblaCarousel({
            loop: false,
            align: "start",
            slidesToScroll:1,
            breakpoints:{
                "(min-width: 768px)": {slidesToScroll:3},
            }

        })

        function scrollPrev() {
            emblaApi?.scrollPrev()
        }
        function scrollNext() {
            emblaApi?.scrollNext()
        }

    
    return (
        <section className="bg-[#620000] py-16">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="text-4xl font-bold mb-12 text-center text-white">Serviços</h2>

                    <div className="relative">
                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {services.map((item, index) => (
                                    <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                        <article className='bg-white text-black rounded-2xl p-2 space-y-6 h-full flex flex-col'>
                                            <div className='flex-1 flex items-start justify-between'>
                                                <div className='gap-3 flex'>
                                                    <span className='text-3xl  '>{item.icon}</span>
                                                    <div>
                                                        <h3 className='mb-2 font-bold text-xl my-2'>{item.title}</h3>
                                                        <p className='font-semibold text-sm select-none'>{item.description}</p>
                                                    </div>
                                                </div>

                                            </div >

                                            <div className='border-t border-gray-650 pt-4 flex items-center justify-between'>
                                                <div className='flex items-center gap-2'>
                                                   <Clock className='w-5 h-5'/> 
                                                   <span>{item.duration}</span>
                                                   
                                                </div>
                                                <a
                                                target='_blank'
                                                href="https://w.app/ksreg5" className='flex items-center justify-center gap-2 px-4 py-2 rounded-4xl text-white bg-green-600 duration-700'>
                                                    Entrar em contato
                                                    <WhatsappLogo size={18} />
                                                </a>
                                                

                                            </div>

                                        </article>

                                    </div>
                                    
                                ))}

                            </div>

                        </div>
                        <button
            className='bg-white flex items-center justify-center rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.3)] w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollPrev}
          >
            <ChevronLeft className='w-6 h-6 text-black' />
          </button>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-[0px_4px_10px_rgba(0,0,0,0.3)] w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollNext}
          >
            <ChevronRight className='w-6 h-6 text-black' />
          </button>

                    </div>

                </div>
                

                
            

            </div>

        </section>
    )
}
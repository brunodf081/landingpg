'use client'
import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock, Piano, Check, Truck, Laugh, Cable, DatabaseZap, ShieldCheck  } from 'lucide-react'
import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react'


const services = [
    {
      title: "Experiência e Profissionalismo",
      description: "Contamos com uma equipe altamente qualificada e com mais de 17 anos de experiência no setor de munck, eletricidade e troca de postes. Garantimos um serviço seguro, eficiente e dentro das normas técnicas.",
      duration: "",
      price: "",
      icon: <Laugh />,
      linkText: 'Olá, vi no site e gostaria de mais informações.'
    },
    {
      title: "Equipamentos Modernos e Seguros",
      description: "Trabalhamos com equipamentos de última geração para oferecer mais segurança e agilidade em cada serviço. Nossos veículos munck são revisados regularmente para garantir a melhor performance.",
      duration: "",
      price: "",
      icon: <Cable/>,
      linkText: 'Olá, vi no site e gostaria de mais informações.'
    },
    {
      title: "Atendimento Ágil e Personalizado",
      description: "Priorizamos um atendimento rápido e eficiente, entendendo a necessidade de cada cliente para oferecer soluções sob medida. Estamos sempre disponíveis para tirar dúvidas e garantir um serviço de qualidade.",
      duration: "",
      price: "",
      icon: <DatabaseZap />,
      linkText: 'Olá, vi no site e gostaria de mais informações.'
    },
    {
      title: "Segurança e Qualidade",
      description: "Seguimos rigorosamente as normas de segurança para proteger nossos colaboradores e clientes. Nosso compromisso é entregar serviços com excelência, garantindo sua tranquilidade e satisfação.",
      duration: "",
      price: "",
      icon: <ShieldCheck />,
      linkText: 'Olá, vi no site e gostaria de mais informações.'
    },
  ]



export function Contact() {
        const [emblaRef, emblaApi] = useEmblaCarousel({
            loop: false,
            
           

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
                    <h2 className="text-4xl text-white font-bold text-center mb-12">Por que nos escolher?</h2>

                    <div className="relative max-w-4xl mx-auto">
                        <div className='overflow-hidden' ref={emblaRef}>
                            <div className='flex'>
                                {services.map((item, index) => (
                                    <div key={index} className='flex-[0_0_100%] min-w-0 px-3'>
                                        <article className='bg-[#ffffff] text-black rounded-2xl p-6 space-y-6 h-full flex flex-col'>
                                            <div className='flex-1 flex items-start justify-between'>
                                                <div className=' gap-3 flex'>
                                                    <span className='text-3xl '>{item.icon}</span>
                                                    <div>
                                                        <h3 className='mb-2 font-bold text-2xl my-2'>{item.title}</h3>
                                                        
                                                        <p className='font-semibold  text-sm select-none'>{item.description}</p>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='border-t border-gray-650 pt-4 flex items-center justify-between'>
                                                <div className='flex items-center gap-2'>
                                                   <a href="#">
                                                    <InstagramLogo size={22}/> 
                                                   </a>
                                                   
                                                   <span className='font-semibold'>{item.duration}</span>
                                                   
                                                </div>
                                                <div className='flex items-center justify-center gap-2 px-4 py-2'>
                                                    <a 
                                                    target='_blank'
                                                    href="https://w.app/wgulkt" className='flex items-center justify-center text-white gap-2 px-4 py-2 rounded-4xl bg-green-600 hover:bg-green-600 duration-700'>
                                                     Faça seu Orçamento<WhatsappLogo size={18}/>
                                                    </a>
                                                    
                                                  
                                                   
                                                </div>
                                                
                                                
                                                

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
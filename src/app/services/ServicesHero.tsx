import React from 'react'
import Image from 'next/image'
import servicesHero from "/public/images/services-hero.webp"


const ServicesHero = () => {
    return (
        <section className='cn-fluid-container grid lg:grid-cols-2 sm:grid-cols-1 place-items-center'>
            <h1 className='leading-relaxed'>
                Optimise all the business processes with our  custom-built <span className='bg-primary text-white'>software</span> and <span className='bg-primary text-white'>applications</span>
            </h1>
            <div className='pl-20'>
                <Image src={servicesHero} alt='cn-services' priority style={{inlineSize: "auto"}} />
            </div>
        </section>
    )
}

export default ServicesHero

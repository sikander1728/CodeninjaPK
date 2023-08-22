import React from 'react'
import ServicesCard from '../ServicesCard/ServicesCard'
import servicesData from "@/app/Data/homeServicesData.json"

const CoreServices = () => {
    return (
        <section className="cn-fluid-container">
            <h2 className="text-primary">
                Code Ninja’s Core Services
            </h2>
            <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8'>
                {
                    servicesData?.map((service, index) => (
                        <ServicesCard key={index} item={service} />
                    ))
                }
            </div>

        </section>
    )
}

export default CoreServices

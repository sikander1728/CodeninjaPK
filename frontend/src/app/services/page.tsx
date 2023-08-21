import React from 'react'
import ServicesHero from './ServicesHero'
import Breadcrumb  from '../components/Breadcrumb/Breadcrumb'

const page = () => {
    return (
        <>
            <ServicesHero />
            <Breadcrumb current='Software Development'/>
        </>
    )
}

export default page

import React from 'react'
import Link from 'next/link'

const navdata = [
    {
        "title": "Home",
        "link": "/",
    },
    {
        "title": "Services",
        "link": "/services",
    }
]

type CurrentNav = {
    current:string
}

const ServicesNav = (props: CurrentNav) => {
    return (
        <section className='cn-fluid-container'>
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center pl-0">
                    {
                        navdata?.map((navitem, index) => (
                            <li key={index}>
                                <div className='flex items-center'>
                                    <Link href={navitem.link} className='inline-flex items-center pr-5'>
                                        {navitem.title}
                                    </Link>
                                    <svg className='mr-5' width="10" height="11" viewBox="0 0 10 11" fill="black" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="5" cy="5.5" r="5" />
                                    </svg>
                                </div>
                            </li>
                        ))
                    }
                    <li aria-current="page">
                        <span className=" text-2xl font-medium text-gray75 pl-3">
                            {props.current}
                        </span>
                    </li>
                </ol>
            </nav>
        </section>
    )
}

export default ServicesNav

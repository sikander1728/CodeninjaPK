import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import bannerStyle from './HeroBanner.module.css'
import banner from "/public/images/banner-home.webp"

const HeroBanner = () => {
    return (
        <>
            <section className="cn-fluid-container ">
                <h1 className="sm:leading-snug md:leading-normal lg:w-2/4 sm:w-3/4 w-full tracking-tight text-stone-light">
                    Embrace limitless possibilities with&nbsp;
                    <span className="bg-primary text-white">cutting-edge</span>{" "}
                    technology. Your trusted partner for&nbsp;
                    <span className="bg-primary text-white">innovative</span> software
                    solutions and digital&nbsp;
                    <span className="bg-primary text-white">Transformations.</span>
                </h1>
                <div className="mt-10 flex items-start justify-start">
                    <Link href='/' className="flex items-center justify-between overflow-hidden
                   bg-stone-dark px-12 py-5 text-3xl font-semibold text-white
                   hover:text-primary shadow-sm hover:bg-white border
                   hover:border hover:border-primary transition duration-500 ease-in-out font-primary">
                        <span>Let's work together</span>

                        <span className="pl-14">
                            <svg
                                width="32"
                                height="24"
                                viewBox="0 0 42 34"
                                fill="currentColor"
                                className="hover:text-codeninja"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M23.909 30.034C23.0303 30.9127 23.0303 32.3373 23.909 33.216C24.7877 34.0947 26.2123 34.0947 27.091 33.216L40.125 20.182C41.8824 18.4246 41.8824 15.5754 40.125 13.818L27.091 0.784011C26.2123 -0.0946702 24.7877 -0.0946702 23.909 0.784011C23.0303 1.66269 23.0303 3.08731 23.909 3.96599L34.693 14.75H3C1.75736 14.75 0.75 15.7574 0.75 17C0.75 18.2426 1.75736 19.25 3 19.25H34.693L23.909 30.034Z"
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </span>
                    </Link>
                </div>
            </section>
            <section className={`cn-fluid-container ${bannerStyle.banner_background_code}`}>
                <Image 
                src={banner}
                alt='banner'
                className='mix-blend-luminosity	'
                />
            </section>
        </>
    )
}

export default HeroBanner

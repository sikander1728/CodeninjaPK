import React from 'react'
import Image from 'next/image'
import companyImage from '/public/images/about-company.webp'

const CompanyOverview = () => {
    return (
        <section className="cn-fluid-container flex">
            <div className="w-1/2">
                <Image
                    src={companyImage}
                    alt='company-brainstorm'
                />
            </div>

            <div className="w-1/2 flex items-center">
                <div className="pl-14">
                    <h2 className="text-primary pb-7">Who We Are?</h2>
                    <p className="text-stone-light">
                        CodeNinja is a renowned Lahore-based Custom Software Development Company in Pakistan
                        and a Product design partner. We started our journey more than a decade ago.
                        Since then, we have embarked on various projects successfully.
                        Our journey has allowed us to cater to different clients and made us grow through
                        our experience. We have evolved professionally throughout our journey. We started
                        small, but we had big ambitions.
                        <br /><br />
                        CodeNinja is now a Globally recognized software development outsourcing Company.
                        The company has delivered more than 260 projects and has more than 140
                        satisfied clients around the globe.
                    </p>
                    <div className="mt-10 flex items-start justify-start">
                        <a
                            href="#"
                            className="flex items-center justify-between overflow-hidden bg-stone-dark px-3 py-2 text-2xl font-normal text-white hover:text-primary shadow-sm hover:bg-white border hover:border hover:border-primary ease-in-out duration-100"
                        >
                            <span>Read Full</span>

                            <span className="pl-8">
                                <svg
                                    width="26"
                                    height="22"
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
                            {/* <img className="inline h-5 w-auto" src="../components/public/images/Union.svg" alt="" /> */}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyOverview

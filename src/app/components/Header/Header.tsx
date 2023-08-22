import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="cn-header-fluid-container bg-white border-b border-light-gray">
            <nav className="flex items-center justify-between" aria-label="Global" >
                <div className="flex lg:flex-1 p-2.5">
                    <Link href='/'>
                        <span className="sr-only">Your Company</span>
                        <img className="h-auto w-full" src="/images/brand.svg" alt="logo" />
                    </Link>
                </div>
                <div className="flex lg:flex p-2.5" >
                    <button type="button"  >
                        <span className="sr-only">Open main menu</span>
                        <svg className='hover:fill-primary' width="64" height="64" viewBox="0 0 64 64"
                            fill="black"  xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" 
                            d="M11 38.4C11 37.5164 11.7232 36.8 12.6154 36.8H51.3846C52.2768 36.8 53 37.5164 53 38.4C53 39.2837 52.2768 40 51.3846 40H12.6154C11.7232 40 11 39.2837 11 38.4Z" />
                            <path fillRule="evenodd" clipRule="evenodd" 
                            d="M11 25.6C11 24.7163 11.7232 24 12.6154 24H51.3846C52.2768 24 53 24.7163 53 25.6C53 26.4837 52.2768 27.2 51.3846 27.2H12.6154C11.7232 27.2 11 26.4837 11 25.6Z"  />
                        </svg>

                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header

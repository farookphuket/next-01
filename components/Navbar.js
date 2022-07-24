import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import React ,{useState} from 'react'
import {useSession} from 'next-auth/react'

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)    
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const {data:session} = useSession()
    return(
    <div className="p-0 md:col-span-1 md:flex md:justify-end sticky 
        top-0 col-span-3 bg-white md:pr-2">
        <nav className="text-right">
            <div className="flex justify-between">
                <h1 className="text-blue-700 border-b border-gray-200 p-4 font-bold uppercase">
                    my first nextjs app
                </h1>
                <span className="block px-4 py-4 cursor-pointer md:hidden" 
                    onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </span>
            </div>

            <div className={`${isOpen?"":"hidden"} flex flex-col  p-2 md:block`}>

                <ul className="md:block">
                    <li className={`nav-item `}>


                        <span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                            </svg>
                        </span>
                        <span>
                            <Link href="/">
                                Home
                            </Link>
                        </span>
                    </li>
                    <li className="nav-item">
                        <span className="mr-2">
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                        </span>

                        <span>

                            <Link 
                            href="/about">
                                About
                            </Link>
                        </span>

                    </li>
                    <li className="nav-item relative">
                        <span className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </span>
                        <span>
                            <Link href='/notes'>Notes</Link>
                        </span>
                        

                            <div className="absolute mt-9 -y-5 bg-green-200">
                                <ul>
                                    <li>
                                        <span>this is the sub menu</span>
                                    </li>
                                </ul>
                            </div>
                            

                    </li>
                </ul>
            </div>


        </nav>
    </div>
)
}


export default Navbar

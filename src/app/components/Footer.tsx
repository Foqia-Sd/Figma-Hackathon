import React from 'react'
import { AiOutlineYoutube } from 'react-icons/ai'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaPinterest, FaSkype, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[#2A254B] text-white mb-4'>
        <div className='grid grid-cols-1 lg:grid-cols-4  py-6 px-16'>
            {/* Section 1 */}
            <div>
                <h2 className='py-3 font-bold'>Menu</h2>
                <ul className='space-y-2'>
                    <li>New arrivals</li>
                    <li>Best sellers</li>
                    <li>Recently viewed</li>
                    <li>Popular this week</li>
                    <li>All products</li>
                </ul>
            </div>

            {/* Section 2 */}
            <div>
                <h2 className='py-3 font-bold'>Categories</h2>
                <ul className='space-y-2'>
                    <li>Crockery</li>
                    <li>Furniture</li>
                    <li>Homeware</li>
                    <li>Plant pots</li>
                    <li>Chairs</li>
                    <li>Crockery</li>
                </ul>
            </div>

            {/* Section 3 */}
            <div>
                <h2 className='py-3 font-bold'>Our company</h2>
                <ul className='space-y-2'>
                    <li>About us</li>
                    <li>Furniture</li>
                    <li>Vacancies</li>
                    <li>Contact us</li>
                    <li>Privacy</li>
                    <li>Privacy</li>
                </ul>
            </div>

            {/* Section 4 */}
            <div>
                <h3 className='font-bold mt-4'>Join our mailing list</h3>
                {/* Sign Up */}
                <div className='mt-4 md:mt-4 flex flex-col lg:flex-row'>
                    <input
                        type='text'
                        placeholder='your@email.com'
                        className='py-2 px-2 bg-[#4E4D93] text-white w-full md:w-auto '
                    />
                    
                    <button className='py-3 px-3 bg-white text-[#2A254B] font-light w-full md:w-auto'>
                        Sign up
                    </button>
        
                </div>
            </div>
        </div>

        <div className="border-b-2 bg-neutral-50 mt-10 font-extralight mr-10 ml-10"></div>

        <div className='flex flex-col lg:flex-row justify-between items-center py-4 px-4'>
            <p className='text-center lg:text-left ml-8 mr-10'>Copyright 2022 Avion LTD</p>
            
            {/* Social Icons */}
            <div className='flex gap-6 mt-4 lg:mt-0 mr-8 ml-8 hover:scale-105 duration-300'>
                <a href='https://www.linkedin.com/in/foqia-siddiqui-3357152b5/' target='blank'>
                <FaLinkedin size={25} />
                </a>
                <FaFacebookSquare size={25}/>
                <FaInstagram size={25} />
                <FaSkype size={25} />
                <FaTwitter size={25} />
                <FaPinterest size={25} />
            </div>
        </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { footerLogo } from '../assets/images'
import { socialMedia, footerLinks } from '../constants'
import { copyrightSign } from '../assets/icons'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'> <img src= {footerLogo} width={150} height={46}/></a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon)=> (
              <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'> <img src= {icon.src} alt={icon.alt} width={24} height={24}/>
          </div>
            ))}

        </div>
      </div>
            <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
              {footerLinks.map((section)=> (
                <div key ={section}>
                  <h4 className='text-white font-montserrat text-2xl leading-normal mb-6 font-medium'>{section.title}</h4>
                  <ul>{section.links.map((link)=>(
                        <li className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer' key={link.name}> <a>{link.name}</a></li>
                  ))}
                    </ul>
                </div>
                  ))}
            </div>
      </div>

      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img src={copyrightSign} alt='copyright sign' width={20} height={20} className='rounded-full m-0'/>
          <p>Copyright. All rights reserved</p>
          
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
      <div className='text-white-400 flex justify-center'>

          <p> Developed by <a className='text-[#f4c10f]' href="https://sarthak-yadav-portfolio.netlify.app/" target="_blank">Sarthak Yadav </a></p>
          
          <div className='flex flex-1 justify-center items-center  mt-0.5 '>
          <a href="https://www.instagram.com/the___enigma_/" target="_blank" rel="noopener noreferrer" className='px-1 hover:text-white'>
          <FaInstagram size={25} />
        </a>
        <a href="https://www.linkedin.com/in/sarthak-001-001-yadav/" target="_blank" rel="noopener noreferrer" className='px-1 hover:text-white'>
          <FaLinkedin size={25} />
        </a>
        <a href="https://github.com/Sarthakyadav98/" target="_blank" rel="noopener noreferrer" className='px-1 hover:text-white '>
          <FaGithub size={25} />
        </a>
        </div>
    
      </div>
    

      
    </footer>
  )
}

export default Footer

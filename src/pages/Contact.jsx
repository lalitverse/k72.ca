import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Contact = () => {

  useGSAP(() => {
    gsap.from('.contact-text-line', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: 'power3.out'
    })
  })

  return (
    <div className='bg-black text-white min-h-screen pt-40 px-4 md:px-10 lg:px-20 font-[font2]'>
      <div className='flex flex-col gap-20 pb-40'>
        <div className='flex flex-col gap-10 overflow-hidden'>
          <h1 className='text-6xl md:text-8xl lg:text-[9vw] leading-[0.9] uppercase flex flex-col'>
            <div className='overflow-hidden'><span className='contact-text-line block'>Pour</span></div>
            <div className='overflow-hidden'><span className='contact-text-line block'>parler de</span></div>
            <div className='overflow-hidden'><span className='contact-text-line block text-[#D3FD50]'>votre</span></div>
            <div className='overflow-hidden'><span className='contact-text-line block text-[#D3FD50]'>projet</span></div>
          </h1>
          
          <div className='flex flex-col md:flex-row gap-10 md:gap-40 text-lg md:text-2xl mt-10 md:ml-auto md:w-1/2'>
            <div>
              <p>Dans un écran ou un bureau.<br />
              Chez vous. Chez nous.<br />
              Partout.</p>
            </div>
            <div>
              <a href="https://maps.app.goo.gl/PwGE7FGRcGwdtdto6" target="_blank" rel="noopener noreferrer" className='hover:text-[#D3FD50] transition-colors'>
                <address className='not-italic'>
                  525 Av. Viger O - Suite 400<br />
                  Montréal, QC H2Z 1G6 →
                </address>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full overflow-hidden border-y border-white/20 py-10 relative bg-[#D3FD50] text-black'>
        <a href="mailto:bonjour@k72.ca" className='block'>
          <div className='flex whitespace-nowrap text-6xl md:text-8xl lg:text-[7vw] uppercase moveX'>
            <span className='px-10'>bonjour@k72.ca ♡</span>
            <span className='px-10'>bonjour@k72.ca ♡</span>
            <span className='px-10'>bonjour@k72.ca ♡</span>
            <span className='px-10'>bonjour@k72.ca ♡</span>
          </div>
        </a>
      </div>

      <div className='py-32'>
        <h2 className='text-2xl mb-10'>Suivez-nous</h2>
        <ul className='flex flex-wrap gap-4 text-sm md:text-base'>
          <li>
            <a href="https://www.facebook.com/K72.ca/" target="_blank" rel="noopener noreferrer" className='px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition-colors'>
              Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/k72_creation/" target="_blank" rel="noopener noreferrer" className='px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition-colors'>
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/k72" target="_blank" rel="noopener noreferrer" className='px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition-colors'>
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/agenceK72" target="_blank" rel="noopener noreferrer" className='px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition-colors'>
              Behance
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact

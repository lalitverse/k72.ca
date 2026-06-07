import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] w-full px-4 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-6 pb-8'>
      <p className='lg:w-1/3 w-full font-[font1] text-sm lg:text-lg lg:leading-relaxed leading-tight indent-8 lg:indent-12 text-justify lg:text-left'>
        K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
      <div className='flex gap-4 w-full lg:w-auto justify-center'>
        <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] h-16 lg:h-32 flex items-center justify-center px-8 lg:px-14 border-white rounded-full uppercase'>
          <Link className='text-2xl lg:text-3xl' to='/projects'>Projets</Link>
        </div>
        <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] h-16 lg:h-32 flex items-center justify-center px-8 lg:px-14 border-white rounded-full uppercase'>
          <Link className='text-2xl lg:text-3xl' to='/agence'>Agence</Link>
        </div>
      </div>
    </div>
  )
}

export default HomeBottomText
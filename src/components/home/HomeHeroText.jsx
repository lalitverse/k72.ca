import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] flex-1 flex flex-col justify-center items-center pt-24 lg:pt-0 text-center'>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                L'étincelle
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-start uppercase lg:leading-[8vw] leading-[10vw]'>
                qui
                <div className='h-[7vw] w-[16vw] rounded-full -mt-3 overflow-hidden '>
                    <Video />
                </div>
                génère
            </div>
            <div className='lg:text-[9.5vw] text-[12vw] justify-center flex items-center uppercase lg:leading-[8vw] leading-[10vw]'>
                la créativité
            </div>
        </div>
    )
}

export default HomeHeroText
import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div className='w-full lg:w-1/2 min-h-[50vh] lg:min-h-0 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full '>
                <img className='h-full w-full object-cover' src={props.image1} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-3xl lg:text-5xl font-[font1] border-4 py-2 px-6 lg:py-4 lg:px-8 text-white border-white rounded-full text-center'>Voir le projet</h2>
                </div>
            </div>
            <div className='w-full lg:w-1/2 min-h-[50vh] lg:min-h-0 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full '>
                <img className='h-full w-full object-cover' src={props.image2} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-3xl lg:text-5xl font-[font1] border-4 py-2 px-6 lg:py-4 lg:px-8 text-white border-white rounded-full text-center'>Voir le projet</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
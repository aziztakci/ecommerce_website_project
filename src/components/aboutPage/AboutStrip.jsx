import React from 'react'
import PageContent from '../../layout/PageContent'

function AboutStrip({aboutContent, isLoading}) {
    if (isLoading) return null;
    const strip = aboutContent.strip;

  return (
    <PageContent className='flex flex-col md:flex-row px-10 gap-15 items-center text-center md:text-start pt-10'>
        <div className='lefttextcontainer flex flex-col gap-6'>
            <p className='font-normal text-danger-text text-[14px] '>{strip.subtitle}</p>
            <h3 className='font-bold text-text text-[24px] '>{strip.title}</h3>
        </div>
        <p className='font-normal text-second-text text-[14px] '>{strip.description}</p>
    </PageContent>
  )
}

export default AboutStrip

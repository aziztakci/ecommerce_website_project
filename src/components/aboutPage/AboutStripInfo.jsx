import React from 'react'
import PageContent from '../../layout/PageContent';

function AboutInfoStrip({aboutContent, isLoading}) {  
    
    if (isLoading) return null;
    const infoStrip = aboutContent.infoStrip;
    
  return (
    <PageContent className='flex flex-col md:flex-row md:flex-wrap justify-center gap-25 md:gap-30  items-center px-10 py-20'>
      {infoStrip.map((e)=>(
        <div key={e.id} className='flex flex-col gap-5 text-center '>
            <h1 className='font-bold text-text text-[58px]'>{e.value}</h1>
            <h5 className='font-bold text-second-text text-[16px] '>{e.description}</h5>
        </div>
      ))}
    </PageContent>
  )
}

export default AboutInfoStrip

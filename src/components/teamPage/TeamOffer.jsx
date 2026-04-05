import React from 'react'
import PageContent from '../../layout/PageContent';

function TeamOffer({teamContent, isLoading}) {
    if (isLoading) return null;
    const offer = teamContent.offer;

  return (
    <PageContent className='flex flex-col items-center justify-center text-center pt-40 pb-20 px-10 gap-7.5'>
      <h2 className='font-bold text-text text-[40px] '>{offer.title}</h2>
      <p className='font-normal text-second-text text-[14px] whitespace-pre-line'>{offer.description}</p>
      <button className='font-bold text-light-text text-[14px] border bg-primary py-3.75 px-10 rounded-[5px]'>{offer.button}</button>
      <div className='flex gap-8.5 items-center'>
        {offer.icons.map((e)=>(
            <a key={e.id} href="#"><img src={e.image} alt="icon_image" /></a>
        ))}
      </div>
    </PageContent>
  )
}

export default TeamOffer

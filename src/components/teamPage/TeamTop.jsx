import React from 'react'
import PageContent from '../../layout/PageContent';

function TeamTop({teamContent, isLoading}) {
    if (isLoading) return null;
    const topContent = teamContent.top;

  return (
    <PageContent className='flex flex-col w-103.5 md:w-213.75 px-5 items-center text-center justify-center'>
        <h5 className='font-bold text-second-text text-[16px] '>{topContent.subtitle}</h5>
        <h1 className='font-bold text-text text-[58px] '>{topContent.title}</h1>
    </PageContent>
  )
}

export default TeamTop

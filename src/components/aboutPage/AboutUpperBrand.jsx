import React from 'react'
import PageContent from '../../layout/PageContent';

function AboutUpperBrand({aboutContent, isLoading}) {

    if (isLoading) return null;
    const upperBrand = aboutContent.upperBrandLogo;

  return (
    <PageContent className='flex flex-col text-center items-center gap-7.5 px-10 pt-20 pb-5 max-w-full bg-light-gray-1'>
        <h2 className='font-bold text-text text-[40px] '>{upperBrand.title}</h2>
        <p className='font-normal text-second-text text-[14px] whitespace-pre-line'>{upperBrand.description}</p>
    </PageContent>
  )
}

export default AboutUpperBrand

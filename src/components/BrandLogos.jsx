import React from 'react'
import { useHomeData } from '../hooks/useHomeData';

function BrandLogos() {

const { data: homeContent, isLoading } = useHomeData();
if (isLoading) return null; 
const brandContent = homeContent.brandLogos;

  return (
    <section className='w-full bg-light-gray-1 py-13'>
      <div className='flex flex-col max-w-262.5 gap-[60.21px] mx-auto justify-center lg:justify-between items-center md:flex-row md:flex-wrap xl:flex-nowrap '>
        {brandContent.map((e)=>(
            <img key={e.id} src={e.image} alt={e.name} />
        ))}
      </div>
    </section>
  )
}

export default BrandLogos

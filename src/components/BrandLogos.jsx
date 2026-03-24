import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import { GlobalContext } from '../contexts/GlobalContext';

function BrandLogos() {
    const { lang } = useContext(GlobalContext);
  const allData = useSelector((state) => state.global.data);
  const brandContent = allData[lang].brandLogos;
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

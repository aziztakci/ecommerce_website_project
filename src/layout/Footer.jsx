import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/globalContext';
import { useSelector } from 'react-redux';
import { Phone, MapPin, Mail  } from "lucide-react";

function Footer() {

   const { lang } = useContext(GlobalContext);
  const allData = useSelector((state) => state.global.data);
  const footerContent = allData[lang].footer;

  return (
    <footer className="bg-dark-background  pt-10 ">
      <div className='flex flex-row justify-between ml-48.75 mr-58.25 items-center'>
        <div>
          <h3 className="text-light-text text-[24px] font-montserrat font-bold">{footerContent.title}</h3>
          <p className='text-light-text text-[14px] font-montserrat font-normal'>{footerContent.subtitle}</p>
        </div>
        <button className='text-light-text text-[14px] font-montserrat font-bold   bg-primary px-10 py-3.75 rounded-[5px]'>{footerContent.button}</button>
      </div>

      <div className='flex ml-48.75 mt-10 gap-17.5' >
        {footerContent.sections.map((e)=> (
          <div key={e.id} className='flex flex-col gap-2.5'>
            <h5 className='text-light-text text-[16px] font-bold font-montserrat mb-2.5'>{e.title}</h5>
          
            {e.links.map((link,i)=> (
            <a key={i} href="#" className='text-light-text text-[14px] font-bold font-montserrat  '>{link}</a>
             ))}
          </div>
        ))}
        <div className='flex flex-col gap-2.5 pl-16 mb-12.25'>
          <h5 className='text-light-text text-[16px] font-bold font-montserrat mb-2.5'>{footerContent.getIn.title}</h5>
          <h6 className=' flex gap-2.5 text-light-text text-[14px] font-bold font-montserrat'><Phone />{footerContent.getIn.phone}</h6>
          <h6 className='flex gap-2.5 text-light-text text-[14px] font-bold font-montserrat'><MapPin />{footerContent.getIn.address}</h6>
          <h6 className='flex gap-2.5 text-light-text text-[14px] font-bold font-montserrat'><Mail />{footerContent.getIn.email}</h6>
        </div>
      </div>

      <div className='flex justify-between ml-48.75 mr-58.25 py-6.25'>
        <h6 className=' text-light-text text-[14px] font-bold font-montserrat'>{footerContent.copyright}</h6>
        
        <div className='flex gap-[21.5px] mr-7'>
        {footerContent.images.map((e)=> (
          <a key={e.id} href='#'><img src={e.img} alt={e.text} /></a>
        ))}
        </div>

      </div>

    </footer>
  )
}

export default Footer

import React from 'react'
import { AlarmClock,ChartArea,ChevronRight } from 'lucide-react';
import { useHomeData } from '../../hooks/useHomeData';

function FeaturedPosts() {

const { data: homeContent, isLoading } = useHomeData();
if (isLoading) return null; 
const postContent = homeContent.featuredPosts;


  return (
    <section className='w-full py-28'>
      <div className='flex flex-col max-w-266.25 mx-auto text-center'>
        <h6 className='font-montserrat font-bold text-primary text-[14px]'>{postContent.subtitle}</h6>
        <h2 className='font-montserrat font-bold text-text text-[40px] pb-20'>{postContent.title}</h2>
        <div className='flex flex-col md:flex-row justify-center items-center md:flex-wrap gap-7.5 md:gap-2.5 '>
            {postContent.posts.map((e)=>(
                <div key={e.id} >
                    <div className='relative w-82.5 h-75 md:w-87 md:h-75'>
                        <picture>
                            <source media="(max-width: 767px)" srcSet={e.mobileImage || e.image} />
                            <img src={e.image} alt={e.alt} className="absolute top-0 left-0 w-full h-full object-cover" />
                        </picture>
                        <h6 className='absolute top-0 left-0 leading-none font-montserrat font-bold text-light-text text-[14px] bg-danger mt-5 ml-5 py-1 px-2.5 rounded-[3px]'>{e.imageText}</h6>
                    </div>
                    <div className='flex flex-col text-start px-6.25 pt-6.25 pb-6.25 gap-2.5 shadow-light-drop'>
                        <div className='flex gap-3.75 '>
                        {e.selection.map((link)=>(
                            <a key={link.id} href="#" className={`font-montserrat font-normal text-[12px] ${link.text === "Google" ? "text-disabled-element": "text-second-text"}`}>{link.text}</a>
                        ))}                        
                        </div>
                         <h4 className='font-montserrat font-normal text-text text-[20px] w-61.75'>{e.title}</h4>
                         <p className='font-montserrat font-normal text-second-text text-[14px] w-70'>{e.description}</p>
                         <div className='flex justify-between'>
                            <small className='flex gap-1.25 items-center font-montserrat font-normal text-second-text text-[12px]'><span className='text-primary'><AlarmClock size={16} /></span> {e.date} </small>
                            <small className='flex gap-1.25 items-center font-montserrat font-normal text-second-text text-[12px]'><span className='text-secondary-1'><ChartArea size={16} /></span> {e.commentCount} </small>
                         </div>
                         <h6 className='flex font-montserrat font-bold text-second-text text-[14px] items-center'>{e.button}<span className='text-primary pl-[2.5px]'><ChevronRight size={20}/></span></h6>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedPosts

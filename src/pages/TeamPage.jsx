import React from 'react'
import { useLayoutData } from '../hooks/useLayoutData';
import PageContent from '../layout/PageContent';

function TeamPage() {
    const { data, isLoading } = useLayoutData();
      if (isLoading) return null;
      const teamContent = data.team;
  return (
    <PageContent className='flex flex-col max-w-272.5 px-5'>
      <div className='teamtextcontainer mx-auto flex flex-col items-center text-center max-w-77.5 md:max-w-152.5 my-28'>
        <h2 className='font-bold text-text text-[40px]'>{teamContent.title}</h2>
        <p className='font-normal text-second-text text-[14px] whitespace-pre-line'>{teamContent.description}</p>
      </div>
      <div className='teamimagecontainer flex flex-col md:flex-row md:flex-wrap text-center justify-center gap-20 pb-7.5'>
        {teamContent.members.map((e)=>(
            <div key={e.id} className='flex flex-col gap-2.5'>
                <img src={e.image} alt="member" />
                <h5 className='font-bold text-text text-[16px] mt-5'>{e.name}</h5>
                <h6 className='font-bold text-second-text text-14px'>{e.title}</h6>
                <nav>
                    <ul className='flex gap-[20.5px] justify-center'>
                        {teamContent.icons.map((icon)=>(
                            <a href="#"> <img key={icon.id} src={icon.image} alt='icon'/></a>
                        ))}
                    </ul>
                </nav>
            </div>
        ))}
      </div>
    </PageContent>
  )
}

export default TeamPage

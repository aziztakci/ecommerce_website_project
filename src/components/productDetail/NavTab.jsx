import React, { useState } from 'react'
import PageContent from '../../layout/PageContent';

function NavTab({dataTabs}) {
    const [activeTab, setActiveTab] = useState(dataTabs[0].id);
  return (
    <PageContent className='flex flex-col justify-center items-center max-w-272.5 px-5'>
      <nav>
            <ul className='flex gap-12 py-6'>
          {dataTabs.map((e) => {
            const isActive = activeTab === e.id;
            
            return (
              <li 
                key={e.id} 
                onClick={() => setActiveTab(e.id)}
                className={`cursor-pointer text-[14px] font-semibold transition-all duration-300 
                  ${isActive 
                    ? "text-text border-primary" 
                    : "text-second-text hover:text-text"
                  }`}
              >
                {e.name}
                {e.count && <span className="text-secondary-1 ml-2">{e.count}</span>}
              </li>
            );
          })}
        </ul>
        </nav>
        <div className="border border-light-gray-2 w-full"></div>{/* /br */}
    </PageContent>
  )
}

export default NavTab

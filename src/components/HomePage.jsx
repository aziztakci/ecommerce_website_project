import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/globalContext';
import { useSelector } from 'react-redux';

function HomePage() {

  const { lang } = useContext(GlobalContext);
  const allData = useSelector((state) => state.global.data);
  const footerContent = allData[lang].footer;
  
  return (
    <div>
      
    </div>
  )
}

export default HomePage

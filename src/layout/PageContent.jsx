import React from 'react'

function PageContent({children}) {
  return (
    <main className="w-full"> {/* TODO flex-grow kontrol et/footer ve her hangi bir homepage componenti bittikten sonra.... */}
      {children}
    </main>
  )
}

export default PageContent

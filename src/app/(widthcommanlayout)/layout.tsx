import Fooder from '@/components/shared/Fooder/Fooder'
import Navber from '@/components/shared/Navber'
import React from 'react'

function CommanLayout({children}:{children:React.ReactNode}) {
  return (
    <>
        <Navber/>
         <div className='min-h-screen'>
         {children}
         </div>
        <Fooder/>
    </>
  )
}

export default CommanLayout
import HeroSection from '@/components/ui/HomePage/HeroSection'
import Spceialist from '@/components/ui/HomePage/specialist'
import TopRatedDoctors from '@/components/ui/HomePage/TopRatedDoctor'
import React from 'react'

function RootHome() {
  return (
     <>
       <HeroSection/>
       <Spceialist/>
       <TopRatedDoctors/>
     </>
  )
}

export default RootHome
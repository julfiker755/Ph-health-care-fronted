"use client"
import DashboardDrawer from '@/components/dashboard/dashboardDrawer'
import { isLoggedIn } from '@/services/auth.services'
import { useRouter } from 'next/navigation'
import React from 'react'

function DashboardLayout({children}:{children:React.ReactNode}) {
  const router=useRouter()
  if(!isLoggedIn()){
    return router.push("/login")
  }
  return (
    <DashboardDrawer>
        {children}
    </DashboardDrawer>
  )
} 

export default DashboardLayout
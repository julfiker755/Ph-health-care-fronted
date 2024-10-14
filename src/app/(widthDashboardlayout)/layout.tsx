import DashboardDrawer from '@/components/dashboard/dashboardDrawer'
import React from 'react'

function DashboardLayout({children}:{children:React.ReactNode}) {
  return (
    <DashboardDrawer>
        {children}
    </DashboardDrawer>
  )
} 

export default DashboardLayout
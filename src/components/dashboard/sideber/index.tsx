import React, { useEffect, useState } from 'react'
import List from '@mui/material/List';
import { Box, Stack, Toolbar, Typography } from '@mui/material';
import Image from 'next/image';
import assets from '@/app/assets';
import Link from 'next/link';
import DrawerItems from '@/utils/drawerItems';
import { userRole } from '@/utils/role';
import SideberItems from '../sideberItems';
import { getUserInfo } from '@/services/auth.services';

function Sideber() {
    const [userRole,setUserRole]=useState("")
   
    useEffect(()=>{
        const {role}=getUserInfo() as any
        setUserRole(role)
    },[])
 

  return(
    <Box>
         <Stack 
         component={Link}
         href={"/"}
         sx={{
            py:'2px'
         }} direction={"row"} justifyContent={'center'} alignItems={'center'} gap={1}>
             <Image src={assets.svgs.logo} width={40} height={40} alt="image-all"/>
             <Typography variant='h6' component={"h1"}>
                   PH Health Care
             </Typography>
         </Stack>
         <List>
            {DrawerItems(userRole as userRole).map((item, index) => (
              <SideberItems key={index} item={item}></SideberItems>
            ))}
          </List>
    </Box>
  )
}

export default Sideber
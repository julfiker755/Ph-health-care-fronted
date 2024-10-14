import Link from 'next/link'
import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { DrawerItem } from '@/types';
import { usePathname } from 'next/navigation';

type ItemsProps = {
    item:DrawerItem,
}

function SideberItems({item}:ItemsProps) {
    const linkPath=`/dashboard/${item.path}`
    const pathname=usePathname()
  return (
     <Link href={linkPath}>
         <ListItem sx={{
            ...(pathname === linkPath ? {
                borderRight:"3px solid #1586FD",
                "& svg":{
                    color:"#1586FD"
                }
            }:{}
        )
         }}  disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                     {item.icon && <item.icon/>}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
     </Link>
  )
}

export default SideberItems
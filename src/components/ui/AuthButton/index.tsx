import React from 'react'
import { getUserInfo, removeUser } from "@/services/auth.services";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from '@mui/material';

function AuthButton() {
    const router=useRouter()
    const userInfo=getUserInfo("accessToken")
  
    const handleLogOut=()=>{
      router.refresh()
      removeUser()
    } 
  return (
    <>
     {userInfo ?
           <>
             <Button onClick={()=>handleLogOut()} color="error">LogOut</Button>
           </>
          : <>
            <Button component={Link} href="/login">Login</Button>
              <Button component={Link} sx={{
                marginLeft:'7px'
              }} href="/register">Register</Button>
          </>}
    </>
  )
}

export default AuthButton
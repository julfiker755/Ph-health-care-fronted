"use client"
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import assets from '../assets'
import Link from 'next/link'
import { FieldValues} from 'react-hook-form'
import { loginUser } from '@/services/actions/loginUser'
import { storeUserInfo } from '@/services/auth.services'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import PHform from '@/components/form/PHform'
import PHformInput from '@/components/form/PHformInput'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


export const validationSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long")
})



function LoginPage() {
  const router=useRouter()


  const handleLogin=async(values:FieldValues) => {
    try {
     const res=await loginUser(values)
     if(res?.data?.accessToken){
      toast.success("User Login Successfull")
      router.push("/")
      storeUserInfo({accessToken:res?.data?.accessToken})
     }
    } catch (error:any) {
      console.error("Error during registration:", error);
    }
  }


  return (
    <Container sx={{
      padding:"50px"
    }}>
         <Stack sx={{
           justifyContent:'center',
           alignItems:'center',
           marginTop:'70px'
         }}>
       <Box sx={{
          maxWidth:600,
          width:"100%",
          boxShadow:1,
          borderRadius:1,
          p:4,
       }}>
          <Stack sx={{
           justifyContent:'center',
           alignItems:'center'
         }}>
          <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="image"></Image>
          </Box>
          <Box>
              <Typography variant='h6' fontWeight={600}>Login PH Health</Typography>
          </Box>

          </Stack>
          <Box>
          <PHform onSubmit={handleLogin} 
          resolver={zodResolver(validationSchema )}
          defaultValues={{
            email:"",
            password:""
          }}
          >
              <Grid container spacing={2}>
                  <Grid item md={6} my={1}> 
                  <PHformInput  name="email" label="Email" type='email'   size='small' fullWidth={true} />
                  </Grid>
                  <Grid item md={6} my={1}> 
                  <PHformInput name="password"  label="Password" size='small' fullWidth={true} />
                  </Grid>
              </Grid>
              <Button type='submit' fullWidth={true} sx={{
                margin:'10px 0'
              }}>Login</Button>
              </PHform>
              <Box sx={{
                display:'flex',
                justifyContent:'center'
              }}>
              <Typography component={"p"}>Don&apos;t have an account <Link href={"/register"}>-Register-</Link></Typography>
          </Box>
          </Box>
       </Box>
         </Stack>
    </Container>
  )
}



export default LoginPage
"use client"
import { Box, Button, Container, Grid, Stack,Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import assets from '../assets'
import Link from 'next/link'
import {FieldValues } from "react-hook-form"
import { modifyPayload } from '@/utils/modifyPayload'
import { registerPatient } from '@/services/actions/registerPatient'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { loginUser } from '@/services/actions/loginUser'
import { storeUserInfo } from '@/services/auth.services'
import PHform from '@/components/form/PHform'
import PHformInput from '@/components/form/PHformInput'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


export const patientSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  contactNumber: z.string().regex(/^\d{11}$/, "Please provide a valid 11-digit phone number"),
  address: z.string().min(1, "Address is required"),
})

export const formSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters long"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  contactNumber: z.string().regex(/^\d{11}$/, "Please provide a valid 11-digit phone number"),
  address: z.string().min(1, "Address is required"),
})

const defaultValues = {
  password: "",
  name: "",
  email: "",
  contactNumber: "",
  address: ""
}

function RegisterPage() {
  const router = useRouter()
  
  const handleRegister = async (values: FieldValues) => {
    const patientData = {
      name: values.name,
      email: values.email,
      contactNumber: values.contactNumber,
      address: values.address
    }
    const data = modifyPayload({ patient: patientData, password: values.password })
    try {
      const res = await registerPatient(data)
      toast.success(res.message)
      if (res?.data?.id) {
        // login the user
        const userRes = await loginUser({ email: values.email, password: values.password })
        if (userRes?.data?.accessToken) {
          router.push("/dashboard")
          storeUserInfo({ accessToken: userRes?.data?.accessToken })
        }
      }
    } catch (error: any) {
      console.error("Error during registration:", error);
      toast.error(error.message || "Registration failed");
    }
  }

  return (
    <Container sx={{
      padding: "50px"
    }}>
      <Stack sx={{
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Box sx={{
          maxWidth: 600,
          width: "100%",
          boxShadow: 1,
          borderRadius: 1,
          p: 4,
        }}>
          <Stack sx={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Box>
              <Image src={assets.svgs.logo} width={50} height={50} alt="image" />
            </Box>
            <Box>
              <Typography variant='h6' fontWeight={600}>Patient Register</Typography>
            </Box>
          </Stack>
          <Box>
            <PHform 
              onSubmit={handleRegister}
              resolver={zodResolver(formSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} my={1}> 
                  <PHformInput name="name" label="Name" size='small' fullWidth={true} />
                </Grid>
                <Grid item xs={12} sm={6} my={1}> 
                  <PHformInput name="email" label="Email" type='email' size='small' fullWidth={true} />
                </Grid>
                <Grid item xs={12} sm={6} my={1}> 
                  <PHformInput name="password" label="Password" type='password' size='small' fullWidth={true} />
                </Grid>
                <Grid item xs={12} sm={6} my={1}> 
                  <PHformInput name="contactNumber" label="Contact Number" type='tel' size='small' fullWidth={true} />
                </Grid>
                <Grid item xs={12} sm={6} my={1}> 
                  <PHformInput name="address" label="Address" size='small' fullWidth={true} />
                </Grid>
              </Grid>
              <Button type='submit' fullWidth={true} sx={{
                margin:'10px 0'
              }}>Register</Button>
              </PHform>
              <Box sx={{
                display:'flex',
                justifyContent:'center'
              }}>
              <Typography component={"p"}>Do you already have an account <Link href={"/login"}>-Login-</Link></Typography>
          </Box>
          </Box>
       </Box>
         </Stack>
    </Container>
  )
}

export default RegisterPage
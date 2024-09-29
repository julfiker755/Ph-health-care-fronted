import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import facebookImage from '@/app/assets/landing_page/facebook.png'
import instagramImage from '@/app/assets/landing_page/instagram.png'
import twitterImage from '@/app/assets/landing_page/twitter.png'
import linkedinImage from '@/app/assets/landing_page/linkedin.png'
import Image from 'next/image'

function Fooder() {
  return (
    <Box bgcolor="rgb(17,26,34)" py={5}>
        <Container >
          <Stack direction={"row"} gap={4} justifyContent={"center"}>
               <Typography color="#fff">Consultation</Typography>
               <Typography color="#fff">Health Plans</Typography>
               <Typography color="#fff">Medicine</Typography>
               <Typography color="#fff">Diagnostics</Typography>
               <Typography color="#fff">NGOS</Typography>
          </Stack>
          <Stack direction={"row"} gap={4} justifyContent={"center"} py={3}>
               <Image src={facebookImage} width={40} height={40} alt="image"/>
               <Image src={instagramImage} width={40} height={40} alt="image"/>
               <Image src={twitterImage} width={40} height={40} alt="image"/>
               <Image src={linkedinImage} width={40} height={40} alt="image"/>
          </Stack>
          <div className='border-b-[2px] border-dashed'></div>
          <Stack direction={"row"} gap={4} justifyContent={"space-between"} py={3}>
               <Typography component={"p"} color='white'>
                  &copy;2024 Ph HealthCare. All Rights Reserved.
               </Typography>
            <Typography variant="h4" color='white' component="h2" fontWeight={600}>
          P<Box component={"span"} color={"primary.main"}>H</Box> Health Care
        </Typography>
               <Typography component={"p"} color='white'>
               Privacy Policy! Terms & Conditions
               </Typography>
          </Stack>
        </Container>
    </Box>
  )
}

export default Fooder
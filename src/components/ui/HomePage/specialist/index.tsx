import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

async function Spceialist() {
    const res=await fetch(`${process.env.NEXT_PUBLIC_URL}/specialties/all`,{cache:'no-store'})
    const {data:specialist}=await res.json()

    
  return (
    <Container>
          <Box sx={{
            margin:"40px 0px",
            textAlign:'center'
          }}>
               <Box sx={{
                textAlign:"left"
               }}>
                  <Typography variant='h4' fontWeight={400}>Explore Treatments Across Specialties</Typography>
                  <Typography component={"p"} fontWeight={300} fontSize={18}>Experienced Doctors Across All Specialties</Typography>
               </Box>
               <Stack direction={"row"} gap={4} mt={5}>
                    {specialist.map((item:any)=>(
                        <Box sx={{
                            flex:1,
                            width:"150px",
                            backgroundColor:"rgba(245,245,245,1)",
                            border:"1px solid rgba(250,250,250,1)",
                            borderRadius:"10px",
                            textAlign:'center',
                            padding:"24px 10px",
                            "& img":{
                                width:"50px",
                                height:"50px",
                                margin:"0 auto"
                            },
                            "&:hover":{
                                border:"1px solid blue",
                            }
                        }} key={item.id}>
                             <Image src={item?.icon} width={100} height={100}  alt="lastimage"/>
                             <Typography component={"p"} mt={2} fontWeight={600} fontSize={18}>{item.title}</Typography>
                        </Box>
                    ))}
               </Stack>
               <Button sx={{
                marginTop:'15px'
               }} variant='outlined'>view All</Button>
          </Box>
    </Container>
  )
}

export default Spceialist
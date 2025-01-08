import { Box, Button, Container, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import assert from '@/app/assets'



function HeroSection() {
  return (
     <Container sx={{
        display:"flex",
        direction:"row",
        my:16
     }}>
         <Box sx={{
            flex:1,
            position:"relative"
         }}>
            <Box sx={{
                position:"absolute",
                width:"700px",
                top:"-90px",
                left:"-120px"
            }}>
                 <Image src={assert.svgs.grid} width={100} height={100} alt='grid'/>
            </Box>
            <Typography variant='h3' component={"h1"} fontWeight={600} >Healthier Hearts</Typography>
            <Typography variant='h3' component={"h1"} fontWeight={600} >Come From</Typography>
            <Typography color="primary.main" variant='h3' component={"h1"} fontWeight={600} >Preventive Care</Typography>
            <Typography sx={{
                my:"10px"
            }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non recusandae assumenda repellendus nihil, consequuntur itaque. Minus voluptatem accusantium tenetur iusto, in quas consequuntur culpa vero nemo maxime perferendis quam maiores.
            </Typography>
            <Button>Make Appointment</Button>
            <Button variant='outlined' sx={{
                marginLeft:"10px"
            }}>Contact Us</Button>
         </Box>
         <Box sx={{
            p:1,
            flex:1,
            display:"flex",
            justifyContent:"center",
            position:"relative",
            mt:0
         }}>
          <Box sx={{
            position:"absolute",
            left:"200px",
            top:"-30px"
          }}>
              <Image src={assert.svgs.arrow} width={100} height={100} alt="arrow"/>
          </Box>
          <Box sx={{
                display:"flex",
                gap:2
            }}>
               <Box sx={{mt:7}}><Image src={assert.images.doctor1} width={240} height={380} alt="doctor"/></Box>
               <Box><Image src={assert.images.doctor2} width={240} height={350} alt="doctor"/></Box>
            </Box>
            <Box sx={{
                position:'absolute',
                top:"220px",
                left:"150px"
            }}>
                 <Image width={240} height={240} src={assert.images.doctor3} alt="doctor3"/>
            </Box>
            <Box sx={{
                position:'absolute',
                bottom:"-50px",
                right:"10px",
                zIndex:"-1"
            }}>
                 <Image width={180} height={180} src={assert.images.stethoscope} alt="doctor3"/>
            </Box>
         </Box>
     </Container>
  )
}

export default HeroSection
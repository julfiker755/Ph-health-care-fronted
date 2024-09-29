"use client"
import { Box,Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";


function Navber() {
  const  AuthButton = dynamic(() => import('@/components/ui/AuthButton'), { ssr: false })
  return (
    <Container>
      <Stack py={1} direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <Typography variant="h4" component="h2" fontWeight={600}>
          P<Box component={"span"} color={"primary.main"}>H</Box> Health Care
        </Typography>
          <Stack direction={"row"} gap={4} justifyContent={"space-between"}>
               <Typography>Consultation</Typography>
               <Typography>Health Plans</Typography>
               <Typography>Medicine</Typography>
               <Typography>Diagnostics</Typography>
               <Typography>NGOS</Typography>
          </Stack>
         <Box>
            <AuthButton/>
         </Box>
      </Stack>
    </Container>
  );
}

export default Navber;

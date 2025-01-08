"use client"
import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import DoctorModal from './components/DoctorModal'
import { useGetAllDoctorQuery } from '@/redux/api/doctorApi';

function Doctors() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const data=useGetAllDoctorQuery({})
    console.log(data)

  return (
    <Box>
         <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Button onClick={() => setIsModalOpen(prevState => !prevState)}>Create a Doctors</Button>
            <DoctorModal open={isModalOpen} setOpen={setIsModalOpen}/>

            <TextField size='small' placeholder='search Doctors'/>
        </Stack>
    </Box>
  )
}

export default Doctors
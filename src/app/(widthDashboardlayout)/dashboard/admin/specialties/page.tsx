"use client"
import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import SpceialishModal from './components/SpceialishModal'
import { useGetAllSpceialtiesQuery } from '@/redux/api/specialtiesApi';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

function Specialties() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {data,isLoading}=useGetAllSpceialtiesQuery({})
  console.log(data)
  const columns: GridColDef[] = [
    { field: 'title', headerName: 'title', width:150 },
    // {field:"icon",headerName:"icon",width:150,renderCell:({row})=>{

    // }}
  ];
  
 
  return (
    <Box>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Button onClick={() => setIsModalOpen(prevState => !prevState)}>
                Create a Specialties
            </Button>
            <SpceialishModal open={isModalOpen} setOpen={setIsModalOpen}></SpceialishModal>
            <TextField size='small' placeholder='search Specialties'/>
        </Stack>
       {!isLoading ? <Box>
        <DataGrid
        rows={data}
        columns={columns}
      />
        </Box>: <h1>Loading..</h1>}
    </Box>
  )
}

export default Specialties
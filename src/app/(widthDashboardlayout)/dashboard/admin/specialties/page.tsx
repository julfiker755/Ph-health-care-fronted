"use client"
import { Box, Button, IconButton, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import SpceialishModal from './components/SpceialishModal'
import { useDeleteSpceialtyMutation, useGetAllSpceialtiesQuery } from '@/redux/api/specialtiesApi';
import { DataGrid, GridColDef, GridDeleteIcon } from '@mui/x-data-grid';
import Image from 'next/image';
import { toast } from 'sonner';

function Specialties() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {data,isLoading}=useGetAllSpceialtiesQuery({})
  const [deleteSpceialty]=useDeleteSpceialtyMutation()
 
  // hanlde delete
  const hanldeDelete=async(id:string)=>{
    try{
      const res=await deleteSpceialty(id).unwrap()
      if(res?.id){
        toast.success("Specialty deleted Successfully!!!s")
      }
    }catch(err:any){
    console.log(err?.message)
    }
  }


  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Title', width:400 },
    {field:"icon",headerName:"Icon",flex:1, renderCell:({row})=>{
      return <Box my={2}>
        <Image  src={row.icon} width={30} height={20} alt="row"/>
      </Box>
    }},
    {field:"action",headerName:"Action",flex:1,headerAlign:'center',align:'center', renderCell:({row})=>{
      return <IconButton onClick={()=>hanldeDelete(row?.id)} aria-label="delete" size="small">
      <GridDeleteIcon fontSize="small" />
    </IconButton>
    }}
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
       {!isLoading ? <Box my={2}>
        <DataGrid
        rows={data}
        columns={columns}
      />
        </Box>: <h1>Loading..</h1>}
    </Box>
  )
}

export default Specialties
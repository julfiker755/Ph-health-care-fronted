"use client"
import { Box, Button, IconButton, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import DoctorModal from './components/DoctorModal'
import { useDeleteDoctorMutation, useDeleteSoftDoctorMutation, useGetAllDoctorQuery } from '@/redux/api/doctorApi';
import { DataGrid, GridColDef, GridDeleteIcon } from '@mui/x-data-grid';
import { useDebonunced } from '@/redux/hooks';
import { toast } from 'sonner';


function Doctors() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const query:Record<string,any>={}
  const [searchTerm,setSearchTerm]=useState<string>("")
//  debounce timer
  const debouncedTerm=useDebonunced({
    searchQuery:searchTerm,
    delay:600
  })
 
  if(!!debouncedTerm){
    query["search"]=searchTerm
  }

  const {data,isLoading}=useGetAllDoctorQuery({...query})
  const [deleteSoftDoctor]=useDeleteSoftDoctorMutation()
  const doctors=data?.doctors.data
  const mata=data?.doctors.meta

 // hanlde delete
const hanldeDelete=async(id:string)=>{
   const res=await deleteSoftDoctor(id).unwrap()
   if(res?.id){
    toast.success("doctor soft delete Successfully")
  }
}


  const columns: GridColDef[] = [
    {field: 'name', headerName: 'Name',flex:1},
    {field: 'email', headerName: 'Email',flex:1},
    {field: 'contactNumber', headerName: 'ContactNumber',flex:1},
    {field: 'gender', headerName: 'Gender',flex:1},
    {field:"action",headerName:"Action",flex:1,headerAlign:'center',align:'center', renderCell:({row})=>{
      return <IconButton onClick={()=>hanldeDelete(row?.id)} aria-label="delete" size="small">
      <GridDeleteIcon fontSize="small" />
    </IconButton>
    }}
  ];

  return (
    <Box>
         <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Button onClick={() => setIsModalOpen(prevState => !prevState)}>Create a Doctors</Button>
            <DoctorModal open={isModalOpen} setOpen={setIsModalOpen}/>

            <TextField onChange={(e)=>setSearchTerm(e.target.value)} size='small' placeholder='search Doctors'/>
        </Stack>
        {/* grid data */}
        {!isLoading ? <Box my={2}>
                <DataGrid
                rows={doctors}
                columns={columns}
                hideFooter={false}
              />
        </Box>: <h1>Loading..</h1>}
    </Box>
  )
}

export default Doctors
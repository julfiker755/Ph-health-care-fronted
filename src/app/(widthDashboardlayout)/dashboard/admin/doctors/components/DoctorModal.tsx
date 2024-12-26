import PHFileUpload from '@/components/form/PHfileUploader'
import PHform from '@/components/form/PHform'
import PHformInput from '@/components/form/PHformInput'
import PHFullScreenModal from '@/components/shared/PhModal/PhFullScreenModal'
import PHModal from '@/components/shared/PhModal/PhModal'
import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { FieldValues } from 'react-hook-form'
import { toast } from 'sonner'

type TProps = {
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}



export default function DoctorModal({ open,setOpen}:TProps) {

const defaultValues={
    doctor:{
        currenWorkingPlace:"",
        designation:"",
        profilePhoto:""
    },
    password:""
}

function hanldeFormSubmit(){
    console.log("submit")
}

  return <PHFullScreenModal open={open} setOpen={setOpen} title="Create a Doctor">
      <PHform onSubmit={hanldeFormSubmit}
      defaultValues={defaultValues}
      >
         <Grid container spacing={2} sx={{my:5}}>
           <Grid xs={12} sm={12} md={4}>
               <PHformInput name="doctor.name" label="Name"/>
           </Grid>
           <Grid xs={12} sm={12} md={4}>
               <PHformInput name="doctor.email" label="Email"/>
           </Grid>
         </Grid>
         <Button type='submit' sx={{mt:2}}>Create</Button>
      </PHform>
  </PHFullScreenModal>
}

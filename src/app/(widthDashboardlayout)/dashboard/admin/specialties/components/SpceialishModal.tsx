import PHFileUpload from '@/components/form/PHfileUploader'
import PHform from '@/components/form/PHform'
import PHformInput from '@/components/form/PHformInput'
import PHModal from '@/components/shared/PhModal/PhModal'
import { useCreateSpceialtyMutation } from '@/redux/api/specialtiesApi'
import { modifyPayload } from '@/utils/modifyPayload'
import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { FieldValues } from 'react-hook-form'
import { toast } from 'sonner'

type TProps = {
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}



export default function SpceialishModal({ open,setOpen}:TProps) {
  const [createSpceialty]=useCreateSpceialtyMutation()

  const hanldeFormSubmit=async(values:FieldValues)=>{
    const data=modifyPayload(values)
    try{
      console.log(data)
      const res=await createSpceialty(data).unwrap()
      if(res?.id){
        toast.success("Spceialty Create Successfull")
        setOpen(false)
      }
      console.log(res)
    }catch(err:any){
     console.log(err?.message)
    }
 }


  return <PHModal open={open} setOpen={setOpen} title="Create a Specialish">
      <PHform onSubmit={hanldeFormSubmit}
         
      >
         <Grid container spacing={2}>
           <Grid  item md={6}>
               <PHformInput name="title" label="Title"/>
           </Grid>
           <Grid  item md={6}>
               <PHFileUpload name="file" label="Upload file"/>
           </Grid>
         </Grid>
         <Button type='submit' sx={{mt:2}}>Create</Button>
      </PHform>
  </PHModal>
}

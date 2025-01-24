import PHdatePicker from '@/components/form/PHdatePicker'
import PHform from '@/components/form/PHform'
import PHTimePicker from '@/components/form/PHTimePicker'
import PHModal from '@/components/shared/PhModal/PhModal'
import { useCreateScheduleMutation } from '@/redux/api/scheduleApi'
import { dateFormatter } from '@/utils/dateFormatter'
import { timeFormatter } from '@/utils/timeFormatter'
import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { FieldValues } from 'react-hook-form'
import { toast } from 'sonner'

type TProps = {
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}



export default function ScheduleModal({ open,setOpen}:TProps) {
  const [createSchedule]=useCreateScheduleMutation()
  const hanldeFormSubmit=async(values:FieldValues)=>{
    values.startDate=dateFormatter(values.startDate)
    values.endDate=dateFormatter(values.endDate)
    values.startTime=timeFormatter(values.startTime)
    values.endTime=timeFormatter(values.endTime)
    


     const scheduledata ={
      startDate:values.startDate,
      endDate:values.endDate,
      startTime:values.startTime,
      endTime:values.endTime
     }


     try{
      const result=await createSchedule(scheduledata)
      console.log(result)
     if(!!result?.data?.length){
       toast.success("Schedule create Successfull")
       setOpen(false)
     }
 

     }catch(err:any){
      console.log(err)
     }
   
 }


  return <PHModal open={open} setOpen={setOpen} title="Create a Schedule">
      <PHform onSubmit={hanldeFormSubmit}
         
      >
         <Grid container spacing={2}>
           <Grid  item md={6}>
           <PHdatePicker name="startDate" label='Start Date'/>
           </Grid>
           <Grid  item md={6}>
           <PHdatePicker name="endDate" label='End Date'/>
           </Grid>
           <Grid  item md={6}>
             <PHTimePicker name="startTime" label='Start Time'></PHTimePicker>
           </Grid>
           <Grid  item md={6}>
             <PHTimePicker name="endTime" label='End Time'></PHTimePicker>
           </Grid>
         </Grid>
         <Button type='submit' sx={{mt:2}}>Create</Button>
      </PHform>

  </PHModal>
}

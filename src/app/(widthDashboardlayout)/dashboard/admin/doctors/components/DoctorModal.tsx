import PHFileUpload from '@/components/form/PHfileUploader'
import PHform from '@/components/form/PHform'
import PHformInput from '@/components/form/PHformInput'
import PHSelectField from '@/components/form/PHFromSelectField'
import PHFullScreenModal from '@/components/shared/PhModal/PhFullScreenModal'
import PHModal from '@/components/shared/PhModal/PhModal'
import { useCreateDoctorMutation } from '@/redux/api/doctorApi'
import { Gender } from '@/types'
import { modifyPayload } from '@/utils/modifyPayload'
import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { FieldValues } from 'react-hook-form'
import { toast } from 'sonner'

type TProps = {
    open:boolean,
    setOpen:React.Dispatch<React.SetStateAction<boolean>>
}



export default function DoctorModal({ open,setOpen}:TProps) {
const [createDoctor]=useCreateDoctorMutation()

    const defaultValues = {
        doctor: {
          email: "",
          name: "",
          contactNumber: "",
          address: "",
          registrationNumber: "",
          gender: "" || "MALE",
          experience: 0,
          appointmentFee: 0,
          qualification: "",
          currentWorkingPlace: "",
          designaton: "",
          profilePhoto: "",
        },
        password: "",
      };

async function hanldeFormSubmit(values:FieldValues){
    values.doctor.experience=Number(values.doctor.experience)
    values.doctor.appointmentFee=Number(values.doctor.appointmentFee)

    const data=modifyPayload(values)
   try{
       const res=await createDoctor(data).unwrap()
       if(res.id){
         toast.success("Doctor create Successfull")
         setOpen(false)
       }
   }catch(err:any){
     console.log(err)
   }
}

  return <PHFullScreenModal open={open} setOpen={setOpen} title="Create a Doctor">
      <PHform onSubmit={hanldeFormSubmit}
      defaultValues={defaultValues}
      >
         <Grid container spacing={2} sx={{ my: 5 }}>
          <Grid item xs={12} sm={12} md={4}>
            <PHformInput
              name="doctor.name"
              label="Name"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHformInput
              name="doctor.email"
              type="email"
              label="Email"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHformInput
              name="password"
              type="password"
              label="Password"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHformInput
              name="doctor.contactNumber"
              label="Contract Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHformInput
              name="doctor.address"
              label="Address"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHformInput
              name="doctor.registrationNumber"
              label="Registration Number"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHformInput
              name="doctor.experience"
              type="number"
              label="Experience"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHSelectField
              items={Gender}
              name="doctor.gender"
              label="Gender"
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHformInput
              name="doctor.appointmentFee"
              type="number"
              label="AppointmentFee"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHformInput
              name="doctor.qualification"
              label="Qualification"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHformInput
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <PHformInput
              name="doctor.designaton"
              label="Designation"
              fullWidth={true}
              sx={{ mb: 2 }}
            />
          </Grid>
        </Grid>

        <Button type="submit">Create</Button>
      </PHform>
  </PHFullScreenModal>
}

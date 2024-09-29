import { SxProps, TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'


type inputProps={
    name:string,
    label?:string,
    type?:string,
    size?:"small" | "medium",
    fullWidth?:boolean,
    sx?:SxProps
}

function PHformInput({name,label,type="text",size="small",fullWidth,sx}:inputProps) {
    const {control}=useFormContext()
  return (
    <Controller
    control={control}
    name={name}
    render={({ field, formState: { errors } }) => (
       <TextField
       {...field}
       label={label}
       sx={{...sx}}
       variant="outlined" 
       size={size}
       type={type}
       fullWidth={fullWidth}
       error={!!errors[name]}
       helperText={errors[name]?.message as string}
       >

       </TextField>
    )}
  />
  )
}

export default PHformInput


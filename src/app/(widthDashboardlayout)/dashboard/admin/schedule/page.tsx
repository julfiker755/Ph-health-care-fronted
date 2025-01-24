"use client"
import { Box, Button, IconButton, Stack, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ScheduleModal from './components/ScheduleModal';
import { useGetAllScheduleQuery } from '@/redux/api/scheduleApi';
import { DataGrid, GridColDef, GridDeleteIcon } from '@mui/x-data-grid';
import { dateFormatter } from '@/utils/dateFormatter';
import dayjs from 'dayjs';


function Schedule() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [allSchedule, setAllSchedule] = useState<any>([])
  const {data,isLoading}=useGetAllScheduleQuery({})
  const schedules=data?.schedule.data


  useEffect(() => {
    const updateData = schedules?.map(
       (schedule:any, index: number) => {
          return {
             sl: index + 1,
             id: schedule?.id,
             startDate: dateFormatter(schedule.startDateTime),
             endDate: dateFormatter(schedule.endDateTime),
             startTime: dayjs(schedule?.startDateTim).format('hh:mm a'),
             endTime: dayjs(schedule?.endDateTime).format('hh:mm a'),
          };
       }
    );
    setAllSchedule(updateData);
 }, [schedules]);
  
  const hanldeDelete=(id:string)=>{
    console.log(id)
  }



  const columns: GridColDef[] = [
    { field: 'sl', headerName: 'SL' },
    { field: 'startDate', headerName: 'Start Date', flex: 1 },
    { field: 'endDate', headerName: 'End Date', flex: 1 },
    { field: 'startTime', headerName: 'Start Time', flex: 1 },
    { field: 'endTime', headerName: 'End Time', flex: 1 },
    {
       field: 'action',
       headerName: 'Action',
       flex: 1,
       headerAlign: 'center',
       align: 'center',
       renderCell: ({ row }) => {
          return (
             <IconButton aria-label='delete'>
                <GridDeleteIcon sx={{ color: 'red' }} />
             </IconButton>
          );
       },
    },
 ];
  return (
    <Box>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Button onClick={() => setIsModalOpen(prevState => !prevState)}>
                Create a Schedule
            </Button>
            <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen}></ScheduleModal>
            <TextField size='small' placeholder='search Specialties'/>
        </Stack>
       {!isLoading ? <Box my={2}>
        <DataGrid
        rows={allSchedule}
        columns={columns}
        hideFooter={true}
      />
        </Box>: <h1>Loading..</h1>}
    </Box>
  )
}

export default Schedule
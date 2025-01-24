import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const scheduleApi=baseApi.injectEndpoints({
    endpoints:(build)=>({
        createSchedule:build.mutation({
            query:(data)=>({
                url:"schedule",
                method:"POST",
                data,
            }),
            invalidatesTags:[tagTypes.schedule]
        }),
        getAllSchedule:build.query({
            query:(arg:Record<string,any>)=>({
                url:"schedule",
                method:"GET",
                params:arg
            }),
        transformResponse:(response:any,meta:any)=>{
            return {
                schedule:response,
                meta
            }
        },
         providesTags:[tagTypes.schedule]
        }),
    })
})

export const {useCreateScheduleMutation,useGetAllScheduleQuery}=scheduleApi
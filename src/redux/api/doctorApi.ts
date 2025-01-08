import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const doctorApi=baseApi.injectEndpoints({
    endpoints:(build)=>({
        createDoctor:build.mutation({
            query:(data)=>({
                url:"doctor/create",
                method:"POST",
                contentType:"multipart/form-data",
                data,
            }),
            invalidatesTags:[tagTypes.doctor]
        }),
        getAllDoctor:build.query({
            query:(arg:Record<string,any>)=>({
                url:"doctor",
                method:"GET",
                params:arg
            }),
        transformResponse:(response:any,meta:any)=>{
            return {
                doctors:response,
                meta
            }
        },
         providesTags:[tagTypes.doctor]
        }),
        deleteDoctor:build.mutation({
            query:(id)=>({
                url:`specialties/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:[tagTypes.doctor]
        }),
    })
})

export const {useCreateDoctorMutation,useGetAllDoctorQuery,useDeleteDoctorMutation}=doctorApi
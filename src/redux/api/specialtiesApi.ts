import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const specialtiesApi=baseApi.injectEndpoints({
    endpoints:(build)=>({
        createSpceialty:build.mutation({
            query:(data)=>({
                url:"specialties",
                method:"POST",
                contentType:"multipart/form-data",
                data,
            }),
            invalidatesTags:[tagTypes.specialties]
        }),
        getAllSpceialties:build.query({
            query:()=>({
                url:"specialties/all",
                method:"GET",
            }),
         providesTags:[tagTypes.specialties]
        }),
        deleteSpceialty:build.mutation({
            query:(id)=>({
                url:`specialties/${id}`,
                method:"DELETE",
            }),
            invalidatesTags:[tagTypes.specialties]
        }),
    })
})

export const {useCreateSpceialtyMutation,useGetAllSpceialtiesQuery,useDeleteSpceialtyMutation}=specialtiesApi
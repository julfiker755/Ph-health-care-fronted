import { instance as axiosInstance } from "@/helpers/axios/axiosInstance"
import { decodedToken } from "@/utils/jwt"
import { getToLocalStroage, removeToLocalStroage, setToLocalStroage } from "@/utils/local-storage"

export const storeUserInfo=({accessToken}:{accessToken:string})=>{
  return setToLocalStroage("accessToken",accessToken)
}

export const getUserInfo=(key?:string)=>{
    const authToken= getToLocalStroage(key || "accessToken")
    if(authToken){
        const decodedData:any=decodedToken(authToken)
        return{
            ...decodedData,
            role: decodedData.role.toLowerCase()
        }
    }
}


export const isLoggedIn=()=>{
    const authToken= getToLocalStroage("accessToken")
    if(authToken){
        return !!authToken
    }
}

export const removeUser=()=>{
   return removeToLocalStroage("accessToken")
}

export const getNewAccessToken=async()=>{
    return await  axiosInstance ({
      url:"http://localhost:5000/api/v1/auth/refresh-token",
      method:"POST",
      headers:{"Content-Type":"application/json"},
      withCredentials:true
    })
}
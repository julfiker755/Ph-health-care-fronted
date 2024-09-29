import { decodedToken } from "@/utils/jwt"
import { getToLocalStroage, removeToLocalStroage, setToLocalStroage } from "@/utils/local-storage"

export const storeUserInfo=({accessToken}:{accessToken:string})=>{
  return setToLocalStroage("accessToken",accessToken)
}

export const getUserInfo=(key:string)=>{
    const authToken= getToLocalStroage(key)
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
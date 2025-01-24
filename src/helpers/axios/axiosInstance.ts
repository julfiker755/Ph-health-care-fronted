import { getNewAccessToken } from "@/services/auth.services";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
import { getToLocalStroage, setToLocalStroage } from "@/utils/local-storage";
import axios from "axios";



const instance=axios.create()
instance.defaults.headers.post["Content-Type"]="application/json"
instance.defaults.headers["Accept"]="application/json"
instance.defaults.timeout=60000


instance.interceptors.request.use(function (config) {
    const accessToken=getToLocalStroage("accessToken")

    if(accessToken){
        config.headers.Authorization=accessToken
    }

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(
  //@ts-ignore
  function (response) {
  const responseObject:ResponseSuccessType={
    data:response?.data?.data,
    meta:response?.data.meta,


  }
    return responseObject;
  }, async function (error:any) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const config=error.config
    console.log(config)

    if(error?.response?.status === 500 && !config?.sent){
      config.sent=true
      const response=await getNewAccessToken()
      const accessToken=response?.data.accessToken
      config.headers["Authorization"]=accessToken
      setToLocalStroage("accessToken",accessToken)
      return instance(config)
    }else {
      const responseObject:IGenericErrorResponse={
        statusCode:error?.response?.data?.statusCode || 500,
        message:error?.response?.data?.message || "something went wrong",
        errorMessages:error?.response?.data?.message
      }
      return responseObject
    }
    
    // return Promise.reject(error);
  });



export {instance}
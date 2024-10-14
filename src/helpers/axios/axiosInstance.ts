import { getToLocalStroage } from "@/utils/local-storage";
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
instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });



export {instance}
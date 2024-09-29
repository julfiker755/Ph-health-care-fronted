export const setToLocalStroage=(key:string,token:string)=>{
  if(!key || typeof window=== "undefined"){
    return ""
  }

  return localStorage.setItem(key,token)
}


export const getToLocalStroage=(key:string)=>{
  if(!key || typeof window=== "undefined"){
    return ""
  }

  return localStorage.getItem(key)
}


export const removeToLocalStroage=(key:string)=>{
  if(!key || typeof window=== "undefined"){
    return ""
  }

  return localStorage.removeItem(key)
}
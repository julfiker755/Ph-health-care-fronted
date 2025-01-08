import { userRole } from "@/utils/role"
import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

export type IMeta ={
    page:number,
    limit:number,
    total:number
}

export type user_role=keyof typeof userRole


export type ResponseSuccessType={
    data?:any;
    meta?:IMeta
}

export type IGenericErrorResponse={
    statusCode:number,
    message:string,
    errorMessages:IGenericErrorResponse[]
}

export interface DrawerItem {
    title: string;
    path: string;
    parentPath?: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
    child?: DrawerItem[];
}

export const Gender = ["MALE", "FEMALE"];
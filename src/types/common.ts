import { userRole } from "@/utils/role"
import { SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"

export type IMeta ={
    page:number,
    limit:number,
    total:number
}

export type user_role=keyof typeof userRole

export interface DrawerItem {
    title: string;
    path: string;
    parentPath?: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
    child?: DrawerItem[];
}
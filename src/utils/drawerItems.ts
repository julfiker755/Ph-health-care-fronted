import { DrawerItem } from '@/types'
import { userRole } from './role'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReviewsIcon from '@mui/icons-material/Reviews';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';

function DrawerItems(role:userRole):DrawerItem[] {
    const roleItems:DrawerItem[]=[]

    switch(role){
        case userRole.SUPER_ADMIN:
            roleItems.push({
                title:"Dashboard",
                path:`${role}`,
                icon:DashboardIcon,
            },{
                title:"Manage users",
                path:`${role}/mange-users`,
                icon:GroupIcon,
            })
            break;
        case userRole.ADMIN:
            roleItems.push({
                title:"Dashboard",
                path:`${role}`,
                icon:DashboardIcon,
            },{
                title:'Specialties',
                path:`${role}/specialties`,
                icon:TypeSpecimenIcon,
            },{
                title:"Doctors",
                path:`${role}/doctors`,
                icon:MedicalServicesIcon,
            },{
                title:"Schedules",
                path:`${role}/schedule`,
                icon:CalendarMonthIcon,
            },{
                title:"Appointments",
                path:`${role}/appointments`,
                icon:CalendarMonthIcon,
            },{
                title:"Reviews",
                path:`${role}/reviews`,
                icon:ReviewsIcon
            })
        break;
        case userRole.DOCTOR:
            roleItems.push({
                title:"Dashboard",
                path:`${role}`,
                icon:DashboardIcon,
            },{
                title:"Schedules",
                path:`${role}/schedule`,
                icon:CalendarMonthIcon,
            },{
                title:"Appointments",
                path:`${role}/appointments`,
                icon:CalendarMonthIcon,
            })
        break;
        case userRole.PATIENT:
            roleItems.push({
                title:"Appointments",
                path:`${role}/appointments`,
                icon:CalendarMonthIcon,
            },{
                title:'Prescripations',
                path:`${role}/prescripations`,
                icon:DashboardIcon
            },{
                title:"Payment History",
                path:`${role}/payment-history`,
                icon:DashboardIcon
            })
        break;
        default:
        break;
    }

  return [...roleItems]
}

export default DrawerItems
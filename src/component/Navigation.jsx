import { LuLayoutDashboard } from "react-icons/lu";
import { BiStoreAlt } from "react-icons/bi";
import { IoBagOutline } from "react-icons/io5";
import { AiOutlineInbox } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
   export const DashBoardLinks =[
    {
        key:'dashboard',
        Label:'DashBoard',
        path:'/',
        icon:<LuLayoutDashboard/>

    },
    {
        key:'products',
        Label:'Products',
        path:'/products',
        icon:<BiStoreAlt/>

    },
    {
        key:'orders',
        Label:'Orders',
        path:'/orders',
        icon: <IoBagOutline/>

    },
    {
        key:'transaction',
        Label:'Transaction',
        path:'/transaction',
        icon:<AiOutlineInbox/>

    },
    {
        key:'settings',
        Label:'Settings',
        path:'/settings',
        icon: <IoSettingsOutline/>

    },
]
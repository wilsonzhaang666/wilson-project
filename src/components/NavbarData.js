import  React from 'react';
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import AssessmentIcon from "@material-ui/icons/Assessment";
import DashboardIcon from "@material-ui/icons/Dashboard";
import GroupIcon from "@material-ui/icons/Group";
import PermMediaIcon from "@material-ui/icons/PermMedia";

export const NavbarData= [
    {
        title: 'Home',
        icon:<HomeIcon/>,
        link:"/home"
    },    {
        title: 'Mail',
        icon:<MailIcon/>,
        link:"/mail"
    },    {
        title: 'Assessment',
        icon:<AssessmentIcon/>,
        link:"/assessment"
    },    {
        title: 'Dashboard',
        icon:<DashboardIcon/>,
        link:"/dashboard"
    },    {
        title: 'Group',
        icon:<GroupIcon/>,
        link:"/group"
    },    {
        title: 'PermMedia',
        icon:<PermMediaIcon/>,
        link:"/permmedia"
    }
]
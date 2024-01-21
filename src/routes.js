/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import Managers from "views/Admin/Managers";
import Clients from "views/Admin/Clients";
import ContactManager from "views/Admin/ContactManager";
import AddManager from "views/Admin/CRUD/AddManager";
import UserRegister from "views/UserRegister";

import AddClients from "views/Admin/CRUD/AddClients";
import UpdateManager from "views/Admin/CRUD/UpdateManager";
import UpdateClients from "views/Admin/CRUD/UpdateClients";
import ProfileData from "views/Admin/profileData";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/managers",
    name: "Managers",
    icon: "tim-icons icon-badge",
    component: <Managers />,
    layout: "/admin",
  },
  {
    path: "/clients",
    name: "Clients",
    icon: "tim-icons icon-badge",
    component: <Clients />,
    layout: "/admin",
  },
  {
    path: "/contact",
    component: <ContactManager />,
    layout: "/admin",
  },
  {
    path: "/addmanager",
    component: <AddManager />,
    layout: "/admin",
  },
  {
    path: "/register",
    component: <UserRegister />,
    layout: "/admin",
  },
  {
    path: "/contact/:idB",
    component: <ContactManager />,
    layout: "/admin",
  },
  {
    path: "/addmanager",
    component: <AddManager />,
    layout: "/admin",
  },
  {
    path: "/updateManager",
    component: <UpdateManager />,
    layout: "/admin",
  },
  {
    path: "/addclients",
    component: <AddClients/>,
    layout: "/admin",
  },
  {
    path: "/UpdateClients",
    component: <UpdateClients/>,
    layout: "/admin",
  },
  {
    path: "/profile",
    component: <ProfileData />,
    layout: "/admin",
  },
 /* {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <Icons />,
    layout: "/admin",
  },
  /*{
    path: "/map",
    name: "Map",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: <Map />,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: <UserProfile />,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: <Typography />,
    layout: "/admin",
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: <Rtl />,
    layout: "/rtl",
  },*/
];

export default routes;


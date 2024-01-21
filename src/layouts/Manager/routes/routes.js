import Dashboard from "views/Dashboard";

import Reclamations from "views/Manager/Reclamations";
import RecDetails from "views/Manager/RecDetails";
import ContacterClient from "views/Manager/ContacterClient";

var routes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      rtlName: "لوحة القيادة",
      icon: "tim-icons icon-chart-pie-36",
      component: <Dashboard />,
      layout: "/manager",
    },
    {
      path: "/reclamations",
      name: "Reclamations",
      icon: "tim-icons icon-single-copy-04",
      component: <Reclamations />,
      layout: "/manager",
    },
    {
      path: "/details/:idB",
      component: <RecDetails />,
      layout: "/manager",
    },
    {
      path: "/contact/:idB",
      component: <ContacterClient />,
      layout: "/manager",
    },
  ];

  export default routes;
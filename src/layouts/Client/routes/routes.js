import Dashboard from "views/Dashboard";
import Managers from "views/Admin/Managers";
import Clients from "views/Admin/Clients";
import ContactManager from "views/Admin/ContactManager";
import AddManager from "views/Admin/CRUD/AddManager";
import AddReclamation from "views/Client/CRUD/AddReclamation";
import ListReclamation from "views/Client/ListReclamation";
import ViewReclamation from "views/Client/ViewReclamation";


var routes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      rtlName: "لوحة القيادة",
      icon: "tim-icons icon-chart-pie-36",
      component: <Dashboard />,
      layout: "/client",
    },
    {
      path: "/add-reclamation",
      name: "Ajouter une Reclamation",
      icon: "tim-icons icon-badge",
      component: <AddReclamation />,
      layout: "/client",
    },
    {
      path: "/liste-reclamation",
      name: "Liste des reclamations",
      icon: "tim-icons icon-badge",
      component: <ListReclamation />,
      layout: "/client",
    },
    {
      path: "/view-reclamation",
      component: <ViewReclamation />,
      layout: "/client",
    },
    {
      path: "/contact",
      component: <ContactManager />,
      layout: "/client",
    },
    {
      path: "/addmanager",
      component: <AddManager />,
      layout: "/client",
    },
  ];

  export default routes;
import About from "../pages/About";
import Clients from "../pages/Clients";
import FAQ from "../pages/FAQ";
import Portfolio from "../pages/Portfolio";
import Service from "../pages/Service";
import Team from "../pages/Team";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import MainPrivate from "../layout/private/MainPrivate";
import FormProject from "../provate-pages/projects/FormProject";
import ShowEmp from "../provate-pages/employee/ShowEmp";
import FormEm from "../provate-pages/employee/FormEm";




export const PrivateRoute = [
  {
    id: "1",
    path: "/PrivateMain",
    element: <MainPrivate />,
  },
  {
    id: "2",
    path: "/FormProject",
    element: <FormProject />,
  },
  {
    id: "3",
    path: "/FormEm",
    element: <FormEm />,
  },
];

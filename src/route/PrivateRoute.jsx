
import FormProject from "../provate-pages/employee/FormEmp";
import ShowProject from "../provate-pages/projects/ShowProject";
import MainPrivate from "../layout/private/Main";
import FormEm from "../provate-pages/employee/FormEm"




export const PrivateRoute = [
  {
    id: "0",
    path: "/PrivateMain",
    element: <MainPrivate />,
  },
  {
    id: "1",
    path: "/FormProject",
    element: <FormProject />,
  },
  {
    id: "2",
    path: "/",
    element: <ShowProject />,
  },
  {
    id: "3",
    path: "/FormEm",
    element: <FormEm />,
  },

];

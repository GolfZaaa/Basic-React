
import FormProject from "../provate-pages/employee/FormEmp";
import ShowProject from "../provate-pages/projects/ShowProject";
import MainPrivate from "../layout/private/Main";
import FormEm from "../provate-pages/employee/FormEm"
import ShowEmp from "../provate-pages/employee/ShowEmp"
import ShowCertificate from "../provate-pages/certificate/ShowCertificate"


export const PrivateRoute = [
  {
    id: "0",
    path: "/PrivateMain",
    element: <MainPrivate />,
  },
  {
    id: "1",
    path: "/project/create",
    element: <FormProject />,
  },
  {
    id: "2",
    path: "/S",
    element: <ShowProject />,
  },
  {
    id: "3",
    path: "/FormEm",
    element: <FormEm />,
  },
  {
    id: "4",
    path: "/show-employee",
    element: <ShowEmp />,
  },
  {
    id: "5",
    // path: "/certificate/show-certificate",
    path:'/',
    element: <ShowCertificate />,
  },
];

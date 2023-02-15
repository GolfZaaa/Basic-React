import About from "../pages/About";
import Clients from "../pages/Clients";
import FAQ from "../pages/FAQ";
import Portfolio from "../pages/Portfolio";
import Service from "../pages/Service";
import Team from "../pages/Team";
import Home from "../pages/Home";
import Contact from "../pages/Contact";




export const PublicRoute = [
  {
    id: "1",
    path: "/home",
    element: <Home/>
  },
  {
    id: "2",
    path: "/about",
    element: <About />,
  },
  {
    id: "3",
    path: "/clients",
    element: <Clients/>
  },
  {
    id: "4",
    path: "/contact",
    element: <Contact />,
  },
  {
    id: "5",
    path: "/faq",
    element: <FAQ />,
  },
  {
    id: "6",
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    id: "7",
    path: "/service",
    element: <Service />,
  },
  {
    id: "8",
    path: "/team",
    element: <Team />,
  },
];

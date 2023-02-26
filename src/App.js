import logo from "./logo.svg";
import "./App.css";
import Main from "./layout/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicRoute } from "./route/Route";
import { PrivateRoute } from "./route/PrivateRoute";
import Mainprivate from "../src/layout/private/Main"

function App() {
  var pri = 0;

  return (
    <>
      <BrowserRouter>
        {pri === 1 ? (
          <Main>
            <Routes>
              {PublicRoute.map((item) => (
                <Route key={item.id} path={item.path} element={item.element} />
              ))}
            </Routes>
          </Main>
        ) : (

          <Mainprivate>
            <Routes>
              {PrivateRoute.map((item) => (
                <Route key={item.id} path={item.path} element={item.element} />
              ))}
            </Routes>
          </Mainprivate>

        )}
      </BrowserRouter>
    </>
  );
}

export default App;

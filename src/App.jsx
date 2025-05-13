import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Products from "./pages/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* {routes.map((route) => {
            <Route to={route.path} element={route.element} />;
          })} */}
        </Routes>
      </BrowserRouter>

      <Sidebar />
    </>
  );
}

export default App;

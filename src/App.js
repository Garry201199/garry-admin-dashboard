import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import List from "../src/Pages/List/List";
import Single from "../src/Pages/Single/Single";
import Login from "../src/Pages/Login/Login";
import New from "../src/Pages/New/New";
import { userInputs, productInputs } from "./FormSource";
import "./Styles/dark.scss";
import DarkContext from "./Context/DarkContext";
import { useContext } from "react";
function App() {
  const { dark } = useContext(DarkContext);

  return (
    <div className={`app ${dark ? "dark" : ""}  `}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="users">
            <Route index element={<List title="Users List" />}></Route>
            <Route path=":userID" element={<Single />}></Route>
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            ></Route>
          </Route>

          <Route path="products">
            <Route index element={<List title="Products List" />}></Route>
            <Route path=":productID" element={<Single />}></Route>
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

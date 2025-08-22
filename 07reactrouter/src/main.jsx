import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import Header from "./components/Header/Header.jsx";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer.jsx";
import User from "./components/User/User.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} /> {/* without sandwiching */}
      <Route path="about" element={<About />}>
        {/* <Route path="company" element={<About />}></Route>    if want to put more routes after about then put / after "about" like "about/"" and make it sandwiched tag */}
        {/* with sandwiching */}
      </Route>
      <Route path="user" element={<User />}>
        <Route path=":userId" element={<User />}></Route>
      </Route>
      {/* <Route path="user" element={<User />}>
        <Route path=":userId" element={<User />}></Route>       ---------> all thre ways, above, below and current this will work 
      </Route> */}
      {/* --------------------- */}
      {/* <Route path="user/:userId" element={<User />}>   ----------> this will also work   */}
      <Route
        loader={githubInfoLoader}
        path="github"
        element={<Github />}
      ></Route>
      <Route path="*" element={<div>Not Found</div>}></Route>
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

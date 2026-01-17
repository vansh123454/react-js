import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";
import Github, { gitHubInfoLoader } from "./components/Github/Github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/", // this slash '/' is for children and then the element will render
//     element: <Layout />,
//     children: [
//       {
//         path: "", // on '/', Home will render
//         element: <Home />,
//       },
//       {
//         path: "about", // on '/about', About will render
//         element: <About />,
//       },
//       {
//         path: "contact", // on '/contact', Contact will render
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// Other way of Routing
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />    {/* on '/' render Home */}
      <Route path="about" element={<About />} />    {/* on '/about' render About */}
      <Route path="contact" element={<Contact />} />    {/* on '/contact' render Contact */}
      <Route path="user/:userId" element={<User />} /> 
      {/* <Route path="github" element={<Github />} />*/}    {/*{this userId is very imp for every where */}
      <Route 
      path="github" 
      element={<Github />} 
      loader={gitHubInfoLoader}
      />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);

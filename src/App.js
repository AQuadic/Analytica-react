import "./App.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import CheckOut from "./pages/CheckOut";
import InstractorInfo from "./pages/InstractorInfo";
import Successfull from "./pages/Successfull";
import Instructor from "./pages/Instructor";
import ContactForm from "./pages/ContactForm";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "coursesDetails",
        element: <CourseDetails />,
      },
      {
        path: "checkOut",
        element: <CheckOut />,
      },
      {
        path: "instractorInfo",
        element: <InstractorInfo />,
      },
      {
        path: "successfull",
        element: <Successfull />,
      },
      {
        path: "instructor",
        element: <Instructor/>,
      },
      {
        path:"contactForm",
        element:<ContactForm/>
      }
    ],
  },
  {
    path: "/2",
    element: <div>Layout 2</div>,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

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
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgetPassword from "./pages/ForgetPassword";
import SetPassword from "./pages/SetPassword";
import Verify from "./pages/Verify";
import MyCourses from "./pages/MyCourses";
import Certificate from "./pages/Certificate";
import CourseVideo from "./pages/CourseVideo";

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
        path: "courses",
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
      },
      {
        path:"signUp",
        element:<SignUp/>
      },
      {
        path:"signIn",
        element:<SignIn/>
      },
      {
        path:"forgetPassword",
        element:<ForgetPassword/>
      },
      {
        path:"setPassword",
        element:<SetPassword/>
      },
      {
        path:"verify",
        element:<Verify/>
      },
      {
        path: "myCourses",
        element: <MyCourses />,
      },
       {
        path: "certificate",
        element: <Certificate />,
      },
      {
        path: "courseVideo",
        element: <CourseVideo />,
      },
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

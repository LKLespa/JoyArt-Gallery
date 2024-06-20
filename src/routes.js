import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import ErrorPage from "./pages/errorPage";
import Navbar from "./pages/navbar";
import ProfilePage from "./pages/profilePage";
import AboutPage from "./pages/aboutPage";

const routes = createBrowserRouter([
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: 'home',
          element: <HomePage />
        },
        {
          path: 'profile',
          element: <ProfilePage />
        },
        {
          path: 'about-us',
          element: <AboutPage />
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ])

  export default routes;
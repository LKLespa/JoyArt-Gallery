import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/homePage";
import ErrorPage from "./pages/errorPage";
import Navbar from "./pages/navbar";
import ProfilePage from "./pages/profilePage";
import AboutPage from "./pages/aboutPage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import ArtsPage from "./pages/artsPage";
import ArtistProfilePage from "./pages/artistPage";
import UploadArtPage from "./pages/uploadArt";
import ArtistsPage from "./pages/allArtist";

const routes = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <RegisterPage />
    },
    {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: '',
          element: <HomePage />
        },
        {
          path: 'profile',
          element: <ProfilePage />
        },
        {
          path: 'about-us',
          element: <AboutPage />
        },
        {
          path: 'art/:artId',
          element: <ArtsPage />
        },
        {
          path: 'artist/:artistId',
          element: <ArtistProfilePage />
        },
        {
          path: 'add-art',
          element: <UploadArtPage />
        },
        {
          path: 'artists',
          element: <ArtistsPage />
        }
      ]
    },
    {
      path: '*',
      element: <ErrorPage />
    }
  ])

  export default routes;
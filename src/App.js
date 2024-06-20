import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <RouterProvider router={routes} />
  );
}

export default App;

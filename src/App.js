import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import { ThemeProvider } from '@emotion/react';
import {darkTheme} from './theme';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <div style={{
          backgroundColor: darkTheme.palette.background.default,
          width: '100vw',
          height: '100vh',
        }}>
        <RouterProvider router={routes} />
        </div>
    </ThemeProvider>
  );
}

export default App;

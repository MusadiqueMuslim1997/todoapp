import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Chikcken from './pages/Chikcken.jsx';
import Beef from './pages/Beef.jsx';
import Mutton from './pages/Mutton.jsx';
import Sindhi from './pages/Sindhi.jsx';
import Chapli from './pages/Chapli.jsx';
import Seekh from './pages/Seekh.jsx';
import Reshmi from './pages/Reshmi.jsx';
import Shami from './pages/Shami.jsx';
import Cuban from './pages/Cuban.jsx';
import Roman from './pages/Roman.jsx';
import Sicilian from './pages/Sicilian.jsx';
import Bbq from './pages/Bbq.jsx';
import Vanilla from './pages/Vanilla.jsx';
import Chocolate from './pages/Chocolate.jsx';
import Strawberry from './pages/Strawberry.jsx';
import Moose from './pages/Moose.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/chicken',
    element: <Chikcken />,
  },
  {
    path: '/beef',
    element: <Beef />,
  },
  {
    path: '/mutton',
    element: <Mutton />,
  },
  {
    path: '/sindhi',
    element: <Sindhi />,
  },
  {
    path: '/chapli',
    element: <Chapli />,
  },
  {
    path: '/seekh',
    element: <Seekh />,
  },
  {
    path: '/reshmi',
    element: <Reshmi />,
  },
  {
    path: '/shami',
    element: <Shami />,
  },
  {
    path: '/cuban',
    element: <Cuban />,
  },
  {
    path: '/roman',
    element: <Roman />,
  },
  {
    path: '/sicilian',
    element: <Sicilian />,
  },
  {
    path: '/bbq',
    element: <Bbq />,
  },
  {
    path: '/vanilla',
    element: <Vanilla />,
  },
  {
    path: '/chocolate',
    element: <Chocolate />,
  },
  {
    path: '/strawberry',
    element: <Strawberry />,
  },
  {
    path: '/moose',
    element: <Moose />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

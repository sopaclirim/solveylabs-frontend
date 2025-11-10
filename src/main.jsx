import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import './i18n.js';

import App from './App.jsx'
import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';
import Careers from './pages/Careers.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    { index: true, element: <Home /> },
    { path: 'blog', element: <Blog /> },
    { path: 'careers', element: <Careers /> },
    { path: 'contact', element: <Contact /> },
  ]}
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

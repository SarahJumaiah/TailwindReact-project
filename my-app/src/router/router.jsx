import { createBrowserRouter } from 'react-router-dom';
import App from '../App';           
import About from '../pages/About'; 
import Contact from '../pages/Contact'; 
import { Link } from 'react-router-dom'; 


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />, 
    },
    {
      path: '/about', 
      element: <About />,
    },
    {
      path: '/contact', 
      element: <Contact />,
    },
  ]);

export default router;

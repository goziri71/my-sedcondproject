import { createBrowserRouter, RouterProvider } from'react-router-dom';
import Mainpage from './components/Mainpage';
import TestingUser from './components/TestingUser';
import Usainterface from './components/Usainterface';
import Store from './components/Store';
import Loggg from './components/Loggg';
import ContextProvider from './context/AuthContext';


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Mainpage/> 
    },
    {
        path:'/Loggg',
        element: <Loggg/>
    },
    {
        path:'/TestingUser',
        element: <TestingUser/>
    },
    {
        path:'/Usainterface',
        element: <Usainterface/>
    },
    {
        path:'/Store',
        element: <ContextProvider><Store/></ContextProvider>
    },
])
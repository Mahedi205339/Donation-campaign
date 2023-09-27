import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationDetails from "../components/DonationDetails/DonationDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader: () =>fetch('/data.json')
            },
            {
                path : '/donation',
                element:<Donation></Donation>,
                loader:()=>fetch('/data.json')
            },
            {
                path :'/statistics',
                element: <Statistics></Statistics>
            },
            {
            path :"/donations/:id",
            element:<DonationDetails></DonationDetails>,
            loader:()=>fetch('/data.json')
            }
        ]
    }

])


export default myCreatedRoute;
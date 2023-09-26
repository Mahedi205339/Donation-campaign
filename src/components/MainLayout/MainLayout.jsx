import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>

        </div>
    );
};

export default MainLayout;
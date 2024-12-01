import { Outlet } from "react-router-dom";
import Navbar from "../SmallCompo/Navbar";

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-5xl w-full p-12  mx-auto border-4 border-green-400">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;
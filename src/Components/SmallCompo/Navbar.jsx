import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-green-400 text-black py-4 mb-8">
            <h3 className="font-semibold text-3xl text-center">User Management System</h3>
            <div className="flex gap-6 items-center text-lg">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/signin"}>Signin</NavLink>
                <NavLink to={"/authUsers"}>AuthUsers</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
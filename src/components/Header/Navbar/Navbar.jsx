import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="flex flex-col md:flex-row justify-between items-center mt-2">
                <div className="w-40 lg:w-64 mb-3">
                <img src="/src/assets/logo/Logo.png" alt="" />
                </div>
                <ul className="flex gap-6 text-lg font-bold">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "text-[#FF444A] text-lg underline font-bold"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "text-[#FF444A] text-lg underline font-bold"
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "text-[#FF444A] text-lg underline font-bold"
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
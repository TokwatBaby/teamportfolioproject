import { House, UsersRound, Layers, ContactRound } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    const navItems = [
        { icon: House, label: "Home", to: "/HomePage" },
        { icon: UsersRound, label: "Members", to: "/ProfilePage" },
        { icon: Layers, label: "Projects", to: "/ProjectPage" },
        { icon: ContactRound, label: "Contact", to: "/ContactPage" },
    ];

    return (
        <header className="flex justify-center fixed object-bottom bottom-10 w-full z-10 bg-transparent bg-clip-text">
            <nav>
                <ul className="flex justify-center space-x-10 p-[15px] w-90 rounded-full text-white 
                            bg-[linear-gradient(to_bottom,_rgba(51,51,51,0.75),_rgba(37,37,37,0.75))]">
                    {navItems.map(({ icon: Icon, label, to }, index) => {
                        const isActive = location.pathname === to;

                        return (
                            <li key={index}>
                                <NavLink to={to} className="group relative inline-block">
                                    <Icon
                                        size={30}
                                        strokeWidth={3}
                                        className={`fill-transparent transition-colors duration-300 ${
                                            isActive
                                                ? "stroke-[url(#gradient)]"
                                                : "stroke-white group-hover:stroke-[url(#gradient)]"
                                        }`}
                                    />
                                    {/* Define gradient only once and outside loop if preferred */}
                                    <svg width="0" height="0" className="absolute">
                                        <defs>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#00FFFF" />
                                                <stop offset="100%" stopColor="#00A3FF" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <span
                                        className={`absolute bottom-[-5px] left-0 w-full h-[2px] 
                                            bg-gradient-to-r from-[#00FFFF] to-[#00A3FF] 
                                            origin-left transition-transform duration-300 ${
                                                isActive
                                                    ? "scale-x-100"
                                                    : "scale-x-0 group-hover:scale-x-100"
                                            }`}
                                    ></span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
}

export default Header;

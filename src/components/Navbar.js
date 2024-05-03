import { Link, useLocation } from "react-router-dom";
import { useState } from "react"
import Sidebar from "./Sidebar";
import { faHome,faList,faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    const location = useLocation()
    const [showsidebar, setShowSidebar] = useState(false);
    const links=[
        {
            name : "Home",
            path: "/",
            icon: faHome
        },
        {
            name : "Recipes",
            path: "/recipes",
            icon: faList
        },
        {
            name : "Setting",
            path: "/setting",
            icon: faCog
        }
    ]
    function closeSideBar(){
        setShowSidebar(false)
    }
    return (
        <>
            <div className="navbar container">
                <Link to="/" className="logo">F<span>oo</span>dieHub</Link>
                <div className="nav-links">
                    {links.map(link=>(
                        <Link className={location.pathname === link.path ? "active" : ""}to={link.path} key={link.name}>{link.name}</Link>
                    ))}
        
                </div>
                <div onClick={()=>setShowSidebar(true)} className={showsidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            {showsidebar && <Sidebar close={closeSideBar} links={links} />}
            
        </>
    )
}
import { Outlet, Link } from "react-router-dom";
import "./navstyle.css"
const Layout = () => {
    return (
        <>
            <nav className="NavBar">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/latest">Latest</Link>
                    </li>
                    <li>
                        <Link to="/hottest">Hottest</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                    <li className="reg">
                        <Link to="/register">Register</Link>
                    </li>
                    <li className="reg">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )
};

export default Layout;
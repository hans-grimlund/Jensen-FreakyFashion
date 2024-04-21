import './Sidebar.css'
import {Link} from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className="sidebar h-100 bg-light border-end p-4">
            <ul className="list-unstyled text-light d-flex flex-column">
                <Link to="/admin/dashboard" className="lead">Dashboard</Link>
                <Link to="/admin/products" className="lead mt-4">Products</Link>
            </ul>
        </div>
    )
}
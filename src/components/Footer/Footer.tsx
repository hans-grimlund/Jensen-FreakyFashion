import './Footer.css'
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <div className="col-12 bg-light p-5 bottom-0 d-flex flex-column">
            <div className="d-flex gap-5">
                <div className="d-flex flex-column">
                    <span className='fw-bold mb-2'>Shopping</span>
                    <div className="footer-links d-flex flex-column gap-2">
                        <Link to='/'>Winter jackets</Link>
                        <Link to='/'>Puffer jackets</Link>
                        <Link to='/'>Trench Coats</Link>
                        <Link to='/'>Coats</Link>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <span className='fw-bold mb-2'>My pages</span>
                    <div className="footer-links d-flex flex-column gap-2">
                        <Link to='/'>My orders</Link>
                        <Link to='/'>My profile</Link>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <span className='fw-bold mb-2'>Customer support</span>
                    <div className="footer-links d-flex flex-column gap-2">
                        <Link to='/'>Return policy</Link>
                        <Link to='/'>Integrity policy</Link>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <span>© Freaky Fashion</span>
            </div>
        </div>
    )
}
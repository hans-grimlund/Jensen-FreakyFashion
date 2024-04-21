import { FormEvent, useState } from 'react'
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom';

export const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const nav = useNavigate();
    const logoStyle = {
        backgroundImage: 'url(https://freakyfashion.blob.core.windows.net/site/logo.png)',
    }

    const handleSearch = (e: FormEvent) => {
        e.preventDefault();
        nav('/search/' + searchTerm);
        setSearchTerm("");
    }

    return (
        <div className="p-4 col-12 border-bottom">
            <div className="d-flex align-items-center">
                <Link to='/' className="logo border rounded-4 image" style={logoStyle}></Link>
                <form onSubmit={(e) => {handleSearch(e)}} className="ms-4">
                    <input onChange={(e) => {setSearchTerm(e.target.value)}}
                           value={searchTerm} type="search" className='border rounded-4 bg-light ps-3 p-1' placeholder='Sök' />
                </form>
            </div>
            <div className="d-flex justify-content-between mt-4" style={{ width: '300px'}}>
                <Link to='/'>Home</Link>
                <Link to=''>Offers</Link>
                <Link to=''>Campaigns</Link>
            </div>
        </div>

    )
}
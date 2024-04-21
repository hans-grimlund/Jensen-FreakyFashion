import { Route, Routes } from 'react-router-dom'
import './App.css'
import {Navbar} from "./components/Navbar/Navbar.tsx";
import {Footer} from "./components/Footer/Footer.tsx";
import {HomePage} from "./pages/HomePage/HomePage.tsx";
import {ProductPage} from "./pages/ProductPage/ProductPage.tsx";
import {SearchPage} from "./pages/SearchPage/SearchPage.tsx";
import {TopBar} from "./pages/Admin/components/TopBar/TopBar.tsx";
import { Sidebar } from './pages/Admin/components/Sidebar/Sidebar.tsx';
import {DashboardPage} from "./pages/Admin/Pages/DashboardPage/DashboardPage.tsx";
import {ProductsPage} from "./pages/Admin/Pages/ProductsPage/ProductsPage.tsx";
import {NewProductPage} from "./pages/Admin/Pages/NewProductPage/NewProductPage.tsx";


export const App = () => {
    if (window.location.pathname == '/admin') {
        return (
            <div className="position-relative d-flex flex-column" style={{height: '100vh'}}>
                <TopBar />
                <div className="col-12 d-flex h-100">
                    <div className="flex-grow-0">
                        <Sidebar />
                    </div>
                    <div className="flex-grow-1">
                        <Routes>
                            <Route path="/admin/dashboard" element={<DashboardPage />} />
                            <Route path="/admin/products" element={<ProductsPage />} />
                            <Route path="/admin/products/new" element={<NewProductPage />} />
                        </Routes>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="position-relative" style={{height: '100vh'}}>
            <Navbar />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/product/:productName' element={<ProductPage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/search/:searchterm' element={<SearchPage />} />
            </Routes>
            <Footer />
        </div>
    )
}
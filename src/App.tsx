import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { ProductPage } from "./pages/ProductPage/ProductPage.tsx";
import { SearchPage } from "./pages/SearchPage/SearchPage.tsx";
import { DashboardPage } from "./pages/Admin/Pages/DashboardPage/DashboardPage.tsx";
import { ProductsPage } from "./pages/Admin/Pages/ProductsPage/ProductsPage.tsx";
import { NewProductPage } from "./pages/Admin/Pages/NewProductPage/NewProductPage.tsx";

export const App = () => {
    return (
        <div className="position-relative" style={{height: '100vh'}}>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/product/:productName" element={<ProductPage/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/search/:searchterm" element={<SearchPage/>}/>
                <Route path="/admin" element={<DashboardPage/>}/>
                <Route path="/admin/dashboard" element={<DashboardPage/>}/>
                <Route path="/admin/products" element={<ProductsPage/>}/>
                <Route path="/admin/products/new" element={<NewProductPage/>}/>
            </Routes>
        </div>
    );
};

import './ProductPage.css'
import {useParams} from "react-router-dom";
import {getProducts} from "../../Services/APIService.tsx";
import {FilterClass} from "../../classes/FilterClass.tsx";
import {useEffect, useState} from "react";
import {ProductClass} from "../../classes/ProductClass.tsx";
import {Spinner} from "../../components/Spinner/Spinner.tsx";
import {Navbar} from "../../components/Navbar/Navbar.tsx";
import {Footer} from "../../components/Footer/Footer.tsx";

export const ProductPage = () => {
    const { productName } = useParams();
    const [product, setProduct] = useState<ProductClass>();
    const [productElement, setProductElement] = useState<JSX.Element>();
    const [isloading, setIsloading] = useState<boolean>(true);
    const imageStyle = {
        backgroundImage: `url(https://freakyfashion.blob.core.windows.net/items/${product?.name}.jpeg)`
    }

    const fetchProduct = async () => {
        setIsloading(true);
        try {
            if (productName) {
                const filters = new FilterClass();
                filters.itemName = productName;
                const product = await getProducts(filters);
                if (product) {
                    setProduct(product[0]);
                }
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setIsloading(false);
        }
    }

    useEffect(() => {
        if (product) {
            setProductElement(
                <>
                    <div className="image product-image rounded-4" style={imageStyle} />
                    <div className="ms-5 d-flex flex-column">
                        <h3>{product?.displayName}</h3>
                        <span className="mt-2">{product?.description}</span>
                        <span className="lead mt-4">{product?.price} SEK</span>
                        <div className="mt-4">
                            <button className="btn btn-outline-dark">Put in cart</button>
                        </div>
                    </div>
                </>
            )
            if (product.displayName)
                document.title = product.displayName;
        }
    }, [product]);

    useEffect(() => {
        fetchProduct();
    }, []);
    return (
        <>
            <Navbar />
            <div className="d-flex p-4">
                {isloading ? <Spinner /> : productElement}
            </div>
            <Footer />
        </>
    )
}
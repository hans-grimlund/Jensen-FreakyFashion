import {useParams} from "react-router-dom";
import {ProductCard} from "../../components/ProductCard/ProductCard.tsx";
import {useEffect, useState} from "react";
import {getProducts} from "../../Services/APIService.tsx";
import {FilterClass} from "../../classes/FilterClass.tsx";
import {ProductClass} from "../../classes/ProductClass.tsx";
import { Spinner } from "../../components/Spinner/Spinner.tsx";

export const SearchPage = () => {
    const { searchterm } = useParams()
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [products, setProducts] = useState<ProductClass[]>([]);
    const [productCards, setProductCards] = useState<JSX.Element[]>([]);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            if (searchterm) {
                const filters = new FilterClass();
                filters.searchTerm = searchterm;
                const products = await getProducts(filters);


                    setProducts(products ?? []);
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [searchterm]);

    useEffect(() => {
        if (products) {
            setProductCards(products.map((product) => (
                <ProductCard title={product.displayName} price={product.price} image={product.name} name={product.name} />
            )));
        }
    }, [products]);

    const resultTitle = (<span>{products.length} results from "{searchterm}"</span>)
    return (
        <div className="d-flex flex-column justify-content-center p-4">
            <div className="d-flex justify-content-center mb-4">
                {isLoading ? null : resultTitle}
            </div>
            <div className="d-flex gap-5 row justify-content-evenly">
                {isLoading ? <Spinner /> : productCards}
            </div>
        </div>
    )
}
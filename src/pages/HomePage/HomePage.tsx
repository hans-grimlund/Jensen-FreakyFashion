import { Hero } from "../../components/Hero/Hero"
import { ProductCard } from "../../components/ProductCard/ProductCard.tsx";
import {Spot} from "../../components/Spot/Spot.tsx";
import {useEffect, useState} from "react";
import {getProducts} from "../../Services/APIService.tsx";
import {ProductClass} from "../../classes/ProductClass.tsx";
import {FilterClass} from "../../classes/FilterClass.tsx";
import { Spinner } from "../../components/Spinner/Spinner.tsx";
import {Navbar} from "../../components/Navbar/Navbar.tsx";
import { Footer } from "../../components/Footer/Footer.tsx";

export const HomePage = () => {
    const [products, setProducts] = useState<ProductClass[]>([]);
    const [productElements, setProductElements] = useState<JSX.Element[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            const products = await getProducts(new FilterClass())
            if (products)
                setProducts(products);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
        document.title = "Freaky Fashion"
    }, [])

    useEffect(() => {
        if (!products)
            return;

        setProductElements(products.map((product) => (
            <ProductCard key={product.id} title={product.displayName} price={product.price} image={product.name} name={product.name} />
        )))
    }, [products]);
    return (
        <>
            <Navbar />
            <div className="p-4">
                <Hero title={'Freaky Fashion'} content={'Volume, history and a beloved monastery, one must capture the teacher in order to view the lama of sincere attitude.'}/>
                <div className={'d-flex row gap-4 col-12 justify-content-evenly p-3'}>
                    <Spot img={'spot1.jpeg'} text={'Do and you will be yearned daily.'} link={'/'} />
                    <Spot img={'spot2.jpeg'} text={'Relativity emerges when you reject with love.'} link={'/'} />
                    <Spot img={'spot3.jpeg'} text={'Disturb and you will be felt daily.'} link={'/'} />
                </div>
                <div className={'p-4 d-flex justify-content-evenly row gap-4 mt-5'}>
                    {isLoading ? <Spinner /> : productElements}
                </div>
                <div className={'d-flex p-4 gap-4 col-12 justify-content-evenly text-nowrap mt-5'}>
                    <div className={'d-flex align-items-center'}>
                        <span className={'material-symbols-outlined me-2'}>globe</span>
                        <span>Free shipping and returns</span>
                    </div>
                    <div className={'d-flex align-items-center ms-4'}>
                        <span className={'material-symbols-outlined me-2'}>travel</span>
                        <span>Express delivery</span>
                    </div>
                    <div className={'d-flex align-items-center ms-4'}>
                        <span className={'material-symbols-outlined me-2'}>security</span>
                        <span>Secure payments</span>
                    </div>
                    <div className={'d-flex align-items-center ms-4'}>
                        <span className={'material-symbols-outlined me-2'}>sentiment_satisfied</span>
                        <span>Daily news</span>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
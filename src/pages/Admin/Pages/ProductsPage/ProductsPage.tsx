import {getProducts, removeProduct} from "../../../../Services/APIService.tsx";
import {FilterClass} from "../../../../classes/FilterClass.tsx";
import {useEffect, useState} from "react";
import {ProductClass} from "../../../../classes/ProductClass.tsx";
import {Spinner} from "../../../../components/Spinner/Spinner.tsx";
import {Dialog} from "../../../../components/Dialog/Dialog.tsx";
import {useNavigate} from "react-router-dom";
import {TopBar} from "../../components/TopBar/TopBar.tsx";
import {Sidebar} from "../../components/Sidebar/Sidebar.tsx";

export const ProductsPage = () => {
    const [products, setProducts] = useState<ProductClass[]>([]);
    const [productElements, setProductElements] = useState<JSX.Element[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [deleteDialogIsVisible, setDeleteDialogIsVisible] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<string>("");
    const nav = useNavigate();

    const fetchProducts = async () => {
        setIsLoading(true);
        try {
            const filters = new FilterClass();
            const products = await getProducts(filters);
            if (products) {
                setProducts(products);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    }

    const handleDelete = (sku: string) => {
        setDeleteDialogIsVisible(true);
        setSelectedProduct(sku);
    }

    const deleteProduct = async () => {
        setDeleteDialogIsVisible(false);
        await removeProduct(selectedProduct);
        fetchProducts();
    }

    useEffect(() => {
        setProductElements(
            products.map((product) => (
                <tr key={product.id}>
                    <td>{product.displayName}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td className="text-decoration-underline">
                        <span role="button" onClick={() => {handleDelete(product.name)}}>Delete</span>
                    </td>
                </tr>
            ))
        )
    }, [products]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const table = (
        <table className="table table-bordered table-striped border">
            <thead>
            <tr>
                <th scope="col">Product</th>
                <th scope="col">SKU</th>
                <th scope="col">Price</th>
                <th scope="col"></th>
            </tr>
            </thead>
            <tbody>
                {productElements}
            </tbody>
        </table>
    )
    return (
        <div className="position-relative d-flex flex-column" style={{height: '100vh'}}>
            <TopBar/>
            <div className="col-12 d-flex h-100">
                <div className="flex-grow-0">
                    <Sidebar/>
                </div>
                <div className="flex-grow-1">
                    <div className="p-4 d-flex flex-column">
                        {deleteDialogIsVisible ?
                            <Dialog text="Delete product?" handleYes={deleteProduct} handleNo={() => {
                                setDeleteDialogIsVisible(false)
                            }}/> : null}
                        <div className="col-12 d-flex justify-content-between align-items-center">
                            <h2>Products</h2>
                            <button onClick={() => {
                                nav("new")
                            }} className="btn btn-outline-success">New product
                            </button>
                        </div>
                        <div className="mt-4">
                            {isLoading ? <Spinner/> : table}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
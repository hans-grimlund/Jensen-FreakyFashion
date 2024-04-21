import {api} from "../APIKeys.tsx";
import {FilterClass} from "../classes/FilterClass.tsx";
import {ProductClass} from "../classes/ProductClass.tsx";
import {ProductCreateClass} from "../classes/ProductCreateClass.tsx";

export const getProducts = async (filters: FilterClass) => {
    try {
        const response = await fetch(api + "/Item/get/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(filters)
        })

        if (response.ok) {
            const json: ProductClass[] = await response.json();
            return json;
        }
    }
    catch (error) {
        console.log(error);
    }
}

export const addProduct = async (product: ProductCreateClass) => {
    try {
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('displayName', product.displayName);
        formData.append('description', product.description);
        formData.append('price', product.price.toString());

        if (product.image)
            formData.append('image', product.image);

        console.log(formData)
        await fetch(api + "/Item/add", {
            method: "POST",
            headers: {
            },
            body: formData
        })
    } catch (error) {
        console.log(error);
    }
}

export const removeProduct = async (sku: string) => {
    try {
        await fetch(api + `/Item/delete?sku=${sku}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
    }
    catch (error) {
        console.log(error);
    }
}
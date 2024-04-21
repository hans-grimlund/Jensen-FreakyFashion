import {FormEvent, useState} from "react";
import {ProductCreateClass} from "../../../../classes/ProductCreateClass.tsx";
import {addProduct} from "../../../../Services/APIService.tsx";
import {useNavigate} from "react-router-dom";

export const NewProductPage = () => {
    const [formData, setFormData] = useState(new ProductCreateClass())
    const nav = useNavigate();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await addProduct(formData)
            nav('/admin/dashboard')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="p-5">
            <h2>New product</h2>
            <form onSubmit={(e) => handleSubmit(e)} className="d-flex flex-column col-4">
                <div className="mt-4 d-flex flex-column">
                    <label htmlFor="name">SKU</label>
                    <input onChange={(e) => {setFormData(prev => ({
                        ...prev,
                        name: e.target.value}))}} value={formData.name} className="form-control" type="text" id="name" name="name"/>
                </div>
                <div className="mt-4 d-flex flex-column">
                    <label htmlFor="displayName">Title</label>
                    <input onChange={(e) => {setFormData(prev => ({
                        ...prev,
                        displayName: e.target.value}))}} value={formData.displayName} className="form-control" type="text" id="displayName" name="displayName"/>
                </div>
                <div className="mt-4 d-flex flex-column">
                    <label htmlFor="description">Description</label>
                    <textarea onChange={(e) => {setFormData(prev => ({
                        ...prev,
                        description: e.target.value
                    }))}} value={formData.description} className="form-control" id="description" name="description"/>
                </div>
                <div className="mt-4 d-flex flex-column">
                    <label htmlFor="image">Image (JPEG)</label>
                    <input onChange={(e) => {setFormData(prev => ({
                        ...prev,
                        image: e.target.files ? e.target.files[0] : null
                    }))}} className="form-control" type="file" name="image" id="image"/>
                </div>
                <div className="mt-4 d-flex flex-column col-4">
                    <label htmlFor="price">Price</label>
                    <input onChange={(e) => {setFormData(prev => ({
                        ...prev,
                        price: Number(e.target.value)
                    }))}} className="form-control" id="price" name="price" type="number"/>
                </div>
                <div className="mt-4">
                    <button className="btn btn-success">Upload</button>
                </div>
            </form>
        </div>
    )
}
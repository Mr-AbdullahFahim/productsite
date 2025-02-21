import { useState } from "react";
import axios from "axios";

export default function CreateProduct() {
    const initProduct = {
        name: '',
        price: '',
        quantity: ''
    };
    const [product, setProduct] = useState(initProduct);

    const handleSubmit = (event) => {
        event.preventDefault();

        
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        
        axios.post('http://127.0.0.1:8000/api/products/store', product, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': csrfToken, 
            }
        })
        .then(response => {
            console.log('Success:', response.data);
            window.location.href='/products';
        })
        .catch(error => {
            console.error('Error:', error.response || error.message);
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "price" || name === "quantity") {
            setProduct({ ...product, [name]: value ? parseFloat(value) : '' });
        } else {
            setProduct({ ...product, [name]: value });
        }
    };

    return (
        <div className="product-container">
            <form onSubmit={handleSubmit}>
                <h2 className="heading">Create Product</h2>
                <label htmlFor="name">Name</label>
                <input
                    name="name"
                    id="name"
                    type="text"
                    value={product.name}
                    onChange={handleChange}
                />
                <label htmlFor="price">Price</label>
                <input
                    name="price"
                    id="price"
                    type="number"
                    value={product.price || ''}
                    onChange={handleChange}
                />
                <label htmlFor="quantity">Quantity</label>
                <input
                    name="quantity"
                    id="quantity"
                    type="number"
                    value={product.quantity || ''}
                    onChange={handleChange}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

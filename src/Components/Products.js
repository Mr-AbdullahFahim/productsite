import './Products.css';
import useProducts from '../hooks/useProducts';

export default function Products() {
    const products = useProducts();  // Assuming this is an object with a 'products' array
    console.log(products.products);
    const createPageLoad = () =>{
        window.location.href='/create-product';
    }
    const edit = (id)=>{
        
    }
    return (
        <div className="product-container">
            <h2 className="heading">Products</h2>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.products && products.products.length === 0 ? (  // Check products.products array
                        <tr>
                            <td colSpan="4">Loading...</td>
                        </tr>
                    ) : (
                        products.products && products.products.map((product, index) => (  // Ensure products is not null
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                                <td><button id={product.id} onClick={edit(this.id)}>Edit</button></td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <button onClick={createPageLoad}>Add product</button>
        </div>
    );
}

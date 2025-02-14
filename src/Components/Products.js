import './Products.css';
import useProducts from '../hooks/useProducts';

export default function Products() {
    const products = useProducts();
    console.log(products.products);
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
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? (  // If products is empty, show loading
                        <tr>
                            <td colSpan="4">Loading...</td>
                        </tr>
                    ) : (
                        products.products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

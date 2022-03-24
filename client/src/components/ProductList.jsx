import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const ProductList = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            console.log(res.data);
            setProducts(res.data)
        })
        .catch()
    }, [props.refresh])

    const deleteProduct = (deleteId) => {
        console.log(deleteId);
        axios.delete("http://localhost:8000/api/products/"+deleteId)
        .then(res => {
            console.log(res.data);
            // remove from DOM after a succesfull delete
            setProducts(products.filter(product => product._id !== deleteId))
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h3>All Products:</h3>
            {
                products.map((product, idx) => {
                    return (
                        <div key={product._id}>
                            <Link to={`/products/${product._id}`}><h5>{ product.title }</h5></Link>
                            <button onClick={ () => deleteProduct(product._id)}>Delete</button>
                            <button><Link to={`product/update/${product._id}`}>Edit</Link></button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList
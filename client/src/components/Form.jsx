import React, {useState} from 'react'
import axios from 'axios';

const Form = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")

    const createProduct = (e) => {
        e.preventDefault();
        console.log(title, price, description)

        const newProduct = {
            title: title,
            price: price,
            description: description
        }

        axios.post('http://localhost:8000/api/products', newProduct)
        .then(res => {
            console.log(res.data);
            props.changeRefresh()
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h2>Product Manager</h2>
            <form onSubmit={createProduct}>
                <p>Title</p>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title}/>

                <p>Price</p>
                <input type="number" onChange={e => setPrice(e.target.value)} value={price} />

                <p>Description</p>
                <input type="text" onChange={e => setDescription(e.target.value)} value={description} />
                <br />
                <button>Create</button>
            </form>
        </div>
    )
}

export default Form
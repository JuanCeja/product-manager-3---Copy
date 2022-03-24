import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const Update = (props) => {

    const history = useHistory()

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")

    const { id } = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => {
                console.log(res)
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
            })
            .catch(err => console.log(err))
    }, [id])

    const UpdateProduct = (e) => {
        e.preventDefault();
        console.log(title, price, description)

        const newProduct = {
            title: title,
            price: price,
            description: description
        }

        axios.put(`http://localhost:8000/api/products/${id}`, newProduct)
        .then(res => {
            console.log(res.data);
            history.push('/')
        })
        .catch(err => console.log(err, "&*&*&*&*&*&**"))
    }

    return (
        <div>
            <h2>Update Product</h2>
            <form onSubmit={UpdateProduct}>
                <p>Title</p>
                <input type="text" onChange={e => setTitle(e.target.value)} value={title} />

                <p>Price</p>
                <input type="number" onChange={e => setPrice(e.target.value)} value={price} />

                <p>Description</p>
                <input type="text" onChange={e => setDescription(e.target.value)} value={description} />
                <br />
                <button>Update</button>
            </form>
        </div>
    )
}

export default Update
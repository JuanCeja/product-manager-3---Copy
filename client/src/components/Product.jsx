import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const ProductView = (props) => {

    const { id } = useParams()
    
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            console.log(res.data)
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
            // console.log(title)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1>{title}</h1>
            <h5>${price}</h5>
            <h5>{description}</h5>
        </div>
    )
}

export default ProductView
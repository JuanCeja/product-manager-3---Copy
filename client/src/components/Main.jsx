import React from 'react'
import Form from './Form'
import ProductList from './ProductList'
import { useState } from 'react'

const Main = () => {

    const [refresh, setRefresh] = useState(true)

    const changeRefresh = () =>{
        setRefresh(!refresh)
    }

    return (
        <div>
            <Form refresh = {refresh} changeRefresh={changeRefresh}/>
            <ProductList refresh = {refresh}/>
        </div>
    )
}

export default Main
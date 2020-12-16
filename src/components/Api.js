import React from 'react'
import Card from './Card'
function Api() {
    const [data, setdata] = React.useState([])
    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setdata(json)
            })
    },[data])
    console.log(data)
    return (
        <div>
            <Card data={data}/>
        </div>
    )
}

function CategoriesApi() {
    const [data, setdata] = React.useState([])
    React.useEffect(() => {
        fetch('https://fakestoreapi.com/products/category')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[data])
    // console.log(data)
    return (
        <div>
            <Card data={data}/>
        </div>
    )
}

export{
    Api,
    CategoriesApi
} 

import React, { useEffect } from 'react'
import { useState } from 'react'
import './Quantity.css'
const Quantity = (props) => {
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {

        props.quantity(quantity)
    }, [quantity])

    const inputChangedHandler = () => {

    }
    return (
        <div className="d-flex quantity">
            <button className='btn btn-light' onClick={() => setQuantity(quantity - 1)}><i className="fas fa-minus"></i></button>
            <input className='input-quantity' value={quantity} onChange={() => inputChangedHandler()}></input>
            <button className='btn btn-light' onClick={() => setQuantity(quantity + 1)}><i className="fas fa-plus"></i></button>
        </div>
    )
}

export default Quantity
/* eslint-disable react/prop-types */
import { useState } from 'react';
import './productCard.css';
import { Link } from 'react-router-dom';

const ProductCard = (props) => {
    const [roboUnits, setRoboUnits] = useState(0);
    const updateUnitsAndCart = () => {
        props.setCartNumber(props.cartNumber + 1);
        setRoboUnits(roboUnits + 1);
    }

    return (
        <article className='card'>
            <img src={props.details.ImageUrl} alt={props.details.Name} />
            <h3>{props.details.Name}</h3>
            <p className='description'>{props.details.Description}</p>
            <p className='price'>{props.details.Price} €</p>
            <p>Units in the cart: {roboUnits}</p>
            <Link to={`/products/${props.index}`}>Details</Link>
            <button onClick={() => updateUnitsAndCart()}>Add to cart!</button>
        </article>
    )

}

export default ProductCard;
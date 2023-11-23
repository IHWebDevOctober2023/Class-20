/* eslint-disable react/prop-types */
import './newRobotForm.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewRobotForm = (props) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRobot = {
            Name: name,
            Price: price,
            ImageUrl: image,
            Description: description
        };
        props.setRobots((prevData) => [ newRobot, ...prevData])

        console.log(newRobot);
        setName('')
        setPrice('')
        setImage('')
        setDescription('')
        navigate('/products')
    };

    return (
        <div className='form-container'>
            <form onSubmit={(e) => handleSubmit(e)} className="form">
                <label htmlFor="name">Name</label>
                <input onChange={(e) => setName(e.target.value)} value={name} name="name" type="text" />
                <label htmlFor="price">Price</label>
                <input onChange={(e) => setPrice(e.target.value)} value={price} name="price" type="text" />
                <label htmlFor="image">Image url</label>
                <input onChange={(e) => setImage(e.target.value)} value={image} name="image" type="text" />
                <label htmlFor="description">Description</label>
                <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='area' name="description" type="text" />
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default NewRobotForm;
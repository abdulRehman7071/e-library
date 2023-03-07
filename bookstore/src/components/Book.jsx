import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Book.css'
const Book = (props) => {
    const navigate = useNavigate()
    const { _id, name, author, available, desc, img, price } = props.book;
    const handleDelete = () => {
        deleteBook()
    }
    const deleteBook = async () => {
        await axios.delete(`http://localhost:5000/api/books/${_id}`).then(response => response.data)
            .then(() => navigate('/'))

    }
    return (
        <div className="card" >
            <div className="imgContainer">
                <img src={img} alt={name} />

            </div>
            <div className="cardDetails">

                <article>
                    by {author}
                </article>
                <h2>
                    {name}
                </h2>
                <p>
                    {desc}
                </p>
                <h2>
                    Price: ${price} Only
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Button sx={{ backgroundColor: 'white', margin: '0.3rem', border: '1px solid white' }} LinkComponent={Link} to={`/update/${_id}`}>Update</Button>
                    <Button sx={{ backgroundColor: 'white', margin: '0.3rem', border: '1px solid white' }} onClick={handleDelete}> Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default Book
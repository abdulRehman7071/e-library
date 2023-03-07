import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
const AddBook = (e) => {
    const navigate = useNavigate()
    const [bookDetails, setBookDetails] = useState({
        name: '',
        author: '',
        desc: '',
        price: '',
        img: '',
    })
    const [checked, setChecked] = useState(false)
    const handleChange = (e) => {
        setBookDetails(prev => ({
            ...prev,
            [e.target.name]: e.target.value

        }))
        // console.log(bookDetails)

    }
    const uploadBook = async (e) => {
        await axios.post('http://localhost:5000/api/books', {
            name: String(bookDetails.name),
            author: String(bookDetails.author),
            desc: String(bookDetails.desc),
            price: String(bookDetails.price),
            img: String(bookDetails.img),
            available: Boolean(checked)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        uploadBook()
            .then(() => { navigate('/') })
    }
    return (
        <form action="">
            <h1>
                Add Book
            </h1>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Enter Book Name' onChange={handleChange} name='name' value={bookDetails.name} />
            </div>

            <div>
                <label htmlFor="">Author</label>
                <input type="text" placeholder='Enter Author Name' onChange={handleChange} name='author' value={bookDetails.author} />
            </div>

            <div>
                <label htmlFor="">Image</label>
                <input type="text" placeholder='Enter Image URL' onChange={handleChange} name='img' value={bookDetails.img} />
            </div>

            <div>
                <label htmlFor="">Description</label>
                <input type="text" placeholder='Enter Book Description' onChange={handleChange} name='desc' value={bookDetails.desc} />
            </div>

            <div>
                <label htmlFor="">Price</label>
                <input type="text" placeholder='Enter Books Price' onChange={handleChange} name='price' value={bookDetails.price} />
            </div>

            <div className='availableBox'>
                <input type="checkbox" name='available' value={checked} onChange={() => setChecked((prev) => !prev)} />
                <label htmlFor="">Available</label>
            </div>
            <div>
                <button onClick={handleSubmit}>Add</button>
            </div>
        </form>
    )
}

export default AddBook
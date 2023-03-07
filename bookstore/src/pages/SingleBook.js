import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleBook = () => {
    const { id } = useParams();
    const [checked, setChecked] = useState(false)
    const navigate = useNavigate()
    const [bookDetails, setBookDetails] = useState()

    useEffect(() => {
        const fetcHandler = async () => {
            return await axios.get(`http://localhost:5000/api/books/${id}`).then(
                response => response.data
            )
        }
        fetcHandler().then(data => setBookDetails(data.book))

    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBook().then(() => navigate('/'))
    }
    const updateBook = async () => {
        await axios.put(`http://localhost:5000/api/books/${id}`, {
            name: String(bookDetails.name),
            author: String(bookDetails.author),
            desc: String(bookDetails.desc),
            price: String(bookDetails.price),
            img: String(bookDetails.img),
            available: Boolean(checked)
        }).then(response => response.data)
    }
    const handleChange = (e) => {
        setBookDetails(prev => ({
            ...prev,
            [e.target.name]: e.target.value

        }))
        console.log(bookDetails)
    }

    return (
        <div className="singleBook">
            {bookDetails &&
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

                    <div className='availableBox'>   {/* bookDetails.available */}
                        <input type="checkbox" name='available' checked={checked} onChange={() => setChecked((prev) => !prev)} />
                        <label htmlFor="">Available</label>
                    </div>
                    <div>
                        <button onClick={handleSubmit}>Add</button>
                    </div>
                </form>
            }
        </div>
    )
}

export default SingleBook
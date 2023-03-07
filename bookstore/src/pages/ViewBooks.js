
import { Button } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
const ViewBooks = (props) => {

    const navigate = useNavigate()
    // const { _id, name, author, available, desc, img, price } = props.book;
    const URL = 'http://localhost:5000/api/books';
    const fetcHandler = async () => {
        return await axios.get(URL).then((response) => response.data)
    }
    const [booksCollection, setBooksCollection] = useState([])
    useEffect(() => {
        fetcHandler().then((data) => setBooksCollection(data.books))
    }, [])
    return (
        <div className='booksCollections'>
            {
                booksCollection.map((book, id) => (
                    <div className="card" key={id} >
                        <div className="imgContainer">
                            <img src={book.img} alt={book.name} />

                        </div>
                        <div className="cardDetails">

                            <article>
                                by {book.author}
                            </article>
                            <h2>
                                {book.name}
                            </h2>
                            <p>
                                {book.desc}
                            </p>
                            <h2>
                                Price: ${book.price} Only
                            </h2>

                        </div>

                    </div >
                ))
            }

        </div>
    )
}

export default ViewBooks
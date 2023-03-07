import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Book from './Book';
const URL = 'http://localhost:5000/api/books';
const fetcHandler = async () => {
    return await axios.get(URL).then((response) => response.data)
}

const BooksPage = () => {
    const [booksCollection, setBooksCollection] = useState([])
    useEffect(() => {
        fetcHandler().then((data) => setBooksCollection(data.books))
    }, [])

    return (
        <div className="booksCollections">
            {
                booksCollection && booksCollection.map((book, id) => (
                    <Book key={id} book={book} />
                ))
            }
        </div>
    )
}

export default BooksPage
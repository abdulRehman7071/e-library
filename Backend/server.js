const express = require('express');
const app = express();
const mongoose = require('mongoose');
const booksRouter = require('./routes/booksRoutes');
const cors = require('cors');

app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://admin:EvEZKchfWJupVb40@cluster0.rmruxhv.mongodb.net/crud_lib?retryWrites=true&w=majority'
).then(() => {
    console.log('Database connection established')
}).catch((err) => { console.log(err) })

app.use("/api/books", booksRouter)

app.listen(5000, () => {
    console.log('Server Started')
})

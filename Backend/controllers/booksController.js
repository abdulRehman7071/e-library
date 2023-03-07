const Books = require('../model/books')
const getAllBooks = async (req, res) => {
    let books;
    try {
        books = await Books.find()
    }
    catch (err) {
        console.log(err);
    }
    if (!books) {
        return res.status(404).json({ message: 'No Books Found' });
    }
    return res.status(200).json({ books })
}
const addBook = async (req, res) => {
    const { name, author, desc, price, img, available } = req.body
    console.log(name, author, desc, price, img, available)
    let book;
    try {
        book = new Books({
            name,
            author,
            desc,
            price,
            img,
            available
        });
        await book.save()
    } catch (err) { console.log(err) }
    if (!book) {
        return res.status(500).json({ message: 'unable to add' })
    }
    return res.status(201).json({ book })
}
const singleBook = async (req, res) => {
    const id = req.params.id
    let book;
    try {
        book = await Books.findById(id)
    }
    catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: 'No Book Found' });
    }
    return res.status(200).json({ book })
}

const updateBook = async (req, res) => {
    const id = req.params.id
    const { name, author, desc, price, img, available } = req.body
    let book;
    try {
        book = await Books.findByIdAndUpdate(id, {
            name, author, desc, price, img, available
        })
        book = await book.save();

    } catch (err) { }
    if (!book) {
        return res.status(404).json({ message: 'Unable to update' });
    }
    return res.status(200).json({ message: 'Book Updated Successfully' })
};
const deleteBook = async (req, res) => {
    const id = req.params.id
    let book;
    try {
        book = await Books.findByIdAndRemove(id)
    }
    catch (err) {
        console.log(err);
    }
    if (!book) {
        return res.status(404).json({ message: 'unable to delete' });
    }
    return res.status(200).json({ message: 'Book deleted Successfully' })
}
exports.getAllBooks = getAllBooks
exports.addBook = addBook
exports.singleBook = singleBook
exports.updateBook = updateBook
exports.deleteBook = deleteBook 
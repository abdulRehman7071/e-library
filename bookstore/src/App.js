import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Admin from './pages/Admin.js'
// import BooksPage from './pages/BooksPage'
import AddBook from './components/AddBook';
import SingleBook from './pages/SingleBook';
import ViewBooks from './pages/ViewBooks';
function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<ViewBooks />}></Route>
        <Route path='/update' element={<Admin />}></Route>
        <Route path='/update/:id' element={<SingleBook />}></Route>
        <Route path='/add' element={<AddBook />}></Route>
      </Routes>
    </>
  );
}

export default App;

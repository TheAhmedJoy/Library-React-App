import React, { useEffect, useState } from "react";
import Nav from './components/Nav';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import { booksData } from './data'
import BookInfo from './components/BookInfo';
import CartPage from './pages/CartPage';

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    const duplicateItem = cart.find((item) => +item.id === +book.id)
    if (duplicateItem) {
      setCart(cart.map((item) => {
        if (item.id === duplicateItem.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        else {
          return item
        }
      }))
    }
    else {
      setCart([...cart, { ...book, quantity: 1 }])
    }
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={HomePage} />
        <Route path="/books" exact render={() => <BooksPage books={booksData} />} />
        <Route path='/books/:id' render={() => <BookInfo books={booksData} addToCart={addToCart} />} />
        <Route path='/cart' render={() => <CartPage books={booksData} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
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
    setCart([...cart, {...book, quantity: 1}])
  }

  function changeCartItemQuantity(book, newQuantity) {
    setCart(cart.map(item => {
      if (item.id === book.id) {
        return {
          ...item,
          quantity: +newQuantity,
        }
      }
      else {
        return item
      }
    }))
  }

  function removeItemFromCart(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItemsInCart() {
    let itemCounter = 0
    cart.forEach(item => {
      itemCounter += item.quantity
    })

    return itemCounter
  }

  return (
    <Router>
      <div className="App">
        <Nav numberOfItemsInCart={numberOfItemsInCart()}/>
        <Route path="/" exact component={HomePage} />
        <Route path="/books" exact render={() => <BooksPage books={booksData} />} />
        <Route path='/books/:id' render={() => <BookInfo books={booksData} addToCart={addToCart} cart={cart}/>} />
        <Route path='/cart' render={() => <CartPage cart={cart} changeCartItemQuantity={changeCartItemQuantity} removeItemFromCart={removeItemFromCart}/>} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import Nav from './components/Nav';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';
import { booksData } from './data'
import BookInfo from './components/BookInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={HomePage} />
        <Route path="/books" exact render={() => <BooksPage books={booksData} />}/>
        <Route path='/books/1' render={() => <BookInfo books={booksData}/>} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

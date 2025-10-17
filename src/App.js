import Nav from './components/Nav';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import BooksPage from './pages/BooksPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={HomePage} />
        <Route path="/books" component={BooksPage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

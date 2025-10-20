import React from 'react'
import UndrawBooks from '../assets/Undraw_Books.svg'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>The most awarded online library platform</h1>
                    <h2>Find your dream book with <span className="purple"> Ahmed's Library</span></h2>
                    <Link to="#features">
                        <button className="btn">Browse Books</button>
                    </Link>
                </div>
                <figure className="header__img--wrapper">
                    <img src={UndrawBooks} alt=""></img>
                </figure>
            </div>
        </header>
    </section>
  )
}
